import bcrypt from 'bcrypt';
export const HashOTP = async (otp) => {
    const hash = await bcrypt.hash(otp, 10);
    return hash;
};
export const VerifyHashOTP = async (otp, hashOTP) => {
    return bcrypt.compare(otp, hashOTP);
};
//# sourceMappingURL=hash-OTP.js.map