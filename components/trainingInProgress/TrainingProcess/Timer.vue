<template>
  <div class="timer">
    <p class="element__data">00 : 00 : 00</p>
    <div class="element__timer-btn-wrapper">
      <i class="element__timer-btn ti-control-backward"></i>
      <i class="element__timer-btn ti-control-play"></i>
      <!-- <i class="element__timer-btn ti-control-record"></i> -->
      <!-- <i class="element__timer-btn ti-control-pause"></i> -->
      <i class="element__timer-btn ti-control-stop"></i>
      <i class="element__timer-btn ti-control-forward"></i>
      <!-- <i class="element__timer-btn ti-volume"></i> -->
    </div>
    <div class="laps">
      <div class="lap">
        <p class="lap__title">Круг 1</p>
        <p class="lap__element">Подход: 10 сек</p>
        <p class="lap__element">Отдых: 5 сек</p>
        <p class="lap__element">Подход: 10 сек</p>
        <p class="lap__element">Отдых: 5 сек</p>
        <p class="lap__element">Подход: 10 сек</p>
        <p class="lap__element">Отдых: 5 сек</p>
        <p class="lap__full-time">Время курга: 3 мин. 45 сек.</p>
      </div>
      
    </div>
    <div class="actions">
      <app-button size12px >
        <i class="ti-trash"></i>
      </app-button>
      <app-button class="ml-5" size12px >
        <i class="ti-pencil"></i>
      </app-button>
      <app-button class="ml-5 fill-area" size12px uppercase >Добавить круг</app-button>
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

.timer {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;
  width: 100%;
  min-width: 350px;
  max-width: 350px;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .element__data {
    margin: 10px 0 20px 0;
    text-align: center;
    color: $green;
    font-size: 32px;
    font-weight: 600;
  }
  .element__timer-btn-wrapper {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    .element__timer-btn {
      margin: 0 10px;
      font-size: 20px;
      cursor: pointer;
      transition: $tr-02;
    }
    .element__timer-btn:hover {
      color: $green;
    }
  }
  .laps {
    flex: 1 1 auto;
    margin-top: 20px;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    overflow-y: scroll;
    .lap {
      display: flex;
      flex-direction: column;
      // padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .lap__title {
        margin-bottom: 5px;
        padding: 5px 10px 5px 10px;
        // font-size: 14px;
        font-weight: 500;
        border-bottom: 1px dashed $blockBorder;
      }
      .lap__element {
        margin-bottom: 5px;
        padding: 0 10px;
        font-size: 14px;
      }
      .lap__full-time {
        // margin-top: 5px;
        padding: 5px 10px 5px 10px;
        // font-size: 14px;
        font-weight: 500;
        border-top: 1px dashed $blockBorder;
      }
    }
  }
  .actions {
    display: flex;
    margin-top: 10px;
  }
}

</style>
