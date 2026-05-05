import type { Request, Response } from "express";
import crypto from "crypto";

import { prisma } from "../../lib/prisma.js";
import { sendOTPSection } from "../service/send-mail.js";
import { HashOTP } from "../service/hash-OTP.js";

export const sendOTPcontroller = async (req: Request, res: Response) => {
  try {
    const OTP: number = crypto.randomInt(100000, 1000000);

    // send OTP
    await sendOTPSection(OTP)

    // find user
    const user = await prisma.user.findFirst({where: {id: '493f9726-2a90-42d2-9aea-25bfa5349753'}})
    if(!user) throw Error('User does not exist !!!')

    // hash OTP
    const hash = await HashOTP(OTP)

    // create OTP field in DB
    const expired = new Date(Date.now() + 60 * 1000)
    const sendOTP = await prisma.userOTP.create({data: {
      email: user.email,
      expired: expired,
      userId: user.id,
      otp: hash
    }})

    return res.status(200).json({ message: "successfully send OTP", sendOTP });
  } 
  catch (error) {
    console.error(error);
  }
};
