<template>
  <div class="settings">
    <overview />
    <exercises />
    <div class="actions">
      <app-button @click="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: true})">Добавить упражнение</app-button>
      <app-button dangerBtn @click="removeTrainingProgramDay()">Удалить тренировочный день</app-button>
    </div>
    <!-- <stats /> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Overview from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Overview'
import Exercises from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Exercises/index'
// import Stats from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Stats'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    Overview,
    Exercises,
    // Stats,
    AppButton
  },
  methods: {
    ...mapMutations({
      removeTrainingProgramDay: 'trainingProgramEditor/removeTrainingProgramDay',
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    })
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.settings {
  flex: 1 1 auto;
  padding: 10px;
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
}

</style>