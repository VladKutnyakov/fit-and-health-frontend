<template>
  <div class="actions-example-result">
    <exercise-actions />
    <visual-example />
    <user-best-result />
  </div>
</template>

<script>
import ExerciseActions from '@/components/exerciseGuide/ExerciseOverview/ActionsExampleResult/ExerciseActions'
import VisualExample from '@/components/exerciseGuide/ExerciseOverview/ActionsExampleResult/VisualExample'
import UserBestResult from '@/components/exerciseGuide/ExerciseOverview/ActionsExampleResult/UserBestResult'

export default {
  components: {
    ExerciseActions,
    VisualExample,
    UserBestResult
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions-example-result {
  border-left: 1px solid $blockBorder;
}

</style>
