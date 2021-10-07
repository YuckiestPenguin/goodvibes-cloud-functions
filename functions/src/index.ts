import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import {addMemory, getAllMemories} from './memoryController';


admin.initializeApp();
const app = express();

app.post('/entries', addMemory);
app.get('/entries', getAllMemories);

exports.app = functions.https.onRequest(app);
