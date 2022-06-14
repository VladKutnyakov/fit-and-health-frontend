export default {

  setPageInfo (state, payload) {
    state.pageInfo = payload
  },

  setSearchFiltersParam (state, ctx) {
    state.searchFilters[ctx.param] = ctx.newValue
  },

  setTrainingProgramsList (state, payload) {
    payload.forEach(element => {
      if (element.pinned) {
        state.pinnedTrainingPrograms.push(element)
      } else {
        state.notPinnedTrainingPrograms.push(element)
      }
    })
  },
  cleanTrainingProgramsList (state) {
    state.pinnedTrainingPrograms = []
    state.notPinnedTrainingPrograms = []
  },

}
