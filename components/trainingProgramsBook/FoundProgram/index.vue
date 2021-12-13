<template>
  <div class="found-program">
    <preview-image />
    <main-info :program="item" />
    <training-accent />
    <actions />
  </div>
</template>

<script>
import PreviewImage from '@/components/trainingProgramsBook/FoundProgram/PreviewImage'
import MainInfo from '@/components/trainingProgramsBook/FoundProgram/MainInfo'
import TrainingAccent from '@/components/trainingProgramsBook/FoundProgram/TrainingAccent'
import Actions from '@/components/trainingProgramsBook/FoundProgram/Actions'

export default {
  props: {
    item: Object
  },
  components: {
    PreviewImage,
    MainInfo,
    TrainingAccent,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.found-program {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  margin-bottom: 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
}

</style>
