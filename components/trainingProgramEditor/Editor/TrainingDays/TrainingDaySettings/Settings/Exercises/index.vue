<template>
  <div class="exercises">
    <p class="exercises__block-title">Упражнения</p>
    <ul class="exercises-list">
      <exercise
        v-for="(item, index) in trainingDayExercies"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Exercise from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Exercises/Exercise'

export default {
  components: {
    Exercise
  },
  computed: {
    ...mapState({
      selectedTrainingDay: state => state.trainingProgramEditor.selectedTrainingDay,
      trainingProgram: state => state.trainingProgramEditor.trainingProgram,
    }),
    trainingDayExercies () {
      return this.trainingProgram.fields.trainingProgramDays[this.selectedTrainingDay].trainingProgramDayExercises
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises {
  flex: 1 1 auto;
  margin-top: 10px;
  .exercises__block-title {
    padding: 10px 20px;
    font-weight: 500;
  }
  .exercises-list {
    // border: 1px solid red;
    padding: 10px;
    min-height: 600px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
  }
}

</style>
