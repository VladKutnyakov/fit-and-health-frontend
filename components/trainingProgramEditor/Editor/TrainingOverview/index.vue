<template>
  <div class="training-overview">
    <div class="training-overview__content">
      <preview-image />

      <div class="overview">
        <program-title />
        <training-description />
        <training-skill />
      </div>

      <added-marks
        :marks="trainingProgram.fields.marks"
        @addMark="setTrainingProgramMark($event)"
        @removeMark="removeTrainingProgramMark($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PreviewImage from '@/components/trainingProgramEditor/Editor/TrainingOverview/PreviewImage'
import ProgramTitle from '@/components/trainingProgramEditor/Editor/TrainingOverview/ProgramTitle'
import TrainingSkill from '@/components/trainingProgramEditor/Editor/TrainingOverview/TrainingSkill'
import AddedMarks from "@/components/trainingProgramEditor/Editor/TrainingOverview/AddedMarks"
import TrainingDescription from '@/components/trainingProgramEditor/Editor/TrainingOverview/TrainingDescription'

export default {
  components: {
    PreviewImage,
    ProgramTitle,
    TrainingDescription,
    TrainingSkill,
    AddedMarks
  },computed: {
    ...mapState({
      trainingProgram: state => state.trainingProgramEditor.trainingProgram
    })
  },
  methods: {
    ...mapMutations({
      setTrainingProgramMark: 'trainingProgramEditor/setTrainingProgramMark',
      removeTrainingProgramMark: 'trainingProgramEditor/removeTrainingProgramMark'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-overview {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $dividerBorder;
  .training-overview__content {
    display: flex;
    .overview {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
