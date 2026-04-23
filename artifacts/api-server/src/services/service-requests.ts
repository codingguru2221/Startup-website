import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export type ServiceRequestInput = {
  name: string;
  age?: string;
  email: string;
  phone?: string;
  service: string;
  description: string;
  budget: string;
};

export type ServiceRequestRecord = ServiceRequestInput & {
  submittedAt: string;
  source: string;
};

type SubmitResult = {
  storedInSheets: boolean;
  emailSent: boolean;
  backupStored: boolean;
  warnings: string[];
};

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} environment variable is required.`);
  }
  return value;
}

function getGooglePrivateKey() {
  return getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n");
}

function formatRequestForEmail(request: ServiceRequestRecord) {
  return [
    "New TheCOdex service request",
    "",
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    `Phone: ${request.phone || "Not provided"}`,
    `Age: ${request.age || "Not provided"}`,
    `Service: ${request.service}`,
    `Budget: ${request.budget}`,
    `Submitted: ${request.submittedAt}`,
    `Description: ${request.description}`,
  ].join("\n");
}

async function appendToGoogleSheets(request: ServiceRequestRecord) {
  const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = getGooglePrivateKey();
  const spreadsheetId = getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const sheetName = getRequiredEnv("GOOGLE_SHEETS_SHEET_NAME");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:I`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        request.submittedAt,
        request.name,
        request.email,
        request.phone || "",
        request.age || "",
        request.service,
        request.budget,
        request.description,
        request.source,
      ]],
    },
  });
}

async function sendEmailNotification(request: ServiceRequestRecord) {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = process.env.SMTP_PORT?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const senderEmail = process.env.NOTIFICATION_FROM_EMAIL?.trim();
  const recipientEmail = process.env.NOTIFICATION_TO_EMAIL?.trim();
  const secure = process.env.SMTP_SECURE?.trim() === "true";

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !senderEmail || !recipientEmail) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"TheCOdex Notifications" <${senderEmail}>`,
    to: recipientEmail,
    replyTo: request.email,
    subject: `New Service Request: ${request.service}`,
    text: formatRequestForEmail(request),
  });

  return true;
}

async function writeLocalBackup(request: ServiceRequestRecord) {
  const dataDir = path.resolve(process.cwd(), ".data");
  await mkdir(dataDir, { recursive: true });
  await appendFile(
    path.join(dataDir, "service-requests.ndjson"),
    `${JSON.stringify(request)}\n`,
    "utf8",
  );
}

export async function submitServiceRequest(request: ServiceRequestRecord): Promise<SubmitResult> {
  const warnings: string[] = [];

  await writeLocalBackup(request);

  try {
    await appendToGoogleSheets(request);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Google Sheets error";
    throw new Error(`Google Sheets storage failed. ${message}`);
  }

  let emailSent = false;

  try {
    emailSent = await sendEmailNotification(request);
    if (!emailSent) {
      warnings.push("Email notification skipped because SMTP env vars are not configured.");
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown email error";
    warnings.push(`Email notification failed. ${message}`);
  }

  return {
    storedInSheets: true,
    emailSent,
    backupStored: true,
    warnings,
  };
}
