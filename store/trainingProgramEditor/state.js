import { generateForm } from '@/utils/formManager'

export default () => ({

  trainingProgram: generateForm({
    id: null,
    title: null,
    description: null,
    skill: null,
    image: null,
    marks: [],
    trainingProgramDays: [
      {
        id: null,
        title: 'День 1',
        comment: null,
        trainingType: null,
        trainingProgramDayExercises: [
          // {
          //   exercise: null, // ID дня тренировочной программы,
          //   trainingProgramDay: null, // ID упражнения
          //   approaches: "4-5", // Кол-во подходов
          //   repeats: "10-12", // Кол-во повторений
          //   additionalWeight: 12.2, // Дополнительный вес (отягощение)
          //   implementationTime: null, // Время выполнения упражнения
          //   restTime: null, // Время отдыха после выполнения упражнения
          // }
        ],
      },
    ],
    user: null
  }),

  selectedTrainingDay: 0,

  skillList: [],
  trainingTypesList: [],
  pinnedExercises: [],
  notPinnedExercises: [],

  modalCondition: 'create',

  selectExercisesModalActive: false,
  confirmStartTrainingProcessModalActive: false,

})
