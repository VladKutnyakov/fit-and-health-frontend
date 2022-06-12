<template>
  <nuxt-link to="/" class="user-card">
    <img src="/images/user-avatar.jpg" class="user-card__image">
    <div class="user-card__info">
      <p class="info__name">Имя Фамилия</p>
      <div class="info__challenges-info">
        <p class="challenges-info__item">Принято: 10</p>
        <p class="challenges-info__item">Побед: 8</p>
        <p class="challenges-info__item">Поражений: 2</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.user-card {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid $blockBorder;
  .user-card__image {
    width: 100%;
    min-width: 60px;
    max-width: 60px;
    height: 60px;
    object-fit: cover;
    object-position: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .user-card__info {
    flex: 1 1 auto;
    margin-left: 10px;
    .info__name {
      font-weight: 500;
    }
    .info__challenges-info {
      display: flex;
      margin-top: 5px;
      .challenges-info__item {
        padding: 0 10px;
        font-size: 12px;
        border-right: 1px solid $blockBorder;
      }
      .challenges-info__item:first-child {
        padding-left: 0;
      }
      .challenges-info__item:last-child {
        padding-right: 0;
        border-right: none;
      }
    }
  }
}
.user-card:last-child {
  border-bottom: none;
}

</style>