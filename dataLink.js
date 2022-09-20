const express = require("express");
const { auth } = require("google-auth-library");

const {google} = require("googleapis");


const app = express();

 app.get("/", async (req,res) => {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: "abyss-360621-164f11ed580c.json",
//         scopes: "https://www.googlesapis.com/auth/spreadsheets",

//     })
//     // Create client instance for auth
//     const client = await auth.getClient();

//     // Instance of Google Sheets API
//     const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1MFuUFUR9jMbaB1nopdvH89sGW5__ifEOOyCWSHNFSUs";


    // Get metadata about spreadsheet

    // const metaData = await googleSheets.spreadsheets.get({
    //     auth, 
    //     spreadsheetId
    // });




    res.send("metaData");
});









app.listen(1337, (req, res) => console.log("running on 1337"));

