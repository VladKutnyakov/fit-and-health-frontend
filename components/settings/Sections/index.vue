<template>
  <div class="sections">
    <app-block-title>Разделы</app-block-title>
    <div class="sections__content">
      <ul class="sections__list">
        <li class="list__item list__item--active">
          <p class="item__title">Пользователь</p>
          <i class="ti-arrow-right item__icon"></i>
        </li>
        <li class="list__item">
          <p class="item__title">Тренировки</p>
          <i class="ti-arrow-right item__icon"></i>
        </li>
        <li class="list__item">
          <p class="item__title">Питание</p>
          <i class="ti-arrow-right item__icon"></i>
        </li>
        <li class="list__item">
          <p class="item__title">Вызовы</p>
          <i class="ti-arrow-right item__icon"></i>
        </li>
      </ul>
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
@import '@/assets/styles/vars.scss';

.sections {
  // border: 1px solid red;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  .sections__content {
    flex: 1 1 auto;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .sections__list {
      padding: 0 10px;
      .list__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 10px;
        border-bottom: 1px solid $blockBorder;
        cursor: pointer;
        .item__title {
          transition: $tr-02;
        }
        .item__icon {
          font-size: 12px;
          opacity: 0;
          transition: $tr-02;
        }
      }
      .list__item:last-child {
        border-bottom: none;
      }
      .list__item:hover {
        .item__title {
          color: $green;
        }
        .item__icon {
          color: $green;
          opacity: 1;
        }
      }
      .list__item--active {
        .item__title {
          color: $green;
          font-weight: 500;
        }
        .item__icon {
          color: $green;
          opacity: 1;
        }
      }
    }
  }
}

</style>
