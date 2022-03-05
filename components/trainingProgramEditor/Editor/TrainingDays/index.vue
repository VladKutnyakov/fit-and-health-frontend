<template>
  <div class="tarining-days">
    <div class="tarining-days__content">
      <training-days-list />
      <training-day-settings />
    </div>
  </div>
</template>

<script>
import TrainingDaysList from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaysList'
import TrainingDaySettings from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/index'

export default {
  components: {
    TrainingDaysList,
    TrainingDaySettings
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.tarining-days {
  // border: 1px solid red;
  margin-top: 20px;
  // .tarining-days__content {}
}

</style>