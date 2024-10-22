import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

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
  //   const mailOptions = {
  //     from: `Dinesh <dinesh3it@gmail.com>`,
  //    to:  'dinesh3it@gmail.com',
  //     subject: `Job Opening From Company - Portfolio`,
  //     html: `${JSON.stringify(data)}`
  // };
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'dinesh3it@gmail.com',
  //     pass: process.env.EMAIL_PASSWORD
  //   }
  //   });
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error)
  //         return console.log(error);
  //     console.log('Message sent: %s', info.messageId);
  // });

    res.status(200).json({ status: true, message: 'Success' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: false, message: error.message });
  }
}
