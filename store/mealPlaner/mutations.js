export default {

  setMealPlanerInfo (state, mealPlanerInfo) {
    state.mealPlanerInfo = mealPlanerInfo
  },
  setProducts (state, products) {
    state.products = products

    // Добавить свойство "добавлен для всех продуктов"
    state.products.forEach(element => {
      element.added = false
    })
  },
  setNutrientsSettingsParam (state, ctx) {
    state.mealPlanerInfo[ctx.field] = ctx.newValue
  },
  setUserParam (state, ctx) {
    state.mealPlanerInfo.user.params[0][ctx.field] = ctx.newValue
  },
  setMealPlanMark (state, text) {
    const mark = {
      id: null,
      title: text
    }
    state.mealPlanerInfo.marks.push(mark)
  },
  removeMealPlanMark (state, markIndex) {
    state.mealPlanerInfo.marks.splice(markIndex, 1)
  },
  setMealPlanTitle (state, newValue) {
    state.mealPlanerInfo.title = newValue
  },
  setMealPlanDescription (state, newValue) {
    state.mealPlanerInfo.description = newValue
  },
  setSelectedMealPart (state, index) {
    state.selectedMealPart = index
  },
  addNewMealPart (state) {
    const emptyMealPart = {
      id: null,
      title: 'Новый прием пищи',
      mealTime: '00:00',
      mealPartProducts: [],
      mealPartRecipes: []
    }
    state.mealPlanerInfo.mealParts.push(emptyMealPart)
    state.selectedMealPart = state.mealPlanerInfo.mealParts.length - 1
  },
  removeSelectedMealPart (state) {
    if (state.mealPlanerInfo.mealParts.length > 1) {
      state.mealPlanerInfo.mealParts.splice(state.selectedMealPart, 1)
      if (state.selectedMealPart !== 0) {
        state.selectedMealPart -= 1
      }
    }
  },
  setMealPartTime (state, newValue) {
    state.mealPlanerInfo.mealParts[state.selectedMealPart].mealTime = newValue
  },
  setMealPartTitle (state, newValue) {
    state.mealPlanerInfo.mealParts[state.selectedMealPart].title = newValue
  },
  setProductWeight (state, ctx) {
    const mealPartProducts = state.mealPlanerInfo.mealParts[state.selectedMealPart].mealPartProducts
    for (let i = 0; i < mealPartProducts.length; i++) {
      if (mealPartProducts[i].product.id === ctx.id) {
        mealPartProducts[i].weightInMealPart = ctx.newValue
      }
    }
  },
  addFoodToMealPart (state, food) {
    state.products.forEach(element => {
      if (element.id === food.id) {
        element.added = true
      }
    })
    state.mealPlanerInfo.mealParts[state.selectedMealPart].products.push(food)
  },
  removeFoodFromMealPart (state, productId) {
    // Удалить продукт из списка продуктов для выбранного приема пищи
    const products = state.mealPlanerInfo.mealParts[state.selectedMealPart].products
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        products.splice(i, 1)
      }
    }

    // Убрать статус добавлен в окне поиска и добавления продуктов
    state.products.forEach(element => {
      if (element.id === productId) {
        element.added = false
      }
    })
  },

  // Рассчет времени, необходимого для достижения результата (набор массы или похудение)
  // timeToResult () {
  //   // Минимальное и максимальное изменение веса за период в массиве currentWeight
  //   const weightChanges = []
  //   for (let i = 0; i < this.currentWeight.length - 1; i++) {
  //     weightChanges.push(Math.round((this.currentWeight[i] - this.currentWeight[i + 1]) * 100) / 100)
  //   }
  //   // console.log(weightChanges)
  //   const maxWeightChange = Math.max.apply(null, weightChanges)
  //   const minWeightChange = Math.min.apply(null, weightChanges)

  //   // console.log(maxWeightChange, minWeightChange)

  //   // Среднее изменение веса за период в массиве currentWeight
  //   const middleWeightChange = minWeightChange + ((maxWeightChange - minWeightChange) / 2)

  //   const resultAfterDays = (this.currentWeight[this.currentWeight.length - 1] - this.targetWeight) / middleWeightChange

  //   return Math.round(resultAfterDays)
  // }

  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
