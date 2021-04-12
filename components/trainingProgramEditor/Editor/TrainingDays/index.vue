<template>
  <div class="tarining-days">
    <app-block-title>Тренировочные дни</app-block-title>

    <div class="tarining-days__content">
      <days />

      <settings />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import Days from '@/components/trainingProgramEditor/Editor/TrainingDays/Days'
import Settings from '@/components/trainingProgramEditor/Editor/TrainingDays/Settings'

export default {
  components: {
    AppBlockTitle,
    Days,
    Settings
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