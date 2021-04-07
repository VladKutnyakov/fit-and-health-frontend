<template>
  <div class="exercise-actions">
    <i class="ti-more action-btn" title="Добавить в избранное"></i>
    <i class="ti-more action-btn" title="Редактировать"></i>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-actions {
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

</style>