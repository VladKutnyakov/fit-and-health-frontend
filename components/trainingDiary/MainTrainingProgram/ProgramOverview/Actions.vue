<template>
  <div class="actions">
    <i class="ti-control-play action-btn" title="Начать тренировку"></i>
    <i class="ti-search action-btn" title="Подробнее"></i>
    <i class="ti-pencil action-btn" title="Редактировать"></i>
    <i class="ti-trash action-btn" title="Убрать с основной страницы"></i>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // margin-bottom: 10px;
  padding: 0 10px;
  background: $hiddenBlockBG;
  .action-btn {
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
  }
}

</style>
