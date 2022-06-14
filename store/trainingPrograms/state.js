export default () => ({

  pageInfo: {
    programs: null,
    userPrograms: null,
    pinnedPrograms: null,
    favoritePrograms: null,
  },

  searchFilters: {
    searchString: null,
    trainingPlace: {
      id: 'ALL',
      title: 'Все'
    }, // ALL, HOME, GYM
    userType: {
      id: 'ALL',
      title: 'Все'
    }, // ALL, MY
    orderBy: {
      id: 'title',
      title: 'Названию'
    }, // title, cardio, power, endurance, flexibility, skill
    muscleGroup: [],
    muscleGroupList: [],
  },

  pinnedTrainingPrograms: [],
  notPinnedTrainingPrograms: [],

  waiteTrainingProgramsListUpdate: false,

})
