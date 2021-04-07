<template>
  <div class="found-program">
    <div class="found-program__overview">
      <div class="overview__image">
        <img class="image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg" alt />
      </div>

      <div class="overview____main-info">
        <p class="title">Круговая жиросжигающая тренировка "BATMAN"</p>

        <div class="additional-info">
          <div class="additional-info__element">
            <i class="ti-timer element__icon"></i>
            <p class="element__amount">4</p>
            <p class="element__text">тренировочных дня</p>
          </div>
          <div class="additional-info__element">
            <i class="ti-check-box element__icon"></i>
            <p class="element__amount">27</p>
            <p class="element__text">завершенных тренировок</p>
          </div>
        </div>

        <div class="description">
          <p class="description__title">Описание</p>
          <p class="description__text">Короткое описание тренировочной программы</p>
        </div>

        <div class="added-marks">
          <div class="mark">
            <p class="mark__text">Низкоуглеводное</p>
            <i class="ti-close mark__icon"></i>
          </div>
          <div class="mark">
            <p class="mark__text">Веганское</p>
            <i class="ti-close mark__icon"></i>
          </div>
          <div class="mark">
            <p class="mark__text">Без ГМО</p>
            <i class="ti-close mark__icon"></i>
          </div>
          <div class="mark">
            <p class="mark__text">Для набора массы</p>
            <i class="ti-close mark__icon"></i>
          </div>
        </div>

        <div class="training-skill">
          <p class="training-skill__block-title">Сложность тренировочной программы:</p>
          <div class="training-skill__level-view">
            <i class="ti-crown level-view__icon level-view__icon--active"></i>
            <i class="ti-crown level-view__icon level-view__icon--active"></i>
            <i class="ti-crown level-view__icon level-view__icon--active"></i>
            <i class="ti-crown level-view__icon"></i>
            <i class="ti-crown level-view__icon"></i>
          </div>
        </div>
      </div>

      <div class="overview__chart">
        <p class="chart__block-title">Акцент тренировок</p>
        <img
          src="https://image.freepik.com/free-vector/circle-chart-infographic-template-with-options_93208-410.jpg"
          alt
        />
        <p>Кардио: 30%</p>
        <p>Сила: 20%</p>
        <p>Выносливость: 38%</p>
        <p>Гибкость: 12%</p>
      </div>

      <div class="overview__actions">
        <i class="ti-control-play action-btn"></i>
        <nuxt-link to="training-programs/program-123" class="open-program-btn ml-auto">
          <i class="ti-search action-btn"></i>
        </nuxt-link>
        <i class="ti-check-box action-btn"></i>
        <i class="ti-trash action-btn"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.found-program {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .found-program__overview {
    display: flex;
    width: 100%;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .overview__image {
      padding: 10px;
      .image {
        width: 100%;
        min-width: 250px;
        max-width: 250px;
        object-fit: cover;
        object-position: center;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }

    .overview____main-info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      padding: 10px 10px 10px 0;
      .title {
        padding: 0 10px 10px 10px;
        text-align: center;
        font-weight: 500;
        border-bottom: 1px solid $blockBorder;
      }

      .additional-info {
        display: flex;
        padding: 10px 0;
        background: $white;
        .additional-info__element {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(0, 0, 0, 0.2);
          .element__icon {
            font-size: 16px;
          }

          .element__amount {
            margin-left: 10px;
            font-size: 14px;
            font-weight: 600;
          }

          .element__text {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
          }
        }
        .additional-info__element:last-child {
          border: none;
        }
      }

      .description {
        flex: 1 1 auto;
        padding-top: 10px;
        border-top: 1px solid $blockBorder;
        .description__title {
          text-align: center;
          font-weight: 500;
        }
        .description__text {
          padding: 10px;
        }
      }

      .added-marks {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        padding-top: 10px;
        padding-bottom: 5px;
        border-top: 1px solid $blockBorder;
        .mark {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 5px;
          margin-bottom: 5px;
          padding: 5px 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          .mark__text {
            font-size: 14px;
            white-space: nowrap;
          }
          .mark__icon {
            margin-left: 10px;
            font-size: 10px;
            cursor: pointer;
          }
        }
      }

      .training-skill {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px 0 10px;
        border-top: 1px solid $blockBorder;
        .training-skill__block-title {
          font-size: 14px;
          font-weight: 500;
        }
        .training-skill__level-view {
          .level-view__icon {
            color: $gray;
            font-size: 14px;
          }
          .level-view__icon--active {
            color: $green;
          }
        }
      }
    }

    .overview__chart {
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

    .overview__actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
      background: $hiddenBlockBG;
      .action-btn {
        padding: 5px;
        font-size: 20px;
      }
    }
  }
}

</style>
