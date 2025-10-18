/**
 * Har Google Sheet kholne par '🥛 Milk Shop' menu banata hai.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🥛 Milk Shop')
    .addItem('📅 Generate Monthly Bills', 'generateMonthlyBills') 
    .addToUi();
}

/**
 * Har Sheet se data padhta hai aur us mahine ke liye PDF bill generate karta hai.
 */
function generateMonthlyBills() {
  // Current date uthata hai
  var now = new Date();
  var month = now.getMonth() + 1; 
  var year = now.getFullYear();

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi(); // CRITICAL: Is line ko Drive call se pehle rakha gaya hai
  
 // generateMonthlyBills function ke andar
// ...
// ===> ZAROORI: APNI DRIVE FOLDER ID <===
// Is line ko bilkul isi tarah rakhein
var BILLS_FOLDER_ID =
 var folder;
  try {
    // Drive access ki koshish
    folder = DriveApp.getFolderById(BILLS_FOLDER_ID);
  } catch (e) {
    ui.alert('CRITICAL Error: Drive folder ID is invalid or not accessible. Check the ID and folder permissions.');
    return;
  }
  
  var sheetsToIgnore = ['Template', 'Summary', 'Instructions', 'Form Responses 1']; 
  var allSheets = ss.getSheets();
  var generatedCount = 0;
 var folder;
  try {
    // Drive access ki koshish
    folder = DriveApp.getFolderById(BILLS_FOLDER_ID);
  } catch (e) {
    ui.alert('CRITICAL Error: Drive folder ID is invalid or not accessible. Check the ID and folder permissions.');
    return;
  }
  
  var sheetsToIgnore = ['Template', 'Summary', 'Instructions', 'Form Responses 1']; 
  var allSheets = ss.getSheets();
  var generatedCount = 0;
ui.alert(`Process Complete! Koi bill generate nahi hua (Total 0 tha).`);
  }
}

/**
 * HTML/CSS design ke zariye PDF file banata hai aur Drive mein save karta hai.
 */
function createPdfBill(customer, month, year, totalMilk, totalMilkAmount, totalOther, grandTotal, folderId) {
…border-radius: 5px; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          td, th { border: 1px solid #ddd; padding: 10px; text-align: left; }
          th { background-color: #bbdefb; color: #333; }
          .total-row td { background-color: #e3f2fd; font-weight: bold; border-top: 3px solid #1e88e5; }
        </style>
</head>
      <body>
        <h1>Milk Shop Monthly Bill</h1>
…          </tr>
        </table>
      </body>
    </html>
  `;
  var blob = HtmlService.createHtmlOutput(html).getAs('application/pdf');
  blob.setName(`${customer}-${month}-${year}.pdf`);

  // Save to Google Drive
  var folder = DriveApp.getFolderById(folderId);
  folder.createFile(blob);
}
