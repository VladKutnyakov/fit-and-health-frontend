const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const keys = require('../../keys/index')
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
      message: 'Такой email уже занят. Введите другой.'
    })
  } else {
    // создать пользователя в БД
    try {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      Users.create({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      })
        .then(user => res.status(201).json(user))
    } catch (error) {
      res.status(404).json({
        message: 'невозможно зарегистрировать пользователя'
      })
    }
  }
})

module.exports = router
