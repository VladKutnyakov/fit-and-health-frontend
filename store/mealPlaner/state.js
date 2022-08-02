import { generateForm } from '@/utils/formManager'

export default () => ({

  mealPlanerInfo: generateForm({
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
    mealParts: [
      {
        id: null,
        title: 'Затрак',
        mealTime: '07:00',
        mealPartProducts: [],
        mealPartRecipes: [],
      },
    ],
    user: null,
  }),

  selectedMealPart: 0,

  selectProductModalActive: false,
  selectRecipeModalActive: false,

})
