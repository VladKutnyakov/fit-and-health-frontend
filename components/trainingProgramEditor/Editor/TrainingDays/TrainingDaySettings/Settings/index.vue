<template>
  <div class="settings">
    <overview />
    <exercises />
    <app-button class="mt-20" dangerBtn @click="removeTrainingProgramDay()">Удалить тренировочный день</app-button>
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
    })
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.settings {
  flex: 1 1 auto;
  padding: 10px;
}

</style>