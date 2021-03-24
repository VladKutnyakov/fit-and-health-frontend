const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./utils/dbConnect')
// const cors = require('cors')
// const morgan = require('morgan')
// const multer  = require('multer')

// Create express instance
const app = express()

// Подключение к базе MySQL
// Параметр {force: true} перезапишет данные таблицы, если такая таблица цже есть
sequelize.sync()
  .then(() => console.log('MySQL has been connected :)'))

// подключение bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Использовать пакет CORS в проекте
// app.use(cors())

// Для получения доступа к папке напрямую
// localhost:3000/uploads/названиеКартинки.png
app.use('/uploads', express.static('uploads'))

// Require API routes
const login = require('./routes/auth/loginUser')
const register = require('./routes/auth/registerUser')

// Import API Routes
app.use(login)
app.use(register)

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
