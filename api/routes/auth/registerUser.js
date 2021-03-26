const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
// const { Op } = require("sequelize");
const Users = require('../../models/Users')

const { Router } = require('express')

const router = Router()

router.post('/register', async function (req, res) {
  // console.log(req.body)
  try {
    const candidate = await Users.findOne({
      where: {
        email: req.body.email
        // [Op.or]: [
        //   { email: req.body.email },
        //   { phone: req.body.phone }
        // ]
      }
    })

    console.log(candidate)

    if (!candidate) {
      // создать пользователя в БД
      try {
        // Создаем нового пользователя в БД
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const newUser = await Users.create({
          email: req.body.email,
          phone: req.body.phone,
          password: bcrypt.hashSync(password, salt),
          token: 'null',
          refreshToken: 'null'
        })

        console.log(newUser)
  
        // Генерируем рефреш токен для нового пользователя
        // const refreshToken = jwt.sign({
        //   id: newUser.id,
        //   email: newUser.email,
        // }, keys.jwtRefresh, {expiresIn: 60 * 15})
  
        // Генерируем token для нового пользователя
        // const token = jwt.sign({
        //   id: newUser.id,
        //   email: newUser.email,
        //   refreshToken: refreshToken
        // }, keys.jwt, {expiresIn: 60 * 15})
  
        // Добавить данные о token и refreshToken для нового пользователя
        // await User.update({ token: token, refreshToken: refreshToken }, {
        //   where: {
        //     id: newUser.id
        //   }
        // })
  
        res.status(200).json(newUser)
      } catch (error) {
        res.status(404).json({
          message: 'Внутренняя ошибка сервера. Попробуйте еще раз.'
        })
      }
    } else {
      // если пользователь существеует то возвращаем ошибку
      res.status(409).json({
        message: 'Введенный E-mail уже занят. Используйте другой E-mail или выполните авторизацию.'
      })
    }
  } catch (err) {
    res.status(400).json({
      message: 'Неверный запрос.'
    })
  }
})

module.exports = router
