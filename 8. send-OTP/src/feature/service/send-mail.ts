import nodemailer from "nodemailer";
import { getOTPTemplate } from "../service/OTP-template.js";

export const sendOTPSection = async (OTP: number) => {
    // create transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // send mail
    const info = await transporter.sendMail({
      from: `HR Maktech Team: ${process.env.SMTP_USER} `,
      to: "contact.mahedihasan@gmail.com",
      subject: "verify account",
      text: "Hello world?",
      html: getOTPTemplate(OTP),
    });

    return info
}