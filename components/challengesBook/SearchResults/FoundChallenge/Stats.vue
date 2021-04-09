<template>
  <div class="stats">
    <div class="stats__element">
      <p class="element__title">Выполнили</p>
      <p class="element__value">89 354</p>
    </div>
    <div class="stats__element">
      <p class="element__title">Не выполнили</p>
      <p class="element__value">65 502</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.stats {
  display: flex;
  margin: auto 10px 0 10px;
  padding: 10px 0;
  border-top: 1px solid $blockBorder;
  .stats__element {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px dashed $blockBorder;
    .element__title {
      text-transform: uppercase;
      text-align: center;
      font-size: 10px;
    }
    .element__value {
      margin-top: 5px;
      text-align: center;
      font-weight: 500;
    }
  }
  .stats__element:last-child {
    border-right: none;
  }
}

</style>
