import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import {addMemory, getAllMemories} from './memoryController';
import {validateFirebaseIdToken} from './middleware/auth.middleware';


admin.initializeApp();
const app = express();

app.post('/memories', validateFirebaseIdToken, addMemory);
app.get('/memories', validateFirebaseIdToken, getAllMemories);

exports.app = functions.https.onRequest(app);
