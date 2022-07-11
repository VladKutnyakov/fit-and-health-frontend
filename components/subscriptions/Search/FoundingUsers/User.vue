<template>
  <div class="user">
    <img src="/images/user-avatar.jpg" class="user__image">

    <p class="user__name">Дмитрий К</p>
    <div class="user__subcriptions">
      <p class="subcriptions__value">3 256</p>
      <p class="subcriptions__title">подписчиков</p>
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
  .user__subcriptions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    .subcriptions__value {
      padding: 0 3px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
    }
    .subcriptions__title {
      padding: 0 3px;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
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
