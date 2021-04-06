<template>
  <div class="main-info">
      <p class="title">Название тренировочной программы</p>
      <additional-info />
      <description />
      <added-marks />
    </div>
</template>

<script>
import AdditionalInfo from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/MainInfo/AdditionalInfo'
import Description from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/MainInfo/Description'
import AddedMarks from '@/components/trainingDiary/MainTrainingProgram/ProgramOverview/MainInfo/AddedMarks'

export default {
  components: {
    AdditionalInfo,
    Description,
    AddedMarks
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-info {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px 10px;
  .title {
    padding-bottom: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid $blockBorder;
  }
}

</style>
