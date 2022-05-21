const functions = require("firebase-functions");
const express = require("express");
const { addEntry } = require('./controllers/addEntry');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello anh em Zui Zẻ");
// });


const app = express();
app.get("/", (req, res) => res.status(200).send("Hello anh em Zui Zẻ"));
app.post('/dong-sun', addEntry);

exports.app = functions.https.onRequest(app);

