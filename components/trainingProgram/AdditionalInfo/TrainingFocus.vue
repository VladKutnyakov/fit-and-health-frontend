<template>
  <div class="training-focus">
    <p>Акцент тренировок</p>

    <div class="chart-and-percents">
      <div class="chart">
        <p>график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)</p>
      </div>
      <div class="percents">
        <div class="percents__element">
          <p class="element__title">Сила:</p>
          <div class="element__value">60%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Выносливость:</p>
          <div class="element__value">20%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Гибкость:</p>
          <div class="element__value">5%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Кардио:</p>
          <div class="element__value">5%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-focus {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .chart {
    margin: 160px 0;
  }
  .percents {
    margin-top: auto;
    padding: 10px 10px 0px 10px;
    border-top: 1px solid $dividerBorder;
    .percents__element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      // .element__title {}
      .element__value {
        color: $primary;
        font-weight: 500;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

.dark-theme {
  .training-focus {
    .percents {
      border-top: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
