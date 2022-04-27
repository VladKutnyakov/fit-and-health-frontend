<template>
  <div class="training-accent">
    <div class="training-accent__chart">
      График
    </div>

    <div class="training-accent__info">
      <div class="info__element">
        <span class="element__text">Кардио:</span>
        <span class="element__value">30%</span>
      </div>
      <div class="info__element">
        <span class="element__text">Сила:</span>
        <span class="element__value">20%</span>
      </div>
      <div class="info__element">
        <span class="element__text">Выносливость:</span>
        <span class="element__value">38%</span>
      </div>
      <div class="info__element">
        <span class="element__text">Гибкость:</span>
        <span class="element__value">12%</span>
      </div>
      <div class="info__element">
        <span class="element__text">Сложность:</span>
        <span class="element__value">Выше среднего</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-accent {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  min-width: 240px;
  max-width: 240px;
  background: $black05;
  border-radius: 6px;
  .training-accent__chart {
    margin-bottom: auto;
  }
  .training-accent__info {
    display: flex;
    flex-direction: column;
    .info__element {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      .element__text {
        font-size: 14px;
      }
      .element__value {
        margin-left: auto;
        color: $primary;
        font-size: 14px;
      }
    }
    .info__element:last-child {
      margin-top: 5px;
      margin-bottom: 0;
      padding-top: 10px;
      border-top: 1px solid $dividerBorder;
    }
  }
}

.dark-theme {
  .training-accent {
    background: $black10;
    .training-accent__info {
      .info__element:last-child {
        border-top: 1px solid $dividerBorderDarkBG;
      }
    }
  }
}

</style>
