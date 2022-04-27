export default () => ({

  mealPlanerInfo: {
    id: null,
    date: null,
    title: null,
    description: null,
    targetProtein: 1,
    targetFats: 0.5,
    targetCarb: 2,
    targetWeight: null,
    currentWeight: null,
    marks: [],
    like: null,
    dislike: null,
    share: null,
    mealParts: [
      {
        id: null,
        title: 'Затрак',
        mealTime: '07:00',
        recipes: [],
        products: []
      },
    ],
    user: {
      id: null
    }
  },
  selectedMealPart: 0,
  searchRecipesAndProductsModalActive: false,

})
