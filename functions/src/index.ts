import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import {addMemory, getAllMemories} from './memoryController';
import {validateFirebaseIdToken} from './middleware/auth.middleware';


admin.initializeApp();
const app = express();
app.use(validateFirebaseIdToken);

app.post('/memories', addMemory);
app.get('/memories', getAllMemories);

exports.app = functions.https.onRequest(app);
