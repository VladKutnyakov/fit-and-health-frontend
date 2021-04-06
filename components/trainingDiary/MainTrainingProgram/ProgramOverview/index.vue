<template>
  <div class="program-overview">
    <preview-image />
    <main-info />
    <actions />
  </div>
</template>

<script>
import PreviewImage from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/PreviewImage'
import MainInfo from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/MainInfo/index'
import Actions from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/Actions'

export default {
  components: {
    PreviewImage,
    MainInfo,
    Actions
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
