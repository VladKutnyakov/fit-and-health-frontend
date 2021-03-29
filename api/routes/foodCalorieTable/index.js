const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Products = require('../../models/Products')
// import JwtGuard from '../../utils/Guards/JwtGuard'

const { Router } = require('express');

const router = Router()

router.get('/food-calorie-table', async function (req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.decode(token, keys.jwt)

    const AllProducts = await Products.findAll({
      where: {
        [Op.or]: [{userProduct: 0}, {id: decodedToken.id}]
      }
    })
    res.status(200).json(AllProducts)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Внутренняя ошибка сервера.'
    })
  }
})


router.post('/food-calorie-table/save-product', async function (req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.decode(token, keys.jwt)

    if (req.body.id && req.body.id === decodedToken.id) {
      const UpdatedProduct = await Products.update(
        {
          title: req.body.title,
          weight: req.body.weight,
          protein: req.body.protein,
          fats: req.body.fats,
          carb: req.body.carb,
          kkal: req.body.kkal,
          category: req.body.category,
          favorite: req.body.favorite,
          userProduct: req.body.userProduct,
        },
        {
          where: {
            [Op.and]: [{id: req.body.id}, {userId: decodedToken.id}]
          }
        }
      )
      res.status(200).json(UpdatedProduct[0])
    } else {
      const CreatedProduct = await Products.create({
        title: req.body.title,
        weight: req.body.weight,
        protein: req.body.protein,
        fats: req.body.fats,
        carb: req.body.carb,
        kkal: req.body.kkal,
        category: req.body.category,
        favorite: req.body.favorite,
        userProduct: req.body.userProduct,
        userId: decodedToken.userId
      })
      res.status(200).json(CreatedProduct)
    }
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Внутренняя ошибка сервера.'
    })
  }
})

router.post('/food-calorie-table/remove-product', async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.decode(token, keys.jwt)

      const RemoveProduct = await Products.destroy({
        where: {
          [Op.and]: [{id: req.body.product}, {userId: decodedToken.id}]
        }
      })

      res.status(200).json(RemoveProduct)
    } else {
      res.status(401).json({message: 'Необходима авторизация'})
    }
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Внутренняя ошибка сервера.'
    })
  }
})

router.post('/food-calorie-table/change-favorite-param', async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.decode(token, keys.jwt)

      const UpdatedProduct = await Products.update(
        req.body.newParam, // должно быть в виде { title: 'foooo', fats: 'baaaaaar'}
        {where: {id: req.body.productId}}
      )

      res.status(200).json(UpdatedProduct[0])
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
