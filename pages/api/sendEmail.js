import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'uploads');
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing form', error: err });
    }

    try {
      const { name, organisation, email, phoneNumber, message } = fields;
      const file = files.file ? `/uploads/${files.file.newFilename}` : null;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await prisma.request.create({
        data: {
          name,
          organisation,
          email,
          phoneNumber,
          message,
          file,
          userId: user.id,
        },
      });

      return res.status(200).json({ message: 'Request sent successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send request', error: error.message });
    }
  });
}
