import type { Request, Response } from "express"
import { VerifyHashOTP } from "../service/hash-OTP.js"
import { prisma } from "../../lib/prisma.js"

export const verifyOTPcontroller = async (req: Request, res: Response) => {
    try {
        const {otp} = req.body

        // find user OTP
        const userOTP = await prisma.userOTP.findFirst({where: {userId: '493f9726-2a90-42d2-9aea-25bfa5349753'}})
        if(!userOTP) throw Error('user not found !!!')

        // verify OTP
        const verify = await VerifyHashOTP(otp, userOTP?.otp)
        if(!verify) throw Error('Invalid OTP')

        return res.status(200).json({message: 'successfully verified !!!'})

    } catch (error) {
        console.error(error)
    }
}