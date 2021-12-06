import { formGenerator } from '@/utils/formGenerator'

export const state = () => ({
  trainingProgram: formGenerator({
    id: null,
    title: null,
    description: null,
    skill: null,
    image: null,
    marks: [],
    trainingProgramDays: [],
    user: null
  })
})

export const getters = {}

export const mutations = {
  setTrainingProgramFormFieldValue (state, ctx) {
    state.trainingProgram.fields[ctx.field] = ctx.newValue
    state.trainingProgram.errors[ctx.field] = {
      enabled: false,
      errorMessage: null
    }
  },
  setTrainingProgramMark (state, text) {
    const mark = {
      id: null,
      title: text
    }
    state.trainingProgram.fields.marks.push(mark)
  },
  removeTrainingProgramMark (state, markIndex) {
    state.trainingProgram.fields.marks.splice(markIndex, 1)
  },
}

export const actions = {

  // async fetchTrainingDiaryInfo ({ commit }, query ) {
  //   try {
  //     const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-diary?date=${query.date ? query.date : ''}`)

  //     commit('setTrainingDiaryInfo', response.data)
  //   } catch (err) {
  //     console.log(err)

  //     const notice = {
  //       id: Date.now(),
  //       type: 'alert',
  //       message: 'Ошибка при загрузке данных для дневника тренировок. Обновите страницу или зайдите позже.',
  //       timeToShow: 5000,
  //       active: true
  //     }
  //     this.commit('notifications/addNewNotice', notice)
  //   }
  // },

}
