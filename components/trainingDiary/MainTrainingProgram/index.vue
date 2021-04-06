<template>
  <div class="main-training-program">
    <app-block-title>Основная тренировочная программа</app-block-title>
    <div class="main-training-program__content">
      <!-- <image-and-social /> -->
      <!-- <description /> -->

      <program-overview />

    </div>
    <!-- <action-btns /> -->
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import ProgramOverview from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/index'
// import ImageAndSocial from "@/components/trainingDiary/MainTrainingProgram/TrainingOverview/ImageAndSocial"
// import Description from '@/components/trainingDiary/MainTrainingProgram/TrainingOverview/Description/index'
// import ActionBtns from "@/components/trainingDiary/MainTrainingProgram/TrainingOverview/ActionBtns"

export default {
  components: {
    AppBlockTitle,
    ProgramOverview
    // ImageAndSocial,
    // Description,
    // ActionBtns
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-training-program {
  // border: 1px solid red;
  .main-training-program__content {
    // border: 1px solid red;
    display: flex;
    // padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}
</style>
