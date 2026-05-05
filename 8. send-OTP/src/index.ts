import express from 'express'

const app = express()


app.get('/', (req, res) => {
  res.send('this is home')
})

app.listen(3000, () => {
  console.log('server is on...')
})