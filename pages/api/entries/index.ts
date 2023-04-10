import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDB, disconnectDB } from '@/database';
import { entryModel } from '@/models';
import { IEntry } from '@/models/entryModel';

type Data = 
  | { msg: string }
  | IEntry[]
  | IEntry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'GET':
      return getEntries( res );

    case 'POST':
      return addEntry( req, res );
  
    default:
      return res.status(400).json({ msg: 'Not Found' })
  }
}

const getEntries = async ( res: NextApiResponse<Data> ) => {
  await connectDB();
  const entries = await entryModel.find().sort({ createdAt: 'ascending' });
  await disconnectDB();

  res.status(200).json( entries )
}

const addEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
  await connectDB();
  const { title, description, body } = req.body;
  //const newEntry = await entryModel.create({ title, description, body });
  await disconnectDB();

  /* res.status(201).json( {} ) */
}