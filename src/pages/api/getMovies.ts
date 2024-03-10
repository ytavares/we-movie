import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Lógica para processar a requisição POST
    const { data } = req.body;
    // Faça algo com os dados recebidos

    res.status(200).json({ message: 'Requisição POST processada com sucesso' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
