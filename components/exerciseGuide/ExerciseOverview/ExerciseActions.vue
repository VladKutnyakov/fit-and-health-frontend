<template>
  <div class="exercise-actions">
    <i class="ti-pencil action-btn" title="Редактировать"></i>

    <i class="ti-heart action-btn" title="Добавить в избранное"></i>
    <i class="ti-share action-btn" title="Поделиться"></i>
    <i class="ti-trash action-btn" title="Удалить"></i>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: $hiddenBlockBG;
  .action-btn {
    margin-bottom: 10px;
    padding: 5px;
    font-size: 20px;
    transition: $tr-02;
    cursor: pointer;
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
  .action-btn:hover {
    color: $green;
  }
}

</style>