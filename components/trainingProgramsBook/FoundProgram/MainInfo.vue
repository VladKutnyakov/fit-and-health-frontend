<template>
  <div class="main-info">
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-info {
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

</style>
