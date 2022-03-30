<template>
  <div class="program-overview">
    <main-info />
    <training-days />
  </div>
</template>

<script>
import MainInfo from '@/components/trainingProgram/ProgramOverview/MainInfo'
import TrainingDays from '@/components/trainingProgram/ProgramOverview/TrainingDays'

export default {
  components: {
    MainInfo,
    TrainingDays
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.program-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

</style>
