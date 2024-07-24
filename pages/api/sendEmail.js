import nodemailer from 'nodemailer';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {
    const form = new formidable.IncomingForm({
        uploadDir: path.join(process.cwd(), '/uploads'),
        keepExtensions: true
    });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ message: "Failed to parse form data" });
        }

        const { name, organisation, email, phoneNumber, message } = fields;
        const attachment = files.attachment ? files.attachment.path : null;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'mulemes81@gmail.com, sales@kktradinget.com',
            subject: 'Proforma Request',
            text: `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
            attachments: attachment ? [{ path: attachment }] : []
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Failed to send email", error });
        }
    });
}
