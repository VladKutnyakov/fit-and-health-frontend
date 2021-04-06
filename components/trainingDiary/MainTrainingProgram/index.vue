<template>
  <div class="main-training-program">
    <app-block-title>Основная тренировочная программа</app-block-title>
    <program-overview />

    <app-block-title>Статистика по тренировкам</app-block-title>
    <program-stats />
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import ProgramOverview from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/index'
import ProgramStats from '@/components/trainingDiary/MainTrainingProgram/ProgramStats/index'

export default {
  components: {
    AppBlockTitle,
    ProgramOverview,
    ProgramStats
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

// .main-training-program {}

</style>
