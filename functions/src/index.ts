import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import {addMemory, getAllMemories} from './memoryController';


admin.initializeApp();
const app = express();

app.post('/entries', addMemory);
app.get('/entries', getAllMemories);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// eslint-disable-next-line max-len
// export const helloWorld = functions.https.onRequest(async (request, response) => {
//   await db.collection('entries').doc().create({name: 'vico'});
//   functions.logger.info('Hello logs!', {structuredData: true});
//   response.send(JSON.stringify('Hello from Firebase!'));
// });

exports.app = functions.https.onRequest(app);
