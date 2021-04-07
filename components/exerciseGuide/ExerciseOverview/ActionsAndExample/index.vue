<template>
  <div class="actions-and-result">
    <visual-example />
    <exercise-actions />
  </div>
</template>

<script>
import ExerciseActions from '@/components/exerciseGuide/ExerciseOverview/ActionsAndExample/ExerciseActions'
import VisualExample from '@/components/exerciseGuide/ExerciseOverview/ActionsAndExample/VisualExample'


export default {
  components: {
    ExerciseActions,
    VisualExample
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions-and-result {
  border-left: 1px solid $blockBorder;
}

</style>
