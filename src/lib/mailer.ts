import nodemailer from "nodemailer";

export const sendEmail = async ({ email }: any) => {
  try {
    if (!process.env.SENDER_MAIL || !process.env.SENDER_MAIL_PASS) {
      throw new Error("Missing environment variables");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: `Thank You for Shopping at Cobra Case!`,
      html: `
        <h1 style="color: #333;">Thank You for Shopping at Cobra Case!</h1>
        <p>Dear Customer,</p>
        <p>Thank you for your recent purchase from <strong>Cobra Case</strong>. We are thrilled to have you as a customer and hope you enjoy your new case.</p>
        <p>Here are the details of your purchase:</p>
        
        <p>If you have any questions or need further assistance, please don't hesitate to reach out to our support team at <a href="mailto:support@cobracase.com">support@cobracase.com</a>.</p>
        <p>Thank you once again for choosing Cobra Case. We look forward to serving you again soon!</p>
        <p>Best Regards,</p>
        <p>The Cobra Case Team</p>
        <p style="font-size: 12px; color: #777;">If you did not make this purchase or believe you received this email in error, please contact us immediately.</p>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
