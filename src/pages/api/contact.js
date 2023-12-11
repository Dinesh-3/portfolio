import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  const body = req.body;

  const data = {
    ...body,
    timestamp: new Date().getTime(),
    createdAt: new Date().toLocaleString()
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('contacts').insertOne(data);
    res.status(200).json({ status: true, message: 'Success' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, message: error.message });
  }
}
