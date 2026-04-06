# Google Sheets Setup for Beity

Use this once to connect the website order form to Google Sheets.

1. Create a new Google Sheet for your orders.
2. Open `Extensions > Apps Script`.
3. Replace the default code with the contents of `google-apps-script.gs`.
4. Change `OWNER_EMAIL` if you want an email notification for every new order.
5. Click `Deploy > New deployment`.
6. Choose `Web app`.
7. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
8. Deploy and copy the web app URL.
9. Open `script.js`.
10. Replace:

```js
googleSheetsEndpoint: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
```

with your real deployed Apps Script URL.

11. Save the file and publish/update your website.

## What Happens After Setup

- Every order form submission is added as a new row in your Google Sheet.
- If you set `OWNER_EMAIL`, you also receive an email when someone orders.
- If the Apps Script URL is not connected yet, the site falls back to WhatsApp so you still receive the order.

## Product Buttons

The site now links product cards to the order page using URL parameters like:

```text
contact.html?product=Royal%20Living%20Set&category=Living%20Rooms
```

This means when you add a new product card, you can add an `Order Now` button that points to the order page with the product name and category already filled in.
