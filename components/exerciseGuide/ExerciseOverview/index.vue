<template>
  <div class="exercise-overview">
    <div class="exercise-overview__content">
      <exercise-title />
      <visual-example />
      <exercise-info />
    </div>
  </div>
</template>

<script>
import VisualExample from '@/components/exerciseGuide/ExerciseOverview/VisualExample'
import ExerciseInfo from '@/components/exerciseGuide/ExerciseOverview/ExerciseInfo'
import ExerciseTitle from '@/components/exerciseGuide/ExerciseOverview/ExerciseTitle'

export default {
  components: {
    VisualExample,
    ExerciseInfo,
    ExerciseTitle
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .exercise-overview__content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
  }
}

</style>