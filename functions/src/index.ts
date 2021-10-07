import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';


const app = express();
admin.initializeApp();

const db = admin.firestore();

app.get('/', async (req, res) => {
  res.send(JSON.stringify('testing'));
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// eslint-disable-next-line max-len
export const helloWorld = functions.https.onRequest(async (request, response) => {
  await db.collection('entries').doc().create({name: 'vico'});
  functions.logger.info('Hello logs!', {structuredData: true});
  response.send(JSON.stringify('Hello from Firebase!'));
});
