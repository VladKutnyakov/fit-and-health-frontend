<template>
  <div class="training-program-info">
    <empty-training-program-info v-if="!trainingDiaryInfo" />
    <program-overview v-if="trainingDiaryInfo" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EmptyTrainingProgramInfo from '@/components/trainingDiary/TrainingProgram/EmptyTrainingProgramInfo'
import ProgramOverview from '@/components/trainingDiary/TrainingProgram/ProgramOverview/index'

export default {
  components: {
    EmptyTrainingProgramInfo,
    ProgramOverview
  },
  computed: {
    ...mapState({
      trainingDiaryInfo: state => state.trainingDiary.trainingDiaryInfo
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

</style>
