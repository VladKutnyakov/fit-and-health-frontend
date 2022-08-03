import { setForm, clearForm, setFormFieldValue, setFormFieldError } from '@/utils/formManager'

export default {

  setMealPlanerInfo (state, payload) {
    setForm(state.mealPlanerInfo, payload)
  },
  clearMealPlanerInfo (state, payload) {
    clearForm(state.mealPlanerInfo)
  },

  setMealPlanerInfoFieldValue (state, ctx) {
    if (ctx.field === 'marks') {
      console.log('marks');
    } else if (ctx.field === 'mealParts') {
      state.mealPlanerInfo.fields.mealParts[ctx.index][ctx.subfield] = ctx.newValue
    } else {
      setFormFieldValue(state.mealPlanerInfo, ctx)
    }
  },
  setMealPlanerInfoFieldError (state, ctx) {
    setFormFieldError(state.mealPlanerInfo, ctx)
  },

  addNewMealPart (state) {
    state.mealPlanerInfo.fields.mealParts.push({
      id: null,
      title: 'Новый прием пищи',
      mealTime: '00:00',
      mealPartProducts: [],
      mealPartRecipes: [],
    })
  },
  removeMealPart (state, payload) {
    if (state.mealPlanerInfo.fields.mealParts.length > 1) {
      state.mealPlanerInfo.fields.mealParts.splice(payload, 1)
      if (state.mealPlanerInfo.fields.mealParts.length === 1) {
        state.selectedMealPart = payload - 1
      }
    }
  },

  setSelectedMealPart (state, index) {
    state.selectedMealPart = index
  },

  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
