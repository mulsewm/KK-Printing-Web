// pages/api/sendEmail.js


require('dotenv').config()

import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests are allowed' });
    }

    const form = formidable({ multiples: true });
    form.uploadDir = path.join(process.cwd(), 'uploads');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Form parse error:', err);
            return res.status(500).json({ message: 'Failed to process form', error: err.message });
        }

        const { name, organisation, email, phoneNumber, message } = fields;
        const attachment = files.attachment ? files.attachment.filepath : null;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your app-specific password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: ['kkprint.st@gmail.com', 'mulemes81@gmail.com', 'sales@kktradinget.com'], // Recipient email addresses
            subject: 'Proforma Request',
            text: `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
            attachments: attachment ? [{
                filename: path.basename(attachment),
                path: attachment,
            }] : [],
        };

        try {
            await transporter.sendMail(mailOptions);
            if (attachment) {
                fs.unlinkSync(attachment); // Clean up uploaded file
            }
            res.status(200).json({ message: 'Proforma request sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error); // Log the error to the console
            res.status(500).json({ message: 'Failed to send email', error: error.message });
        }
    });
};
