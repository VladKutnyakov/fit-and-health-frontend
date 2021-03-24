// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const keys = require('../keys')
// const Users = require('../models/Users')
// const errorHandler = require('../utils/errorHandler')

const { Router } = require('express')

const router = Router()

router.use('/login', async function (req, res) {
  res.end('login')

  // const candidate = await Users.findOne({
  //   where: {
  //     email: req.body.email
  //   }
  // })

  // if (candidate) {
  //   // Проверяем пароль, пользователь существует
  //   const passwordResult = bcrypt.compareSync(req.body.password, candidate.dataValues.password)

  //   if (passwordResult) {
  //     // Генерация токена
  //     const token = jwt.sign({
  //       email: candidate.email,
  //       userId: candidate.id
  //     }, keys.jwt, {expiresIn: 3600 * 24 * 365})
  //     // console.log(token)

  //     res.status(200).json(token)
  //   } else {
  //     // Пароли не совпали
  //     res.status(401).json({
  //       message: 'пароль введен не верно. повторите попытку'
  //     })
  //   }
  // } else {
  //   // Пользователя нет, ошибка
  //   res.status(404).json({
  //     message: 'пользователь с таким email не найден'
  //   })
  // }
})

module.exports = router
