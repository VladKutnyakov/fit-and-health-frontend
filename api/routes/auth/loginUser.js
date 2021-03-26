const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
const Users = require('../../models/Users')

const { Router } = require('express')

const router = Router()

router.post('/login', async (req, res, next) => {
  const candidate = await Users.findOne({
    where: {
      email: req.body.email
    }
  })

  if (candidate) {
    // Проверяем пароль, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.dataValues.password)

    if (passwordResult) {
      // Генерация рефреш токена
      // refreshToken = jwt.sign({
      //   email: candidate.email,
      //   userId: candidate.id,
      //   // refresh: refreshToken
      // }, keys.jwt, { expiresIn: 3600 * 24 * 365 })

      // Сохранение рефреш токена в БД
      // await Users.create()

      // Генерация токена со сроком жизни 15 мин.
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate.id,
        // refresh: refreshToken
      }, keys.jwt, { expiresIn: 60 * 15 })
      // console.log(token)

      res.status(200).json(token)
    } else {
      // Пароли не совпали
      res.status(401).json({
        message: 'Неверный пароль. Попробуйте еще раз или воспользуйтесь формой для восстановления пароля.'
      })
    }
  } else {
    // Пользователя нет, ошибка
    res.status(404).json({
      message: 'Пользователь с таким E-mail не найден.'
    })
  }
})

module.exports = router
