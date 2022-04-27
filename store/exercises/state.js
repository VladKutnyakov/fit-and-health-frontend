import { generateForm } from '@/utils/formManager'

export default () => ({

  pageInfo: {
    exercises: null,
    userExercises: null,
    pinnedExercises: null,
    favoriteExercises: null,
  },

  searchFilters: {
    searchString: null,
    mediaType: {
      id: 'ALL',
      title: 'Все'
    }, // ALL, FOTO
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
    }, // title, muscleGroup, cardio, power, endurance, flexibility, skill
    muscleGroup: [],
    muscleGroupList: [],
  },

  pinnedExercises: [],
  notPinnedExercises: [],
  exerciseForm: generateForm({
    id: null,
    title: null,
    techniqueDescription: null,
    type: null,
    sort: null,
    exertion: null,
    equipment: null,
    skill: null,
    trainingPlace: null,
    muscleGroup: null,
    additionalMuscles: null,
    power: null,
    endurance: null,
    flexibility: null,
    cardio: null,
    favorite: false,
    pinned: false,
    user: null,
  }),
  exerciseMusclesList: [],
  exerciseTypesList: [],
  exerciseSortsList: [],
  exerciseExertionsList: [],
  exerciseEquipmentsList: [],
  skillsList: [],
  trainingPlacesList: [],

  exerciseToRemove: null,

  modalCondition: 'create',
  exerciseFormModalActive: false,
  confirmRemoveExerciseModalActive: false,

  waiteExerciseListUpdate: false,
  waiteExerciseInfoLoading: false,

})
