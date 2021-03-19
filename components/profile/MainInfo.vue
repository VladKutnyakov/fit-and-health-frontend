<template>
  <div class="main-info">
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
          <p class="element__title">Пройденная<br />дистанция</p>
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

    <div class="nutrition-info">
      <app-block-title>Содержание БЖУ в рационе</app-block-title>
      <div class="nutrition-info__bottom-block">
        <div class="nutrition-info__percent">
          <div class="percent__chart">
            <div class="percent__kkal">
              <p class="percent__kkal-value">1873</p>
              <p class="percent__kkal-scale">ккал</p>
            </div>
          </div>
          <div class="percent__nutriets">
            <div class="percent__nutriets-item">
              <p class="nutriets-item__indicator nutriets-item__indicator-protein"></p>
              <p class="nutriets-item__text">Белки:</p>
              <p class="nutriets-item__value">28%</p>
            </div>
            <div class="percent__nutriets-item">
              <p class="nutriets-item__indicator nutriets-item__indicator-fats"></p>
              <p class="nutriets-item__text">Жиры:</p>
              <p class="nutriets-item__value">32%</p>
            </div>
            <div class="percent__nutriets-item">
              <p class="nutriets-item__indicator nutriets-item__indicator-carb"></p>
              <p class="nutriets-item__text">Углеводы:</p>
              <p class="nutriets-item__value">40%</p>
            </div>
          </div>
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
  min-width: 400px;
  max-width: 400px;

  .trainings-intencity {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .trainings-intencity__chart {
      padding: 10px 10px 0 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .chart__settings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 0 10px 10px 10px;
        border-bottom: 1px dashed $blockBorder;
        .settings__title {
          font-size: 12px;
        }
        .settings__icon {
          font-size: 12px;
          cursor: pointer;
        }
      }
      .chart {
        // border: 1px solid red;
        flex: 1 1 auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 20px;
        padding: 10px 10px 0 10px;
        height: 150px;
        .chart__element {
          width: 30px;
          height: 100%;
          background: $black10;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          opacity: 1;
          transition: $tr-02;
          cursor: pointer;
        }
        .chart__element:hover {
          background: $green;
          opacity: 0.4;
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

  .trainings-stats {
    // border: 1px solid red;
    margin-bottom: 20px;
    .trainings-stats__elements-wrapper {
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .trainings-stats__element {
        flex: 1 1 auto;
        // border: 1px solid red;
        text-align: center;
        margin-right: 5px;
        padding: 10px;
        border-right: 1px dashed $blockBorder;
        .element__icon {
          font-size: 28px;
        }
        .element__title {
          margin-top: 10px;
          font-size: 14px;
        }
        .element__value {
          margin-top: 5px;
          color: $green;
          font-size: 18px;
          font-weight: 600;
          .element__value-scale {
            font-size: 14px;
            font-weight: 600;
          }
        }

        .chart__title {
          margin-bottom: 10px;
          padding-bottom: 10px;
          font-size: 14px;
          font-weight: 500;
          border-bottom: 1px dashed $blockBorder;
        }
        .chart {
          // border: 1px solid red;
          flex: 1 1 auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 20px;
          height: 150px;
          .chart__element {
            width: 30px;
            height: 100%;
            background: $black10;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            opacity: 1;
            transition: $tr-02;
            cursor: pointer;
          }
          .chart__element:hover {
            background: $green;
            opacity: 0.4;
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
      .trainings-stats__element:last-child {
        margin-right: 0;
        border-right: none;
      }
    }
  }

  .challenges-stats {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .challenges-stats__elements {
      display: flex;
      padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .challenges-stats__element {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        width: 100%;
        border-right: 1px dashed $blockBorder;
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

  .nutrition-info {
    // border: 1px solid red;
    margin-bottom: 20px;
    .nutrition-info__bottom-block {
      display: flex;
      .nutrition-info__percent {
        display: flex;
        width: 100%;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .percent__nutriets {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1 1 auto;
          .percent__nutriets-item {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            .nutriets-item__indicator {
              margin: 0 10px 0 20px;
              width: 20px;
              height: 6px;
              border-radius: 6px;
            }
            .nutriets-item__indicator-protein {
              background: $blue;
            }
            .nutriets-item__indicator-fats {
              background: $yellow;
            }
            .nutriets-item__indicator-carb {
              background: $red;
            }
            .nutriets-item__text {
              min-width: 100px;
              font-size: 14px;
            }
            .nutriets-item__value {
              margin-right: 20px;
              color: $green;
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
        .percent__chart {
          // flex: 1 1 auto;
          // align-self: center;
          margin: 20px 0;
          padding: 0px 30px;
          border-right: 1px dashed $blockBorder;
          .percent__kkal {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 120px;
            border: 6px solid $blockBorder;
            border-radius: 50%;
            .percent__kkal-value {
              margin-top: 5px;
              color: $green;
              font-size: 24px;
              font-weight: 700;
            }
            .percent__kkal-scale {
              margin-top: -5px;
              color: $green;
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
      }
      .nutrition-info__weight-chart {
        margin-left: 10px;
        width: 100%;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
  }
}
</style>
