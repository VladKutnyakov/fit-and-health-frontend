<template>
  <div class="laps-overview">
    <div class="laps-counter">
      <p class="laps-counter__text">Завершено кругов:</p>
      <p class="laps-counter__count">6 из 10</p>
    </div>
    <div class="laps">
      <div class="lap">
        <div class="lap__title">
          <p class="title">Круг</p>
          <p class="value">1</p>
          <!-- <i class="ti-trash"></i> -->
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
          <i class="ti-control-stop control__btn"></i>
          <i class="ti-control-pause control__btn"></i>
          <i class="ti-control-play control__btn"></i>
        </div>
      </div>
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
  .lap-timer {
    margin-top: 10px;
    text-align: center;
    color: $green;
    font-size: 32px;
    font-weight: 600;
  }
  .laps {
    flex: 1 1 auto;
    margin-top: 10px;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    overflow-y: scroll;
    .lap {
      display: flex;
      flex-direction: column;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .lap__title {
        display: flex;
        margin: 10px;
        padding: 0 10px 10px 10px;
        border-bottom: 1px solid $blockBorder;
        .title {
          margin-right: auto;
          text-transform: uppercase;
          font-weight: 500;
          // font-size: 18px;
        }
        // .value {}
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
        justify-content: space-around;
        margin: 0px 10px 0 10px;
        border-top: 1px dashed $blockBorder;
        .control__btn {
          margin: 5px 10px;
          padding: 5px;
          font-size: 18px;
          transition: $tr-02;
          cursor: pointer;
        }
        .control__btn:hover {
          color: $green;
        }
      }
    }
  }
  .laps-counter {
    display: flex;
    // margin-top: 10px;
    padding: 10px 10px 10px 10px;
    // background: $green;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .laps-counter__text {
      margin-right: auto;
      // color: $white;
      font-weight: 500;
    }
    .laps-counter__count {
      color: $green;
      // color: $white;
      font-weight: 500;
    }
  }
}

</style>
