import express from 'express'
import { notificationController } from './controller/notification.controller.js'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// router
app.get('/notification', notificationController)


app.listen(3000, () => {
    console.log('server is running...')
})