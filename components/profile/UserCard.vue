<template>
  <div ref="userCard" class="user-card">

    <div class="user-card__avatar-wrapper">
      <img class="avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar">

      <div class="user-status"></div>

      <div class="avatar__edit-btn">
        <i class="ti-marker-alt"></i>
      </div>
    </div>

    <div class="user-card__user">
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
          <div class="button-content">
            <i class="ti-gallery button-content__icon"></i>
            <p class="element__text">Фото<br>и видео</p>
          </div>
        </app-button>
      </nuxt-link>
      <nuxt-link to="/profile/subscriptions" no-prefetch>
        <app-button size14px class="ml-10">
          <div class="button-content">
            <i class="ti-crown button-content__icon"></i>
            <p class="element__text">Интересные<br>страницы</p>
          </div>
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
  // mounted () {
  //   let startPageYOffset = window.pageYOffset
  //   document.addEventListener('scroll', () => {
  //     const fixedBlock = this.$refs.userCard
  //     const fixedBlockRect = fixedBlock.getBoundingClientRect()

  //     console.log((fixedBlockRect.bottom + 40) - window.innerHeight)

  //     if ((fixedBlockRect.bottom + 40) - window.innerHeight <= 0) {
  //       fixedBlock.style.position = 'fixed'
  //       fixedBlock.style.bottom = '40px'
  //     }

  //     // const pageContent = document.querySelector('.profile-page__content')
  //     // const pageContentRect = pageContent.getBoundingClientRect()

  //     // const offset = 40

  //     // Определяем направление скрола
  //     // if (startPageYOffset < window.pageYOffset) {
  //     //   console.log('вверх')

  //     //   // Если высота контента меньше высоты браузерного окна
  //     //   if (pageContentRect.top - offset < 0 && window.innerHeight - (fixedBlockRect.height + offset) > 0) {
  //     //     fixedBlock.style.position = 'fixed'
  //     //     fixedBlock.style.top = `${offset}px`
  //     //   } else {
  //     //     fixedBlock.style.position = ''
  //     //     fixedBlock.style.top = ''
  //     //   }

  //     //   // Если высота контента больше высоты браузерного окна
  //     //   if (pageContentRect.top - offset < 0 && fixedBlockRect.bottom <= window.innerHeight - offset) {
  //     //     fixedBlock.style.position = 'fixed'
  //     //     fixedBlock.style.top = `-${(fixedBlockRect.height + offset) - window.innerHeight}px`
  //     //   }

  //     //   startPageYOffset = window.pageYOffset
  //     // } else {
  //     //   console.log('вниз')

  //     //   // Если высота контента меньше высоты браузерного окна
  //     //   if (pageContentRect.top - offset < 0 && window.innerHeight - (fixedBlockRect.height + offset) > 0) {
  //     //     fixedBlock.style.position = 'fixed'
  //     //     fixedBlock.style.top = `${offset}px`
  //     //   } else {
  //     //     fixedBlock.style.position = ''
  //     //     fixedBlock.style.top = ''
  //     //   }

  //     //   // Если высота контента больше высоты браузерного окна
  //     //   if (pageContentRect.top - offset < 0 && window.innerHeight - (fixedBlockRect.height + offset) < 0) {
  //     //     fixedBlock.style.position = 'fixed'
  //     //     fixedBlock.style.top = `${parseFloat(fixedBlock.style.top) - (startPageYOffset - window.pageYOffset)}px`
  //     //   }
  //     //   console.log(startPageYOffset - window.pageYOffset)

  //     //   startPageYOffset = window.pageYOffset
  //     // }
  //   })
  // }
}
</script>

<style lang="scss" scoped>
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
    position: relative;
    padding: 10px;
    width: 100%;
    .avatar {
      width: 100%;
      height: auto;
      border-radius: 6px;
      cursor: pointer;
    }
    .user-status {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 10px;
      height: 10px;
      background: $green;
      border-radius: 50%;
    }
    .avatar__edit-btn {
      // border: 1px solid red;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: $white60;
      border-radius: 50%;
      transition: $tr-02;
      opacity: 0;
      cursor: pointer;
      i {
        color: $black;
      }
    }
    .avatar__edit-btn:hover {
      background: $white;
    }
  }
  .user-card__avatar-wrapper:hover {
    .avatar__edit-btn {
      opacity: 1;
    }
  }

  .user-card__user {
    padding: 0 10px;
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
    // padding: 20px 10px;
    // background: $black10;
    display: flex;
    align-items: center;
    justify-content: center;
    // border-bottom: 1px solid $blockBorder;
  }

  .user-card__main-info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin: 20px 10px 0 10px;
    padding: 10px 0;
    border-top: 1px solid $blockBorder;
    border-bottom: 1px solid $blockBorder;
    .main-info__item {
      text-align: center;
      width: 100%;
      border-right: 1px dashed $blockBorder;
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
    .button-content {
      display: flex;
      align-items: center;
      .button-content__icon {
        margin-right: 10px;
        font-size: 20px;
      }
    }
  }
}

</style>
