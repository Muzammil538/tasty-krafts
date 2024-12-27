// src/pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, mobile, items, totalAmount } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service here
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.STORE_EMAIL,
      subject: 'New Order Received',
      html: `
        <h1>New Order Details</h1>
        <p><strong>Customer Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <h2>Order Items:</h2>
        <ul>
          ${items.map(item => `
            <li>${item.foodItem.name} x ${item.quantity} - $${item.foodItem.price * item.quantity}</li>
          `).join('')}
        </ul>
        <p><strong>Total Amount:</strong> $${totalAmount}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Order email sent successfully' });
  } catch (error) {
    console.error('Error sending order email:', error);
    res.status(500).json({ message: 'Error sending order email' });
  }
}