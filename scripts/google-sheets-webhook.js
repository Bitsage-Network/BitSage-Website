/**
 * Google Apps Script for BitSage Waitlist Form Submissions
 * Version 2.0 - Fixed data mapping
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Create a new Google Sheet with these EXACT column headers in Row 1:
 *    A: Timestamp
 *    B: User Type
 *    C: First Name
 *    D: Last Name
 *    E: Email
 *    F: Company
 *    G: Job Title
 *    H: Phone
 *    I: Company Size
 *    J: Use Case
 *    K: GPU Types
 *    L: GPU Count
 *    M: Location
 *    N: Uptime
 *    O: Experience
 *    P: Additional Info
 *    Q: Source
 *    R: User Agent
 *
 * 2. Go to Extensions > Apps Script
 *
 * 3. Delete any existing code and paste this entire script
 *
 * 4. Click "Deploy" > "Manage deployments" > Edit (pencil icon)
 *    - Select "New version"
 *    - Click "Deploy"
 *
 * 5. The URL stays the same, no need to update .env.local
 */

// Main function to handle POST requests
function doPost(e) {
  try {
    // Log incoming data for debugging
    Logger.log('Received POST request');
    Logger.log('Post data: ' + e.postData.contents);

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Log parsed data
    Logger.log('Parsed data: ' + JSON.stringify(data));

    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Prepare the row data - MUST match column order exactly
    const row = [
      data.submittedAt || new Date().toISOString(),  // A: Timestamp
      data.userType || '',                            // B: User Type
      data.firstName || '',                           // C: First Name
      data.lastName || '',                            // D: Last Name
      data.email || '',                               // E: Email
      data.company || '',                             // F: Company
      data.jobTitle || '',                            // G: Job Title
      data.phone || '',                               // H: Phone
      data.companySize || '',                         // I: Company Size (enterprise users)
      data.useCase || '',                             // J: Use Case (enterprise users)
      data.gpuTypes || '',                            // K: GPU Types (providers)
      data.gpuCount || '',                            // L: GPU Count (providers)
      data.location || '',                            // M: Location (providers)
      data.uptime || '',                              // N: Uptime (providers)
      data.experience || '',                          // O: Experience (providers)
      data.additionalInfo || '',                      // P: Additional Info
      data.source || 'bitsage-website',               // Q: Source
      data.userAgent || ''                            // R: User Agent
    ];

    // Log the row being added
    Logger.log('Adding row: ' + JSON.stringify(row));

    // Append the row to the sheet
    sheet.appendRow(row);

    // Log success
    Logger.log('Row added successfully');

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        rowData: row
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error
    Logger.log('Error: ' + error.toString());

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'BitSage Waitlist Webhook v2.0 is running. Use POST to submit data.',
      expectedFields: [
        'submittedAt', 'userType', 'firstName', 'lastName', 'email',
        'company', 'jobTitle', 'phone', 'companySize', 'useCase',
        'gpuTypes', 'gpuCount', 'location', 'uptime', 'experience',
        'additionalInfo', 'source', 'userAgent'
      ]
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function - run this manually to verify sheet access
function testSheetAccess() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Last row: ' + sheet.getLastRow());

  // Add a test row
  const testRow = [
    new Date().toISOString(),
    'test',
    'Test',
    'User',
    'test@example.com',
    'Test Company',
    'Developer',
    '555-1234',
    '11-50',
    'ai-training',
    '',
    '',
    '',
    '',
    '',
    'Testing the webhook',
    'manual-test',
    'Apps Script'
  ];

  sheet.appendRow(testRow);
  Logger.log('Test row added successfully');
}
