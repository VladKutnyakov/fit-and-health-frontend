<template>
  <div class="user">
    <img src="https://pic.sport.ua/media/images/Foto%202.jpg" class="user__image">

    <p class="user__name">Дмитрий Коробов</p>

    <div class="user__stats">
      <div class="stats__element">
        <p class="element__title">Возраст</p>
        <p class="element__value">32</p>
      </div>
      <div class="stats__element">
        <p class="element__title">Подписчики</p>
        <p class="element__value">345</p>
      </div>
      <div class="stats__element">
        <p class="element__title">Принято вызывов</p>
        <p class="element__value">45</p>
      </div>
    </div>

    <div class="user__actions">
      <i class="ti-timer action-btn" title="Программы тренировок"></i>
      <i class="ti-agenda action-btn" title="Рацион питания"></i>
      <i class="ti-gallery action-btn" title="Медиа"></i>
      <i class="ti-cup action-btn" title="Принятые вызовы"></i>
      <i class="ti-bar-chart action-btn" title="Статистика"></i>

      <i class="ti-email action-btn" title="Написать"></i>
      <!-- <i class="ti-pin-alt action-btn" title="Подписаться"></i> -->
      <i class="ti-pin2 action-btn" title="Отписаться"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.user {
  margin-right: 20px;
  margin-bottom: 20px;
  // padding: 10px;
  width: calc(100% / 4 - 15px);
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .user__image {
    margin: 10px;
    width: calc(100% - 20px);
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .user__name {
    padding: 0 20px;
    text-align: center;
    font-weight: 500;
  }
  .user__stats {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .stats__element {
      // flex: 1 1 auto;
      width: 50%;
      border-right: 1px solid $blockBorder;
      .element__title {
        text-transform: uppercase;
        text-align: center;
        font-size: 10px;
      }
      .element__value {
        margin-top: 5px;
        text-align: center;
        font-style: 12px;
        font-weight: 500;
      }
    }
    .stats__element:nth-child(2) {
      border-right: none;
    }
    .stats__element:last-child {
      border-right: none;
      width: 100%;
      margin: 10px 10px 0 10px;
      padding-top: 10px;
      border-top: 1px solid $blockBorder;
    }
  }
  .user__actions {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding:  10px;
    background: $hiddenBlockBG;
    .action-btn {
      padding: 5px;
      margin-right: 5px;
      transition: $tr-02;
      cursor: pointer;
    }
    .action-btn:nth-child(6) {
      margin-left: auto;
    }
    .action-btn:last-child {
      margin-right: 0;
    }
    .action-btn:hover {
      color: $green;
    }
  }
}
.user:nth-child(4n) {
  margin-right: 0;
}

</style>
