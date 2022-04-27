export default {

  setTrainingProgram (state, payload) {
    for (const key in state.trainingProgram.fields) {
      state.trainingProgram.fields[key] = payload[key]
    }
  },
  setTrainingProgramFormFieldValue (state, ctx) {
    if (ctx.subfield && ctx.index >= 0) {
      state.trainingProgram.fields[ctx.field][ctx.index][ctx.subfield] = ctx.newValue
    } else {
      state.trainingProgram.fields[ctx.field] = ctx.newValue
    }
    state.trainingProgram.errors[ctx.field] = {
      enabled: false,
      errorMessage: null
    }
  },
  addExerciseForTrainingProgramDay (state, item) {
    state.trainingProgram.fields.trainingProgramDays[state.selectedTrainingDay].trainingProgramDayExercises.push(item)
  },
  removeExerciseForTrainingProgramDay (state, item) {
    const trainingProgramDayExercises = state.trainingProgram.fields.trainingProgramDays[state.selectedTrainingDay].trainingProgramDayExercises

    for (let i = 0; i < trainingProgramDayExercises.length; i++) {
      if (trainingProgramDayExercises[i].id === item.id) {
        trainingProgramDayExercises.splice(i, 1)
      }
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
  setSelectedTrainingDay (state, index) {
    state.selectedTrainingDay = index
  },
  addTrainingProgramDay (state) {
    const trainingProgramDay = {
      id: null,
      title: `День ${state.trainingProgram.fields.trainingProgramDays.length + 1}`,
      comment: null,
      trainingType: null,
      video: null,
      trainingProgramDayExercises: [],
    }
    state.trainingProgram.fields.trainingProgramDays.push(trainingProgramDay)
    state.selectedTrainingDay = state.trainingProgram.fields.trainingProgramDays.length - 1
  },
  removeTrainingProgramDay (state) {
    if (state.trainingProgram.fields.trainingProgramDays.length > 1) {
      state.trainingProgram.fields.trainingProgramDays.splice(state.selectedTrainingDay, 1)
      if (state.selectedTrainingDay !== 0) {
        state.selectedTrainingDay -= 1
      }
    }
  },
  setExercisesList (state, payload) {
    const pinnedExercises = []
    const notPinnedExercises = []

    for (let i = 0; i < payload.length; i++) {
      const item = {
        ...payload[i], // Вся информация по упражнению
        approaches: null, // Кол-во подходов
        repeats: null, // Кол-во повторений
        additionalWeight: null, // Дополнительный вес (отягощение)
        implementationTime: null, // Время выполнения упражнения
        restTime: null, // Время отдыха после выполнения упражнения
      }
      if (item.pinned) {
        pinnedExercises.push(JSON.parse(JSON.stringify(item)))
      } else {
        notPinnedExercises.push(JSON.parse(JSON.stringify(item)))
      }
    }

    state.pinnedExercises = pinnedExercises
    state.notPinnedExercises = notPinnedExercises
  },
  setSkillsList (state, payload) {
    const list = []

    payload.forEach(element => {
      list.push({
        id: element.id,
        title: element.complexityTitle
      })
    })

    state.skillList = list
  },
  setTrainingTypesList (state, payload) {
    state.trainingTypesList = payload
  },
  toggleModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
