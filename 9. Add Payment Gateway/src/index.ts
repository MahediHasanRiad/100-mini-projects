import express from 'express'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// router
app.get('/', (req, res) => {
    console.log('this is on...')
})


app.listen(3000, () => {
    console.log('server on... ')
})