<template>
  <div class="actions-example-result">
    <div class="actions">
      <i class="ti-more action-btn" title="Добавить в избранное"></i>
      <i class="ti-more action-btn" title="Редактировать"></i>
    </div>
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
  .actions {
    display: flex;
    .btn {
      flex: 1 1 auto;
      margin-left: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }
}

</style>
