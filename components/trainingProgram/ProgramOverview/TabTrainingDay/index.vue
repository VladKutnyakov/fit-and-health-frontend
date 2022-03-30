<template>
  <div class="tab-training-day">
    <overview />
    <exercises />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Overview from '@/components/trainingProgram/ProgramOverview/TabTrainingDay/Overview'
import Exercises from '@/components/trainingProgram/ProgramOverview/TabTrainingDay/Exercises/index'
export default {
  components: {
    Overview,
    Exercises
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
