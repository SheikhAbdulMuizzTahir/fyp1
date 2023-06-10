import nodemailer from "nodemailer";

export const sendMail = async (to, subject, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtpout.secureserver.net",
      secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      html: body,
    };
    transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const sendMailWithHtmlBody = async (to, subject, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtpout.secureserver.net",
      secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      html: body,
    };
    transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
