<template>
  <div class="user-card">

    <div class="user-card__avatar-wrapper">
      <img class="avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar">
    </div>

    <div class="user-card__user">
      <p class="user__status">Online</p>
      <p class="user__name">Дмитрий Коробов</p>
      <p class="user__followers">40 517 подписчиков</p>
    </div>

    <div class="user-card__action-btns">
      <app-button size14px>Подписаться</app-button>
      <app-button class="ml-10" size14px>
        <i class="ti-email"></i>
      </app-button>
    </div>

    <div class="user-card__main-info">
      <div class="main-info__item">
        <p class="main-info__item-text">Возраст:</p>
        <p class="main-info__item-value">30</p>
      </div>
      <div class="main-info__item">
        <p class="main-info__item-text">Вес:</p>
        <p class="main-info__item-value">70.2</p>
      </div>
      <div class="main-info__item">
        <p class="main-info__item-text">Рост:</p>
        <p class="main-info__item-value">174</p>
      </div>
    </div>

    <div class="user-card__contacts">
      <div class="contacts__item">
        <i class="ti-location-pin contacts__item-icon"></i>
        <p class="contacts__item-title">Город:</p>
        <p class="contacts__item-text">г. Самара</p>
      </div>
      <div class="contacts__item">
        <i class="ti-pencil contacts__item-icon"></i>
        <p class="contacts__item-title">Телефон:</p>
        <p class="contacts__item-text">+7 845 879 87 96</p>
      </div>
      <div class="contacts__item">
        <i class="ti-email contacts__item-icon"></i>
        <p class="contacts__item-title">E-mail:</p>
        <p class="contacts__item-text">TestMail@gmail.com</p>
      </div>
      <div class="contacts__item">
        <i class="ti-world contacts__item-icon"></i>
        <p class="contacts__item-title">Website:</p>
        <p class="contacts__item-text">johndow-website.com</p>
      </div>
      <div class="contacts__item">
        <i class="ti-new-window contacts__item-icon"></i>
        <p class="contacts__item-title">Соц. сети:</p>
        <p class="contacts__item-text">
          <i class="social-link">vk</i>
          <i class="ti-facebook social-link"></i>
          <i class="ti-instagram social-link"></i>
          <i class="ti-youtube social-link"></i>
          <i class="ti-twitter social-link"></i>
          <i class="ti-skype social-link"></i>
        </p>
      </div>
    </div>

    <div class="user-card__media-and-subscriptions">
      <nuxt-link to="/profile/media" no-prefetch>
        <app-button size14px>
          <i class="ti-gallery element__icon"></i>
          <p class="element__text">Фото и видео</p>
        </app-button>
      </nuxt-link>
      <nuxt-link to="/profile/subscriptions" no-prefetch>
        <app-button size14px class="ml-10">
          <i class="ti-crown element__icon"></i>
          <p class="element__text">Интересные страницы</p>
        </app-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  },
  computed: {
    lastName () {
      return this.$store.getters['userProfile/getUserLastName']
    },
    firstName () {
      return this.$store.getters['userProfile/getUserFirstName']
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/vars.scss";

.user-card {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;

  .user-card__avatar-wrapper {
    padding: 10px;
    width: 100%;
    .avatar {
      width: 100%;
      height: auto;
      border-radius: 6px;
    }
  }

  .user-card__user {
    padding: 0 10px;
    .user__status {
      margin-top: 10px;
      text-align: center;
      font-size: 12px;
    }
    .user__name {
      margin-top: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .user__followers {
      text-align: center;
      margin-top: 5px;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .user-card__action-btns {
    margin-top: 20px;
    padding: 20px 10px;
    background: $black10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-card__main-info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin: 0 10px;
    padding: 10px 0;
    .main-info__item {
      text-align: center;
      width: 100%;
      border-right: 1px solid $blockBorder;
      .main-info__item-text {
        font-size: 14px;
        font-weight: 500;
      }
      .main-info__item-value {
        margin-top: 5px;
        color: $green;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .main-info__item:last-child {
      border-right: none;
    }
  }

  .user-card__contacts {
    margin-top: 5px;
    padding: 10px 20px;
    // background: $white;
    border-top: 1px solid $blockBorder;
    // border-radius: 6px;
    .contacts__item {
      display: flex;
      align-items: center;
      margin: 10px 0;
      .contacts__item-icon {
        margin-right: 10px;
        font-size: 16px;
      }
      .contacts__item-title {
        font-size: 14px;
        font-weight: 500;
      }
      .contacts__item-text {
        margin-left: auto;
        font-size: 14px;
        .social-link {
          padding: 5px;
          cursor: pointer;
        }
      }
    }
  }
  .user-card__media-and-subscriptions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: $black10;
    // .media-and-subscriptions__element {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   flex: 1 1 auto;
    //   margin-top: 5px;
    //   margin-right: 5px;
    //   text-decoration: none;
    //   color: $black;
    //   padding: 20px 10px;
    //   background: $white;
    //   border: 1px solid $blockBorder;
    //   border-radius: 6px;
    //   transition: $tr-02;
    //   cursor: pointer;
    //   .element__icon {
    //     font-size: 26px;
    //   }
    //   .element__text {
    //     margin-top: 15px;
    //     font-size: 16px;
    //     font-weight: 500;
    //   }
    // }
    // .media-and-subscriptions__element:last-child {
    //   margin-right: 0;
    // }
    // .media-and-subscriptions__element:hover {
    //   color: $green;
    // }
  }
}

</style>
