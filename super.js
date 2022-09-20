const fs = require("fs");
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('./credentials.json');


const { google } = require("googleapis");
const { GoogleAuth } = require("google-auth-library");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const spreadSheet1Id = "1QpXddWLbjx4ZoFtMYxwUf59wSwE78Xpo3LA8Eg1xJY0";


const a = JSON.parse(fs.readFileSync("Test_Juice_Data_(Master_List).json"));
const b = JSON.parse(fs.readFileSync("testData.json"));

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1QpXddWLbjx4ZoFtMYxwUf59wSwE78Xpo3LA8Eg1xJY0');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    console.log(`Title : ${sheet.title}, Rows : ${sheet.rowCount}`);
}
accessSpreadsheet();


// async function sheetsAutomate() {
//   const auth = new GoogleAuth({
//     keyFile: "./credentials.json",
//     scopes: SCOPES,
//   });
//   const client = await auth.getClient();
//   const sheets = google.sheets({ version: "v4", auth: client });

//   const getRows = await sheets.spreadsheets.values.get({
//     auth,
//     spreadsheetId: spreadSheet1Id,
//     range: "Sheet1!A2:G5",
//   });

//   const keysInSheet = [...getRows.data.values.flat()];

//   const keysNotInSheet = [
//     ...new Set([
//       //...Object.keys(a).filter((key) => !keysInSheet.includes(key)),
//       ...Object.keys(b).filter((key) => !keysInSheet.includes(key)),
//   ])
//   ];

//   const rowToBeAdded = keysNotInSheet.map((key) => {
//     return [key, a[key], b[key]];
    
//   })


// //   try {
// //     await sheets.spreadsheets.values.append({
// //         auth,
// //     spreadsheetId: "1QpXddWLbjx4ZoFtMYxwUf59wSwE78Xpo3LA8Eg1xJY0",
// //     range: "Sheet1!A2:A",
// //     valueInputOption: "SUBMITED",
// //     resource :  {
// //         values: rowsToBeAdded,
// //         },
// //     })
// // } catch (error) {
    
// // }


//   console.log(`getRows.data.values :\n\n ${getRows.data.values}\n, getRows: \n\n${getRows}\n, `);
// }

// sheetsAutomate();
