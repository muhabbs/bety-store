const SHEET_NAME = "Orders";
const OWNER_EMAIL = "your-email@example.com";

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Submitted At",
      "Name",
      "Phone",
      "Product",
      "Category",
      "Quantity",
      "City / Area",
      "Preferred Contact",
      "Notes",
      "Source",
      "Page URL"
    ]);
  }

  return sheet;
}

function doPost(e) {
  const data = e.parameter;
  const sheet = getOrCreateSheet_();

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.product || "",
    data.category || "",
    data.quantity || "",
    data.city || "",
    data.preferredContact || "",
    data.notes || "",
    data.source || "",
    data.pageUrl || ""
  ]);

  if (OWNER_EMAIL && OWNER_EMAIL !== "your-email@example.com") {
    const subject = "New Beity Order";
    const body = [
      "A new order was submitted from the website.",
      "",
      `Name: ${data.name || ""}`,
      `Phone: ${data.phone || ""}`,
      `Product: ${data.product || ""}`,
      `Category: ${data.category || ""}`,
      `Quantity: ${data.quantity || ""}`,
      `City / Area: ${data.city || ""}`,
      `Preferred Contact: ${data.preferredContact || ""}`,
      `Notes: ${data.notes || ""}`,
      `Source: ${data.source || ""}`,
      `Page URL: ${data.pageUrl || ""}`
    ].join("\n");

    MailApp.sendEmail(OWNER_EMAIL, subject, body);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
