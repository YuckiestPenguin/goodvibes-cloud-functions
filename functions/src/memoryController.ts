import {Response} from 'express';
import * as admin from 'firebase-admin';

type MemoryType = {
  id: string,
  title: string,
  description: string,
}


type Request = {
  body: MemoryType,
  params: { entryId: string }
}


const addMemory = async (req: Request, res: Response): Promise<void> => {
  try {
    const memory = req.body;

    await admin.firestore().collection('memories').add(memory);

    res.status(201).send();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllMemories = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allMemories: MemoryType[] = [];

    const querySnapshot = await admin.firestore().collection('memories').get();
    querySnapshot.forEach((doc: any) => {
      const id = doc.id;
      const data = doc.data();
      allMemories.push({id, ...data});
    });

    return res.status(200).json(allMemories);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export {addMemory, getAllMemories};
