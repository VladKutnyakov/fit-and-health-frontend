const express = require('express')
const sequelize = require('./utils/dbConnect')
const cors = require('cors')
const helmet = require("helmet");

// Create express instance
const app = express()

// Подключение к базе MySQL
// Параметр {force: true} перезапишет данные таблицы, если такая таблица цже есть
sequelize.sync()
  .then(() => console.log('MySQL has been connected :)'))

// const corsOptions = {
//   "origin": "*",
//   "methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD",
//   'Access-Control-Allow-Headers': 'Authorization',
//   "preflightContinue": false,
//   "optionsSuccessStatus": 200,
// }
// app.use(cors(corsOptions))
app.use(helmet())

// подключение bodyParser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Для получения доступа к папке напрямую
// localhost:3000/uploads/названиеКартинки.png
app.use('/uploads', express.static('uploads'))

// Require API routes
const login = require('./routes/auth/loginUser')
const register = require('./routes/auth/registerUser')
const foodCalorieTable = require('./routes/foodCalorieTable/index')

// Import API Routes
app.use(login)
app.use(register)
app.use(foodCalorieTable)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
