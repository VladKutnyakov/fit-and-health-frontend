<template>
  <div class="exercises">
    <ul class="exercises-list">
      <exercise
        v-for="(item, index) in trainingProgramDayExercises"
        :key="index"
        :exercise="item"
      />
    </ul>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import Exercise from '@/components/trainingProcess/TrainingProcess/Exercises/Exercise'

export default {
  components: {
    Exercise
  },
  computed: {
    ...mapState({
      trainingProgramDayExercises: state => state.trainingProcess.trainingDayForm.fields.trainingProgramDayExercises,
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .exercises-list {
    flex: 1 1 auto;
    margin: 10px;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    // height: 600px;
    min-height: calc(100vh - 160px);
    // overflow-y: scroll;
  }
  // .exercises-list::-webkit-scrollbar {
  //   width: 4px;
  // }
  // .exercises-list::-webkit-scrollbar-thumb {
  //   background: $primaryLight4;
  //   border-radius: 50px;
  // }
  // .exercises-list::-webkit-scrollbar-track {
  //   background: $black10;
  // }
}

.dark-theme {
  .exercises {
    .exercises-list {
      background: $black20;
      border: 1px solid $dividerBorderDarkBG;
      .exercises-list::-webkit-scrollbar-thumb {
        background: $primary;
      }
      .exercises-list::-webkit-scrollbar-track {
        background: $black;
      }
    }
  }
}

</style>
