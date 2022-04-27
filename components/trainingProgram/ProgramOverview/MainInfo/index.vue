<template>
  <div class="main-info">
    <preview-image />
    <overview />
    <added-marks />
  </div>
</template>

<script>
import PreviewImage from '@/components/trainingProgram/ProgramOverview/MainInfo/PreviewImage'
import Overview from '@/components/trainingProgram/ProgramOverview/MainInfo/Overview'
import AddedMarks from '@/components/trainingProgram/ProgramOverview/MainInfo/AddedMarks'

export default {
  components: {
    PreviewImage,
    Overview,
    AddedMarks
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-info {
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $dividerBorder;
}

.dark-theme {
  .main-info {
    border-bottom: 1px solid $dividerBorderDarkBG;
  }
}

</style>
