<template>
  <div class="stats">
    <div class="stats__item">
      <p class="item__text">Время последней тренировки</p>
      <p class="item__value">1 час 12 мин.</p>
    </div>
    <div class="stats__item">
      <p class="item__text">Тоннаж последней тренировки</p>
      <p class="item__value">1782 кг.</p>
    </div>
    <div class="stats__item">
      <p class="item__text">Интенсивность последней тренировки</p>
      <p class="item__value">Высокая</p>
    </div>
    <div class="stats__item">
      <p class="item__text">Общий прогресс тренировок</p>
      <p class="item__value">+ 2.3%</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 20px 0 10px 0;
  border-top: 1px solid $blockBorder;
  .stats__item {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-right: 1px dashed $blockBorder;
    .item__text {
      text-transform: uppercase;
      text-align: center;
      font-size: 12px;
    }
    .item__value {
      margin-top: 5px;
      font-weight: 500;
    }
  }
  .stats__item:last-child {
    border-right: none;
  }
}

</style>
