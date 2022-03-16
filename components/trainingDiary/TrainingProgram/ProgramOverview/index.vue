<template>
  <div>
    <div class="program-overview">
      <preview-image />
      <main-info />
      <!-- <actions /> -->
    </div>

    <program-stats />
  </div>
</template>

<script>
import PreviewImage from '@/components/trainingDiary/TrainingProgram/ProgramOverview/PreviewImage'
import MainInfo from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/index'
// import Actions from '@/components/trainingDiary/TrainingProgram/ProgramOverview/Actions'
import ProgramStats from '@/components/trainingDiary/TrainingProgram/ProgramOverview/ProgramStats'

export default {
  components: {
    PreviewImage,
    MainInfo,
    // Actions,
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
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
  overflow: hidden;
}

body.dark {
  .program-overview {
    background: $cardBackgroundDarkBG;
  }
}

</style>
