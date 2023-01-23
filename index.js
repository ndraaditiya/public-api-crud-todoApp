import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRoute from './routes/todos.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use('/todos', todoRoute)

app.get('/', (req, res) => {
  res.send('APP IS RUNNING')
})

const PORT = 3000

mongoose.set("strictQuery", false)
mongoose.connect(process.env.CONN_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running: ${PORT}`)))
  .catch((error) => console.log(error))


