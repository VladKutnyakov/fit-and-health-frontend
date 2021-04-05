<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>

    <div class="additional-info__content">
      <div class="members">
        <div class="members__block-title">Участники: 2</div>

        <ul class="members__users-list">
          <li class="users-list__item" v-for="(item, index) in 2" :key="index">
            <img class="item__image" src="https://pic.sport.ua/media/images/Foto%202.jpg">
            <div class="item__user-info">
              <p class="user-info__name">Дмитрий Коробов</p>
              <p class="user-info__status">online</p>
            </div>
            <div class="item__actions">
              <i class="ti-trash action-btn"></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="user-info">
        Данные о пользователе
      </div>

      <div class="files-and-links">
        Файлы и ссылки
      </div>
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

.additional-info {
  // border: 1px solid red;
  margin-left: 40px;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  .additional-info__content {
    // padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .members {
      .members__block-title {
        padding: 10px;
        background: $hiddenBlockBG;
        font-size: 14px;
      }
      .members__users-list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        .users-list__item {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid $blockBorder;
          .item__image {
            width: 50px;
            min-width: 50px;
            height: 50px;
            object-fit: cover;
            object-position: center;
            border: 1px solid $blockBorder;
            border-radius: 6px;
          }
          .item__user-info {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            margin-right: 10px;
            .user-info__name {
              font-size: 14px;
              font-weight: 500;
            }
            .user-info__status {
              font-size: 10px;
            }
          }
          .item__actions {
            margin-left: auto;
            .action-btn {}
          }
        }
        .users-list__item:last-child {
          border-bottom: none;
        }
      }
    }
    .user-info {
      padding: 10px;
      background: $hiddenBlockBG;
    }
    .files-and-links {
      padding: 10px;
      background: $hiddenBlockBG;
    }
  }
}

</style>
