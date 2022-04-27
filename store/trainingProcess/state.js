import { generateForm } from '@/utils/formManager'

export default () => ({

  trainingProgramForm: generateForm({
    isStarted: false,
    trainingProgram: null,
    previewImage: null,
    trainingProgramAccent: null,
    trainingDay: null,
    trainingProgramDaysList: []
  }),

  trainingDayForm: generateForm({
    trainingDay: {
      id: null,
      title: null,
    },
    trainingType: null,
    comment: null,
    trainingProgramDayExercises: [
      // {
      //   id: 1,
      //   title: "Отжимания",
      //   isStarted: true,
      //   approaches: [
      //     {
      //       isActive: true,
      //       isStarted: true,
      //       title: 'Подход 1',
      //       repeats: {
      //         target: null,
      //         value: null,
      //       },
      //       additionalWeight: {
      //         target: null,
      //         value: null,
      //       },
      //       implementationTime: {
      //         target: null,
      //         value: null,
      //       },
      //       restTime: {
      //         target: null,
      //         value: null,
      //       },
      //     },
      //   ]
      // },
    ]
  }),

  trainingProgramsList: [],

  selectTrainingProgramModalActive: false,
  confirmCompleteTrainingProgramModalActive: false,

})
