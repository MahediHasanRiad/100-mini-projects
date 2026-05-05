import express from 'express'
import dotenv from 'dotenv'
import { sendOTPcontroller } from './feature/controller/send-mail.controller.js'
import { registerController } from './feature/controller/register.controller.js'
import { verifyOTPcontroller } from './feature/controller/verify-OTP.controller.js'
dotenv.config({path: './.env'})


const app = express()

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// routers
app.post('/register', registerController)
app.get('/send-OTP', sendOTPcontroller)
app.post('/verify-OTP', verifyOTPcontroller)



app.listen(3000, () => {
  console.log('server is on...')
})