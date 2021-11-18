<template>
  <div class="exercise-overview">
    <app-block-title>Описание упражения</app-block-title>
    <div class="exercise-overview__content">
      <exercise-title />
      <visual-example />
      <exercise-info />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import VisualExample from '@/components/exerciseGuide/ExerciseOverview/VisualExample'
import ExerciseInfo from '@/components/exerciseGuide/ExerciseOverview/ExerciseInfo'
import ExerciseTitle from '@/components/exerciseGuide/ExerciseOverview/ExerciseTitle'

export default {
  components: {
    AppBlockTitle,
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
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>