<template>
  <div class="laps-overview">
    <ul class="laps-overview__laps">
      <li class="lap" v-for="(item, index) in 1" :key="index">
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
            <p class="element__text">Выполнено подходов:</p>
            <p class="element__value">28</p>
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
        <!-- <div class="lap__actions">
          <i class="ti-trash control__btn"></i>
          <i class="ti-control-stop control__btn"></i>
          <i class="ti-control-pause control__btn"></i>
          <i class="ti-control-play control__btn"></i>
          <i class="ti-control-record control__btn control__btn--record-on"></i>
        </div> -->
      </li>
    </ul>
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
  margin: 0 10px 10px 10px;
  .laps-overview__laps {
    flex: 1 1 auto;
    display: flex;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    overflow-x: scroll;
    .lap {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      min-width: 320px;
      background: $white;
      box-shadow: $btnShadow;
      border-radius: 6px;
      transition: $tr-02;
      .lap__title {
        display: flex;
        margin: 10px 0;
        padding: 0 20px 10px 20px;
        border-bottom: 1px solid $dividerBorder;
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
            color: $primary;
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
        border-top: 1px dashed $dividerBorder;
        .stats__element {
          display: flex;
          margin-bottom: 5px;
          .element__text {
            margin-right: 10px;
          }
          .element__value {
            margin-left: auto;
            color: $primary;
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
        background: $black10;
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
  .laps-overview__laps::-webkit-scrollbar {
    height: 4px;
  }
  .laps-overview__laps::-webkit-scrollbar-thumb {
    background: $primaryLight4;
    border-radius: 50px;
  }
  .laps-overview__laps::-webkit-scrollbar-track {
    background: $black10;
  }
}

body.dark {
  .laps-overview {
    .laps-overview__laps {
      background: $black20;
      border: 1px solid $dividerBorderDarkBG;
      .lap {
        background: $cardBackgroundDarkBG;
        .lap__title {
          border-bottom: 1px solid $dividerBorderDarkBG;
        }
        .lap__stats {
          border-top: 1px dashed $dividerBorderDarkBG;
        }
      }
    }
  }
}

</style>
