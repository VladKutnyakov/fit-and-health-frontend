<template>
  <div class="exercise-actions">
    <i class="ti-trash action-btn" title="Удалить"></i>
    <i class="ti-share action-btn" title="Поделиться"></i>

    <i class="ti-heart action-btn" title="Добавить в избранное"></i>
    <i class="ti-pencil action-btn" title="Редактировать"></i>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 10px 20px;
  background: $hiddenBlockBG;
  .action-btn {
    padding: 5px;
    font-size: 20px;
  }
}

</style>