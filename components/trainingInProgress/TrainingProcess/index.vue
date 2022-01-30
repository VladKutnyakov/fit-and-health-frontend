<template>
  <div class="training-process">
    <app-block-title>Процесс тренировки</app-block-title>
    <div class="training-process__content">
      <main-stats />
      <app-info
        v-if="trainingDay.comment"
        class="mt-10 ml-10 mr-10"
        info
        :text="trainingDay.comment"
      />
      <div class="video-and-timer">
        <training-video />
        <laps-overview />
      </div>
      <exercises :exercisesList="trainingDay.trainingProgramDayExercises" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppInfo from '@/components/basic/AppInfo'
import MainStats from '@/components/trainingInProgress/TrainingProcess/MainStats'
import TrainingVideo from '@/components/trainingInProgress/TrainingProcess/TrainingVideo'
import LapsOverview from '@/components/trainingInProgress/TrainingProcess/LapsOverview'
import Exercises from '@/components/trainingInProgress/TrainingProcess/Exercises/index'

export default {
  components: {
    AppBlockTitle,
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
  .training-process__content {
    display: flex;
    flex-direction: column;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .video-and-timer {
      display: flex;
    }
  }
}

</style>
