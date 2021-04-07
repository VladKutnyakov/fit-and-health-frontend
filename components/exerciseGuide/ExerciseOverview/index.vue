<template>
  <div class="exercise-overview">
    <app-block-title>Описание упражения</app-block-title>
    <div class="exercise-overview__content">
      <description />
      <actions-example-result />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import Description from '@/components/exerciseGuide/ExerciseOverview/Description/index'
import ActionsExampleResult from '@/components/exerciseGuide/ExerciseOverview/ActionsExampleResult/index'

export default {
  components: {
    AppBlockTitle,
    Description,
    ActionsExampleResult
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
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>