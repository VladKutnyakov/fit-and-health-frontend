<template>
  <div class="description">
    <exercise-title />
    <exercise-technique />
    <div class="info-and-focus">
      <exercise-info />
      <exercise-focus />
    </div>
    <user-best-result />
  </div>
</template>

<script>
import ExerciseTitle from '@/components/exerciseGuide/ExerciseOverview/Description/ExerciseTitle'
import ExerciseTechnique from '@/components/exerciseGuide/ExerciseOverview/Description/ExerciseTechnique'
import ExerciseInfo from '@/components/exerciseGuide/ExerciseOverview/Description/ExerciseInfo'
import ExerciseFocus from '@/components/exerciseGuide/ExerciseOverview/Description/ExerciseFocus'
import UserBestResult from '@/components/exerciseGuide/ExerciseOverview/ActionsAndExample/UserBestResult'

export default {
  components: {
    ExerciseTitle,
    ExerciseTechnique,
    ExerciseInfo,
    ExerciseFocus,
    UserBestResult
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.description {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .info-and-focus {
    display: flex;
    margin: 0 10px;
    padding: 10px 0;
    border-top: 1px solid $blockBorder;
  }
}

</style>
