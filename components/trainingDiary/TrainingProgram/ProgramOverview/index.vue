<template>
  <div>
    <app-block-title>Тренировочная программа</app-block-title>
    <div class="program-overview">
      <preview-image />
      <main-info />
      <actions />
    </div>

    <app-block-title>Информация о тренировке</app-block-title>
    <program-stats />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import PreviewImage from '@/components/trainingDiary/TrainingProgram/ProgramOverview/PreviewImage'
import MainInfo from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/index'
import Actions from '@/components/trainingDiary/TrainingProgram/ProgramOverview/Actions'
import ProgramStats from '@/components/trainingDiary/TrainingProgram/ProgramOverview/ProgramStats'

export default {
  components: {
    AppBlockTitle,
    PreviewImage,
    MainInfo,
    Actions,
    ProgramStats
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.program-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  margin-bottom: 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
}

</style>
