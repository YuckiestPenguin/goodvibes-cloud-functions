import {Response, Request} from 'express';
import * as admin from 'firebase-admin';
import {Memory} from './models/memory.model';


const addMemory = async (req: Request, res: Response): Promise<void> => {
  try {
    const memory: Memory = req.body;

    await admin.firestore().collection('memories').add(memory);

    res.status(201).json(memory);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllMemories = async (req: Request, res: Response): Promise<void> => {
  try {
    const allMemories: Memory[] = [];

    const querySnapshot = await admin.firestore().collection('memories').get();
    querySnapshot.forEach((doc: any) => {
      const id = doc.id;
      const data = doc.data();
      allMemories.push({id, ...data});
    });

    res.status(200).json(allMemories);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {addMemory, getAllMemories};
