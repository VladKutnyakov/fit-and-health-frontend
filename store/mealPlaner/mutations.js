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

  setSelectedMealPart (state, index) {
    state.selectedMealPart = index
  },

  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
