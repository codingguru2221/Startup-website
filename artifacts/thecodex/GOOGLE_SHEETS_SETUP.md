# Google Sheets Form Setup

You cannot write form data directly to a Google Sheet editor link from the frontend.
The simple no-cloud-API approach is to use a Google Apps Script Web App connected to your sheet.

## 1. Create the sheet

Create a Google Sheet and add this header row in the first sheet:

`timestamp | type | name | email | service | budget | message`

## 2. Open Apps Script

In the Google Sheet:

`Extensions -> Apps Script`

Replace the default code with this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents || "{}");

    sheet.appendRow([
      new Date(),
      data.type || "",
      data.name || "",
      data.email || "",
      data.service || "",
      data.budget || "",
      data.message || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy the script

1. Click `Deploy`
2. Click `New deployment`
3. Select `Web app`
4. Set `Execute as`: `Me`
5. Set `Who has access`: `Anyone`
6. Deploy

Copy the Web App URL. It will look like:

`https://script.google.com/macros/s/DEPLOYMENT_ID/exec`

## 4. Add the URL to the frontend

In your frontend env file, set:

```env
VITE_FORM_SUBMISSION_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

You can use `.env.local` for local development or your production env file for deployment.

## 5. Current form payloads

The website sends:

- `type`
- `name`
- `email`
- `service`
- `budget`
- `message`

`message` already contains the detailed form content for the different inquiry flows.
