// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests are allowed' });
    }

    const { name, organisation, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });

    const mailOptions = {
        from: email,
        to: ['kkprint.st@gmail.com', 'tesmulla@gmail.com','sales@kktradinget.com'], // Recipient email addresses
        subject: 'Proforma Request',
        text: `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error to the console
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
};
