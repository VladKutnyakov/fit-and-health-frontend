<template>
  <div ref="mainInfo" class="main-info">
    <div class="trainings-stats">
      <app-block-title>Статистика за все время</app-block-title>
      <div class="trainings-stats__elements-wrapper">
        <div class="trainings-stats__element">
          <i class="ti-calendar element__icon"></i>
          <p class="element__title">Завершено<br />тренеровок</p>
          <p class="element__value">308</p>
        </div>
        <div class="trainings-stats__element">
          <i class="ti-timer element__icon"></i>
          <p class="element__title">Длительность<br />тренеровок</p>
          <p class="element__value">1 785 <span class="element__value-scale">часов</span>
          </p>
        </div>
        <div class="trainings-stats__element">
          <i class="ti-map-alt element__icon"></i>
          <p class="element__title">Преодаленная<br />дистанция</p>
          <p class="element__value">1 862 <span class="element__value-scale">км</span></p>
        </div>
      </div>
    </div>

    <div class="trainings-intencity">
      <app-block-title>Интенсивность тренировок</app-block-title>
      <div class="trainings-intencity__chart">
        <div class="chart__settings">
          <p class="settings__title">Выборка за 10 дней</p>
          <i class="ti-settings settings__icon"></i>
        </div>
        <div class="chart">
          <div class="chart__element" v-for="(item, index) in 10" :key="index"></div>
        </div>
      </div>
    </div>

    <div class="challenges-stats">
      <app-block-title>Статистика по вызовам</app-block-title>
      <div class="challenges-stats__elements">
        <div class="challenges-stats__element">
          <i class="ti-heart element__icon"></i>
          <p class="element__title">Побед</p>
          <p class="element__value">400</p>
        </div>

        <div class="challenges-stats__element">
          <i class="ti-cup element__icon"></i>
          <p class="element__title">Принято<br />вызовов</p>
          <p class="element__value">463</p>
        </div>

        <div class="challenges-stats__element">
          <i class="ti-heart-broken element__icon"></i>
          <p class="element__title">Поражений</p>
          <p class="element__value">63</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  .trainings-stats {
    margin-bottom: 20px;
    background: $white;
    border-radius: 6px;
    box-shadow: $cardShadow;
    transition: $tr-02;
    .trainings-stats__elements-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      .trainings-stats__element {
        flex: 1 1 auto;
        text-align: center;
        margin-right: 5px;
        padding: 10px;
        .element__icon {
          font-size: 28px;
        }
        .element__title {
          margin-top: 10px;
          font-size: 14px;
        }
        .element__value {
          margin-top: 5px;
          color: $primary;
          font-size: 18px;
          font-weight: 600;
          .element__value-scale {
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
      .trainings-stats__element:last-child {
        margin-right: 0;
        border-right: none;
      }
    }
  }

  .trainings-intencity {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background: $white;
    border-radius: 6px;
    box-shadow: $cardShadow;
    transition: $tr-02;
    .trainings-intencity__chart {
      padding: 10px 10px 0 10px;
      .chart__settings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 0 10px 10px 10px;
        .settings__title {
          font-size: 12px;
        }
        .settings__icon {
          font-size: 12px;
          cursor: pointer;
        }
      }
      .chart {
        flex: 1 1 auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 20px;
        padding: 10px 10px 0 10px;
        height: 100px;
        .chart__element {
          margin-right: 5px;
          width: 30px;
          height: 100%;
          background: $black10;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          transition: $tr-02;
          cursor: pointer;
        }
        .chart__element:last-child {
          margin-right: 0;
        }
        .chart__element:hover {
          background: $primary;
        }
        .chart__element:nth-child(1) {
          height: 60%;
        }
        .chart__element:nth-child(2) {
          height: 80%;
        }
        .chart__element:nth-child(3) {
          height: 40%;
        }
        .chart__element:nth-child(4) {
          height: 100%;
          background: $primary;
        }
        .chart__element:nth-child(5) {
          height: 60%;
        }
        .chart__element:nth-child(6) {
          height: 75%;
        }
        .chart__element:nth-child(8) {
          height: 26%;
        }
        .chart__element:nth-child(10) {
          height: 40%;
        }
      }
    }
  }

  .challenges-stats {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background: $white;
    border-radius: 6px;
    box-shadow: $cardShadow;
    transition: $tr-02;
    .challenges-stats__elements {
      display: flex;
      padding: 10px;
      .challenges-stats__element {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        width: 100%;
        .element__icon {
          font-size: 24px;
        }
        .element__title {
          margin-top: 10px;
          text-align: center;
          font-size: 14px;
        }
        .element__value {
          margin-top: 5px;
          color: $green;
          font-size: 18px;
          font-weight: 600;
        }
      }
      .challenges-stats__element:nth-child(1) {
        .element__value {
          color: $green;
        }
      }
      .challenges-stats__element:nth-child(2) {
        .element__icon {
          font-size: 28px;
        }
        .element__value {
          color: $blue;
        }
      }
      .challenges-stats__element:nth-child(3) {
        border-right: none;
        .element__value {
          color: $red;
        }
      }
    }
  }
}

.dark-theme {
  .main-info {
    .trainings-stats {
      background: $cardBackgroundDarkBG;
    }
    .trainings-intencity {
      background: $cardBackgroundDarkBG;
    }
    .challenges-stats {
      background: $cardBackgroundDarkBG;
    }
  }
}

</style>
