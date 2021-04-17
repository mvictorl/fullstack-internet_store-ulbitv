require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
// const models = require('./models/models')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlerMiddleware')
const router = require('./routes')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
// Error handler, last middleware!
app.use(errorHandler)

app.get('/', (request, response) => {
  response.status(200).json({message: 'Backend works!..'})
})

const startDbConnection = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Server started on port ${ PORT }`)
    })
  } catch (e) {
    console.error(e)
  }
}

startDbConnection()
