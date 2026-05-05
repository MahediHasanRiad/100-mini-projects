import express from 'express';
import dotenv from 'dotenv';
import { sendOTPcontroller } from './feature/controller/send-mail.controller.js';
dotenv.config({ path: './.env' });
const app = express();
app.get('/send-OTP', sendOTPcontroller);
app.post('/verify-OTP');
app.listen(3000, () => {
    console.log('server is on...');
});
//# sourceMappingURL=index.js.map