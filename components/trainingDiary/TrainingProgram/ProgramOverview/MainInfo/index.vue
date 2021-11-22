<template>
  <div class="main-info">
      <training-program-title />
      <additional-info />
      <description />
      <added-marks />
      <training-skill />
    </div>
</template>

<script>
import TrainingProgramTitle from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/TrainingProgramTitle'
import AdditionalInfo from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/AdditionalInfo'
import Description from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/Description'
import AddedMarks from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/AddedMarks'
import TrainingSkill from '@/components/trainingDiary/TrainingProgram/ProgramOverview/MainInfo/TrainingSkill'

export default {
  components: {
    TrainingProgramTitle,
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
}

</style>
