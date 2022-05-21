const admin = require('firebase-admin');
const serviceAccount = require('./moviestreaming-2022-firebase-adminsdk-4z5px-1bf43781f7.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});


const db = admin.firestore();

module.exports = { admin, db };


