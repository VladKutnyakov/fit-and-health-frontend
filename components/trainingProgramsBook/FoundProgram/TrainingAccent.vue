<template>
  <div class="training-accent">
    <p class="chart__block-title">Акцент тренировок</p>
    <img src="https://image.freepik.com/free-vector/circle-chart-infographic-template-with-options_93208-410.jpg" alt/>
    <p>Кардио: 30%</p>
    <p>Сила: 20%</p>
    <p>Выносливость: 38%</p>
    <p>Гибкость: 12%</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-accent {
  width: 230px;
  min-width: 230px;
  max-width: 230px;
  padding: 10px;
  border-left: 1px solid $blockBorder;
  border-right: 1px solid $blockBorder;
  .chart__block-title {
    margin-bottom: 10px;
    padding: 0 10px 10px 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    white-space: nowrap;
  }
}

</style>
