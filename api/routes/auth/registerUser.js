const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
const Users = require('../../models/Users')

const { Router } = require('express')

const router = Router()

router.post('/register', async function (req, res) {
  const candidate = await Users.findOne({
    where: {
      email: req.body.email
    }
  })

  if (candidate) {
    // если пользователь существеует то возвращаем ошибку
    res.status(409).json({
      message: 'Введенный E-mail уже занят. Используйте другой E-mail или выполните авторизацию.'
    })
  } else {
    // создать пользователя в БД
    try {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const newUser = Users.create({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      })

      // Когда пользователь создан генерируем token
      const token = jwt.sign({
        email: newUser.email,
        userId: newUser.id
      }, keys.jwt, {expiresIn: 3600 * 24 * 365})
      // console.log(token);

      res.status(200).json(token)
    } catch (error) {
      res.status(404).json({
        message: 'невозможно зарегистрировать пользователя'
      })
    }
  }
})

module.exports = router
