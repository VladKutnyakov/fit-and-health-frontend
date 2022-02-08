<template>
  <div class="tarining-days">
    <app-block-title>Тренировочные дни</app-block-title>
    <div class="tarining-days__content">
      <training-days-list />
      <training-day-settings />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import TrainingDaysList from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaysList'
import TrainingDaySettings from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/index'

export default {
  components: {
    AppBlockTitle,
    TrainingDaysList,
    TrainingDaySettings
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

// .tarining-days {
//   border: 1px solid red;
//   .tarining-days__content {}
// }

</style>