<template>
  <div class="training-process">
    <!-- <training-video /> -->

    <app-info
      v-if="trainingDay.fields.comment"
      class="mt-10 ml-10 mr-10"
      info
      :text="trainingDay.fields.comment"
    />

    <exercises :exercisesList="trainingDay.fields.trainingProgramDayExercises" />

    <laps-overview v-if="trainingDay.fields.trainingType && trainingDay.fields.trainingType.id === 2" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppInfo from '@/components/basic/AppInfo'
import TrainingVideo from '@/components/trainingProcess/TrainingProcess/TrainingVideo'
import LapsOverview from '@/components/trainingProcess/TrainingProcess/LapsOverview'
import Exercises from '@/components/trainingProcess/TrainingProcess/Exercises/index'

export default {
  components: {
    AppInfo,
    TrainingVideo,
    LapsOverview,
    Exercises,
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
