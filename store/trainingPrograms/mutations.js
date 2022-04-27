export default {

  setPageInfo (state, payload) {
    state.pageInfo = payload
  },

  setSearchFiltersParam (state, ctx) {
    state.searchFilters[ctx.param] = ctx.newValue
  },

  setTrainingProgramsList (state, payload) {
    state.trainingProgramsList = payload
  },

}
