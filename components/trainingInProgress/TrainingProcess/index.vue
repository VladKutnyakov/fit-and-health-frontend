<template>
  <div class="training-process">
    <training-video />
    <app-info
      v-if="trainingDay.comment"
      class="ml-10 mr-10"
      info
      :text="trainingDay.comment"
    />
    <laps-overview />
    <exercises :exercisesList="trainingDay.trainingProgramDayExercises" />
    <main-stats />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppInfo from '@/components/basic/AppInfo'
import MainStats from '@/components/trainingInProgress/TrainingProcess/MainStats'
import TrainingVideo from '@/components/trainingInProgress/TrainingProcess/TrainingVideo'
import LapsOverview from '@/components/trainingInProgress/TrainingProcess/LapsOverview'
import Exercises from '@/components/trainingInProgress/TrainingProcess/Exercises/index'

export default {
  components: {
    AppInfo,
    MainStats,
    TrainingVideo,
    LapsOverview,
    Exercises
  },
  computed: {
    ...mapState({
      trainingDay: state => state.trainingProcess.trainingDay
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-process {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
}

body.dark {
  .training-process {
    background: $cardBackgroundDarkBG;
  }
}

</style>
