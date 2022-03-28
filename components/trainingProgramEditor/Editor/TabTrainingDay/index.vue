<template>
  <div class="tab-training-day">
    <overview />
    <exercises />

    <actions />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Overview from '@/components/trainingProgramEditor/Editor/TabTrainingDay/Overview'
import Exercises from '@/components/trainingProgramEditor/Editor/TabTrainingDay/Exercises/index'
import Actions from '@/components/trainingProgramEditor/Editor/TabTrainingDay/Actions'

export default {
  components: {
    Overview,
    Exercises,
    Actions
  },
  methods: {
    ...mapMutations({
      removeTrainingProgramDay: 'trainingProgramEditor/removeTrainingProgramDay',
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.tab-training-day {
  flex: 1 1 auto;
}

</style>
