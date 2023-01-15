const dotenv = require('dotenv')
const express = require('express')
const connectDb = require('./config/dbConnection')
const userRoutes = require('./userRoutes')

dotenv.config()

const app = express()
connectDb()

app.use(express.json())

app.get('/',(req,res) => {
  res.send('CRUD ASSIGNMENT')
})

app.use('/user',userRoutes)

app.listen(5000,() => {
  console.log('server listening on port: 5000');
})
















