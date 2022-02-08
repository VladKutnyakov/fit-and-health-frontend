<template>
  <div class="laps-overview">
    <div class="laps-overview__counter">
      <div class="counter__element">
        <p class="element__text">Завершено кругов:</p>
        <p class="element__count">6 из 10</p>
      </div>
      <!-- <div class="counter__element">
        <p class="element__text">Среднее время круга:</p>
        <p class="element__count">00 : 00 : 00</p>
      </div> -->
    </div>

    <ul class="laps-overview__laps">
      <li class="lap" v-for="(item, index) in 4" :key="index">
        <div class="lap__title">
          <p class="title">Круг</p>
          <p class="value">{{ index + 1 }}</p>
        </div>
        <div class="lap__info">
          <div class="info__element">
            <p class="element__text">Кол-во упражнений:</p>
            <p class="element__value">7</p>
          </div>
          <div class="info__element">
            <p class="element__text">Тоннаж:</p>
            <p class="element__value">1230 кг.</p>
          </div>
        </div>
        <div class="lap__stats">
          <div class="stats__element">
            <p class="element__text">Время круга:</p>
            <p class="element__value">00 : 12 : 45</p>
          </div>
          <div class="stats__element">
            <p class="element__text">Время отдыха:</p>
            <p class="element__value">00 : 05 : 00</p>
          </div>
        </div>
        <div class="lap__actions">
          <i class="ti-trash control__btn"></i>
          <i class="ti-control-stop control__btn"></i>
          <i class="ti-control-pause control__btn"></i>
          <i class="ti-control-play control__btn"></i>
          <i class="ti-control-record control__btn control__btn--record-on"></i>
        </div>
      </li>
    </ul>

    <div class="laps-overview__actions">
      <app-button size14px >Очистить список</app-button>
      <app-button size14px >Добавить круг</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.laps-overview {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 0;
  width: 100%;
  min-width: 350px;
  max-width: 350px;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .laps-overview__counter {
    padding: 10px 20px;
    .counter__element {
      display: flex;
      margin-bottom: 10px;
      .element__text {
        margin-right: auto;
        font-weight: 500;
      }
      .element__count {
        color: $green;
        font-weight: 500;
      }
    }
    .counter__element:last-child {
      margin-bottom: 0;
    }
  }
  .laps-overview__laps {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-height: 455px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-top: 1px solid $blockBorder;
    border-bottom: 1px solid $blockBorder;
    overflow-y: scroll;
    .lap {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .lap__title {
        display: flex;
        margin: 10px 0;
        padding: 0 20px 10px 20px;
        border-bottom: 1px solid $blockBorder;
        .title {
          margin-right: auto;
          text-transform: uppercase;
          font-weight: 500;
        }
        .value {
          font-weight: 500;
        }
      }
      .lap__info {
        margin: 0 10px;
        padding: 0 10px;
        .info__element {
          display: flex;
          margin-bottom: 5px;
          .element__text {
            margin-right: 10px;
          }
          .element__value {
            margin-left: auto;
            color: $green;
            font-weight: 500;
          }
        }
        .info__element:last-child {
          margin-bottom: 0;
        }
      }
      .lap__stats {
        margin: 10px 10px 0 10px;
        padding: 10px;
        border-top: 1px dashed $blockBorder;
        .stats__element {
          display: flex;
          margin-bottom: 5px;
          .element__text {
            margin-right: 10px;
          }
          .element__value {
            margin-left: auto;
            color: $green;
            font-weight: 500;
          }
        }
        .stats__element:last-child {
          margin-bottom: 0;
        }
      }
      .lap__actions {
        display: flex;
        align-items: center;
        background: $hiddenBlockBG;
        .control__btn {
          margin: 5px 10px;
          padding: 5px;
          font-size: 18px;
          transition: $tr-02;
          cursor: pointer;
        }
        .control__btn:first-child {
          margin-right: auto;
        }
        .control__btn:first-child:hover {
          color: $red;
        }
        .control__btn:hover {
          color: $green;
        }
        .control__btn--record-on {
          color: $red;
        }
      }
    }
  }
  .laps-overview__actions {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: $hiddenBlockBG;
  }
}

</style>
