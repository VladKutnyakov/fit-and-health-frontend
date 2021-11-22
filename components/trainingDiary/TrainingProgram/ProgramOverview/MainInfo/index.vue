<template>
  <div class="main-info">
      <p class="title">Название тренировочной программы</p>
      <additional-info />
      <description />
      <added-marks />
      <training-skill />
    </div>
</template>

<script>
import AdditionalInfo from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/AdditionalInfo'
import Description from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/Description'
import AddedMarks from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/AddedMarks'
import TrainingSkill from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/TrainingSkill'

export default {
  components: {
    AdditionalInfo,
    Description,
    AddedMarks,
    TrainingSkill
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
  padding: 10px 10px 0 0;
  .title {
    padding-bottom: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
}

</style>
