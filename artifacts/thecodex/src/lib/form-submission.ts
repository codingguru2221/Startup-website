const DEFAULT_SUBMISSION_URL =
  "https://r2wuqhpjovygficsf43loa32sa0mxdze.lambda-url.us-east-1.on.aws/";

const configuredSubmissionUrl = import.meta.env.VITE_FORM_SUBMISSION_URL?.trim();

export const FORM_SUBMISSION_URL = configuredSubmissionUrl || DEFAULT_SUBMISSION_URL;

function isGoogleAppsScriptUrl(url: string) {
  return url.includes("script.google.com") || url.includes("script.googleusercontent.com");
}

export interface FormSubmissionPayload {
  name: string;
  email: string;
  message: string;
  type: string;
  service?: string;
  budget?: string;
}

export async function submitForm(payload: FormSubmissionPayload) {
  const isGoogleScript = isGoogleAppsScriptUrl(FORM_SUBMISSION_URL);

  if (isGoogleScript) {
    await fetch(FORM_SUBMISSION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return;
  }

  const response = await fetch(FORM_SUBMISSION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response;
}
