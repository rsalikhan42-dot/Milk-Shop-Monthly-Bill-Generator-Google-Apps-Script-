# Milk-Shop-Monthly-Bill-Generator-Google-Apps-Script
Yeh script Google Sheets data se automatic PDF bills bana kar Drive mein save karti hai."A fully automated billing utility using Google Apps Script to read detailed customer data from a Spreadsheet and generate professional, time-triggered PDF bills saved securely to a designated Drive folder."# 🥛 Monthly Milk Bill Generator (Google Apps Script)

---

## 🚀 Project Overview

Yeh ek aasan aur behtareen automation tool hai jo **Google Sheets** mein maujood aapke Milk Shop ke customer data ko istemal karta hai. Yeh script har customer sheet ke liye **customize shuda (customized)** aur **professional-looking PDF bill** generate karke unhe aapke Google Drive folder mein save karta hai.

Yeh project un chote businesses ke liye ideal hai jo **manual billing** ko khatam karke waqt bachana chahte hain.

---

## ✨ Khas Khususiyat (Key Features)

* **Fully Automated PDF Generation:** Sheets data se seedha HTML/CSS based PDF file create karta hai.
* **Customer-wise Billing:** Spreadsheet mein maujood har customer sheet ke liye **alag (separate)** bill generate karta hai.
* **Time-Driven Trigger:** Har mahine ki **2 tareekh** ko yeh function khud-ba-khud (automatically) chalta hai.
* **Google Drive Integration:** Saare bills (PDF format mein) aapke bataye hue Google Drive folder mein mehfooz (safe) ho jaate hain.
* **Clean Data Handling:** Sirf un sheets ke liye bill banta hai jinmein **Grand Total 0** se zyada ho.# 🥛 Monthly Milk Bill Generator (Google Apps Script)

---

## 🚀 Project Overview

Yeh ek aasan aur behtareen automation tool hai jo **Google Sheets** mein maujood aapke Milk Shop ke customer data ko istemal karta hai. Yeh script har customer sheet ke liye **customize shuda (customized)** aur **professional-looking PDF bill** generate karke unhe aapke Google Drive folder mein save karta hai.

Yeh project un chote businesses ke liye ideal hai jo **manual billing** ko khatam karke waqt bachana chahte hain.

---

## ✨ Khas Khususiyat (Key Features)

* **Fully Automated PDF Generation:** Sheets data se seedha HTML/CSS based PDF file create karta hai.
* **Customer-wise Billing:** Spreadsheet mein maujood har customer sheet ke liye **alag (separate)** bill generate karta hai.
* **Time-Driven Trigger:** Har mahine ki **2 tareekh** ko yeh function khud-ba-khud (automatically) chalta hai.
* **Google Drive Integration:** Saare bills (PDF format mein) aapke bataye hue Google Drive folder mein mehfooz (safe) ho jaate hain.
* **Clean Data Handling:** Sirf un sheets ke liye bill banta hai jinmein **Grand Total 0** se zyada ho.

---

## 🛠️ Kaise Istemal Karein (Installation & Setup)

Is script ko chalaane ke liye Google Sheets aur Google Drive zaroori hain.

### Step 1: Apps Script Mein Code Paste Karein

1.  Apni Google Sheet kholein aur **Extensions $\rightarrow$ Apps Script** par jaayen.
2.  File mein maujood **saare puraane code ko delete** karke is repository ka **`BillGenerator.gs`** file content paste kar dein.

### Step 2: Google Drive Folder ID Set Karein (CRITICAL)

`generateMonthlyBills` function ke andar **BILLS_FOLDER_ID** variable mein apni Google Drive folder ki ID daalna lazmi hai.

```javascript
// ===> APNI DRIVE FOLDER ID YAHAN DAALEIN <===
var BILLS_FOLDER_ID = 'YOUR_FOLDER_ID_HERE'; // ID ko single quotes ('') mein daalein.### Step 3: Menu aur Trigger Setup

Code paste karne aur Folder ID theek karne ke baad, yeh aakhri steps hain:

1.  **Menu Load Karein:** Apps Script Editor mein function dropdown se **`onOpen()`** function select karein aur **Run** ($\blacktriangleright$) button dabaayein. (Pehli baar **Authorization** maang sakta hai, jise **Allow** karna lazmi hai).
2.  **Manual Run (Testing):** Apni Google Sheet mein waapas jaakar **🥛 Milk Shop** menu se **📅 Generate Monthly Bills** par click karke test karein aur check karein ke Drive mein PDF save ho raha hai.
3.  **Automatic Trigger Setup:** Apps Script Editor ke **Triggers** ($\text{\textlambda}$) section mein jaakar `generateMonthlyBills` function ko **Time-Driven $\rightarrow$ Month Timer** par apni pasand ki tareekh aur waqt par set karein (masalan: Har mahine ki 2 tareekh).📊 Data StructureScript data uthane ke liye Spreadsheet mein maujood har customer sheet mein in cells par nirbhar (depend) karta hai:CellMaaloomaat (Information)H53Grand Total (Bill ka aakhri amount).H49Total Milk Amount (Rupees).H51Total Other Charges (Rupees).C49Total Milk Quantity (Liters).🛑 Important Notes
Authorization: Jab script pehli baar Drive access karti hai, toh Google aapse ijazat (permission) maangta hai.

Data Errors: Agar aapki sheets mein data errors ya khaali cells hain, toh script automatic run ke dauraan un sheets ko skip kar degi.


