<template>
  <div class="training-process">
    <!-- <training-video /> -->

    <app-info
      v-if="trainingDayForm.fields.comment"
      class="mt-10 ml-10 mr-10"
      info
      :text="trainingDayForm.fields.comment"
    />

    <exercises />

    <laps-overview v-if="trainingDayForm.fields.trainingType && trainingDayForm.fields.trainingType.id === 2" />
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
      trainingDayForm: state => state.trainingProcess.trainingDayForm,
    })
  },
  beforeDestroy () {
    this.$store.commit('trainingProcess/clearTrainingDayForm')
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

.dark-theme {
  .training-process {
    background: $cardBackgroundDarkBG;
  }
}

</style>
