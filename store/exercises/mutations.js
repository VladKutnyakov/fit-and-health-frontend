import { setForm, setFormFieldValue, setFormFieldError, clearForm } from '@/utils/formManager'

export default {

  setPageInfo (state, payload) {
    state.pageInfo = payload
  },
  setSearchFiltersParam (state, ctx) {
    state.searchFilters[ctx.param] = ctx.newValue
  },
  setExercisesList (state, payload) {
    payload.forEach(element => {
      if (element.pinned) {
        state.pinnedExercises.push(element)
      } else {
        state.notPinnedExercises.push(element)
      }
    })
  },
  cleanExercisesList (state) {
    state.pinnedExercises = []
    state.notPinnedExercises = []
  },
  setExerciseMusclesList (state, payload) {
    state.exerciseMusclesList = payload
  },
  setExerciseTypesList (state, payload) {
    state.exerciseTypesList = payload
  },
  setExerciseSortsList (state, payload) {
    state.exerciseSortsList = payload
  },
  setExerciseExertionsList (state, payload) {
    state.exerciseExertionsList = payload
  },
  setExerciseEquipmentsList (state, payload) {
    state.exerciseEquipmentsList = payload
  },
  setSkillsList (state, payload) {
    const list = []
    for (let i = 0; i < payload.length; i++) {
      list.push({id: payload[i].id, title: payload[i].complexityTitle})
    }
    state.skillsList = list
  },
  setTrainingPlaces (state, payload) {
    state.trainingPlacesList = payload
  },

  setExerciseForm (state, payload) {
    setForm(state.exerciseForm, payload)
  },
  clearExerciseForm (state) {
    clearForm(state.exerciseForm)
  },
  setExerciseFormFieldValue (state, ctx) {
    setFormFieldValue(state.exerciseForm, ctx)
    setFormFieldError(state.exerciseForm, {field: ctx.field, errorMessage: null})
  },
  setExerciseFormFieldError (state, ctx) {
    setFormFieldError(state.exerciseForm, ctx)
  },

  setExerciseToRemove (state, payload) {
    state.exerciseToRemove = payload
  },

  setModalCondition (state, condition) {
    state.modalCondition = condition
  },
  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },
  setWaiteExerciseListUpdate (state, condition) {
    state.waiteExerciseListUpdate = condition
  },
  setWaiteExerciseInfoLoading (state, condition) {
    state.waiteExerciseInfoLoading = condition
  },

}
