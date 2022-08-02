export default {

  getDayTargetKkal (state) {
    // targetKkalMale = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity
    // targetKkalFemale = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity

    // if (state.userGender === 'male') {
    //   let targetKkal = (88.36 + (13.4 * state.targetWeight) + (4.8 * state.userHeight) - (5.7 * state.userAge)) * state.userActivity
    //   return Math.round(targetKkal)
    // } else {
    //   lettargetKkal = (447.6 + (9.2 * state.targetWeight) + (3.1 * state.userHeight) - (4.3 * state.userAge)) * state.userActivity
    //   return Math.round(targetKkal)
    // }
    const targetWeight = state.mealPlanerInfo.fields.targetWeight

    let currentKkal = (state.mealPlanerInfo.fields.targetProtein * targetWeight * 4.1) + (state.mealPlanerInfo.fields.targetFats * targetWeight * 9.3) + (state.mealPlanerInfo.fields.targetCarb * targetWeight * 4.1)

    return Math.round(currentKkal)
  },
  getCurrentProtein (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.fields.mealParts.length; i++) {
      state.mealPlanerInfo.fields.mealParts[i].mealPartProducts.forEach(element => {
        products.push(element)
      })
    }

    let currentProteinSumm = 0
    products.forEach(element => {
      currentProteinSumm += parseFloat(element.protein * element.weightInMealPart / 100)
    })

    return Math.round(currentProteinSumm * 100) / 100
  },
  getCurrentFats (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.fields.mealParts.length; i++) {
      state.mealPlanerInfo.fields.mealParts[i].mealPartProducts.forEach(element => {
        products.push(element)
      })
    }

    let currentFatsSumm = 0
    products.forEach(element => {
      currentFatsSumm += parseFloat(element.fats * element.weightInMealPart / 100)
    })

    return Math.round(currentFatsSumm * 100) / 100
  },
  getCurrentCarb (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.fields.mealParts.length; i++) {
      state.mealPlanerInfo.fields.mealParts[i].mealPartProducts.forEach(element => {
        products.push(element)
      })
    }

    let currentCarbSumm = 0
    products.forEach(element => {
      currentCarbSumm += parseFloat(element.carb * element.weightInMealPart / 100)
    })

    return Math.round(currentCarbSumm * 100) / 100
  },
  getCurrentKkal (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.fields.mealParts.length; i++) {
      state.mealPlanerInfo.fields.mealParts[i].mealPartProducts.forEach(element => {
        products.push(element)
      })
    }

    let currentKkalSumm = 0
    products.forEach(element => {
      currentKkalSumm += parseFloat(element.kkal * element.weightInMealPart / 100)
    })

    return Math.round(currentKkalSumm * 100) / 100
  },

  // Рассчет времени, необходимого для достижения результата (набор массы или похудение)
  timeToResult () {
    currentWeight = [77, 78, 76, 75, 74]
    // Минимальное и максимальное изменение веса за период в массиве currentWeight
    const weightChanges = []
    for (let i = 0; i < currentWeight.length - 1; i++) {
      weightChanges.push(Math.round((currentWeight[i] - currentWeight[i + 1]) * 100) / 100)
    }
    // console.log(weightChanges)
    const maxWeightChange = Math.max.apply(null, weightChanges)
    const minWeightChange = Math.min.apply(null, weightChanges)

    // console.log(maxWeightChange, minWeightChange)

    // Среднее изменение веса за период в массиве currentWeight
    const middleWeightChange = minWeightChange + ((maxWeightChange - minWeightChange) / 2)

    const resultAfterDays = (currentWeight[currentWeight.length - 1] - targetWeight) / middleWeightChange

    return Math.round(resultAfterDays)
  },

}
