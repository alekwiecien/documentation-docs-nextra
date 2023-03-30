import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string
  bio: string
}



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
res.status(200).json(
  { name: 'John Doe',
    bio: 'I am a software engineer, I love to code and I am a big fan of JavaScript'
  })
}
