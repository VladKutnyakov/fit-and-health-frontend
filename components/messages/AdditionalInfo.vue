<template>
  <div class="additional-info">
    <div class="additional-info__content">
      <div class="members">
        <p class="members__block-title">Участники: 2</p>

        <ul class="members__users-list">
          <li class="users-list__item" v-for="(item, index) in 2" :key="index">
            <img class="item__image" src="/images/user-avatar.jpg">
            <div class="item__user-info">
              <p class="user-info__name">Дмитрий К</p>
              <p class="user-info__status">online</p>
            </div>
            <div class="item__actions">
              <i class="ti-trash action-btn"></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="files-and-links">
        <p class="files-and-links__block-title">Файлы и ссылки</p>

        <ul class="files-and-links__list">
          <li class="list__item" v-for="(item, index) in 7" :key="index">
            <i class="ti-image item__icon"></i>
            <p class="item__title">Название файла</p>
            <p class="item__date">21.02.2019</p>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
    overflow: hidden;
    .members {
      .members__block-title {
        padding: 10px;
        background: $black10;
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
          border-bottom: 1px solid $dividerBorder;
          .item__image {
            width: 50px;
            min-width: 50px;
            height: 50px;
            object-fit: cover;
            object-position: center;
            border: 1px solid $dividerBorder;
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

    .files-and-links {
      .files-and-links__block-title {
        padding: 10px;
        background: $black10;
        font-size: 14px;
      }
      .files-and-links__list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
        .list__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          width: calc(100% / 3);
          .item__icon {
            font-size: 26px;
          }
          .item__title {
            margin-top: 5px;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
          }
          .item__date {
            margin-top: 5px;
            font-size: 10px;
          }
        }
      }
    }
  }
}

.dark-theme {
  .additional-info {
    .additional-info__content {
      background: $cardBackgroundDarkBG;
      .members {
        .members__block-title {
          background: $black15;
        }
        .members__users-list {
          .users-list__item {
            border-bottom: 1px solid 1px solid $dividerBorderDarkBG;
            .item__image {
              border: 1px solid 1px solid $dividerBorderDarkBG;
            }
          }
          .users-list__item:last-child {
            border-bottom: none;
          }
        }
      }
      .files-and-links {
        .files-and-links__block-title {
          background: $black15;
        }
      }
    }
  }
}

</style>
