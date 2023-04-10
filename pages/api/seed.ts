import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ok: boolean;
  msg: string;
  method?: string;
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

  /* await connectDB();

  await entryModel.insertMany(seedData.entries);

  await disconnectDB();

  res.status(200).json({ 
    ok: true,
    msg: 'Correcto',
    method: req.method
  }) */
}
