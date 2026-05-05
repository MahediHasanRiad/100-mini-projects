import bcrypt from 'bcrypt'

export const HashOTP = async (otp: number) => {
    const hash = bcrypt.hash(otp.toString(), 10)
    return hash
}

export const VerifyHashOTP = async (otp: string, hashOTP: string) => {
    return bcrypt.compare(otp, hashOTP)
}