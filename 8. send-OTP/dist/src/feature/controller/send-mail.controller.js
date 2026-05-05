import nodemailer from "nodemailer";
import crypto from "crypto";
import { getOTPTemplate } from "../service/OTP-template.js";
export const sendOTPcontroller = async (req, res) => {
    try {
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
        const OTP = crypto.randomInt(100000, 1000000);
        const info = await transporter.sendMail({
            from: `HR Maktech Team: ${process.env.SMTP_USER} `,
            to: "contact.mahedihasan@gmail.com",
            subject: "verify account",
            text: "Hello world?",
            html: getOTPTemplate(OTP),
        });
        // create OTP field in DB
        return res.status(200).json({ message: "successfully send OTP" });
    }
    catch (error) {
        console.error(error);
    }
};
//# sourceMappingURL=send-mail.controller.js.map