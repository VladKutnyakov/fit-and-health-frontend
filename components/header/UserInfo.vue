<template>
  <div class="user-info">
    <div class="user-info__overview" @click="toggleListVisibility()">
      <div class="overview__name">
        <p class="name__first">Дмитрий</p>
        <p class="name__last">Коробов</p>
      </div>
      <div class="overview__preview">ДК</div>
    </div>

    <div class="user-info__actions" :class="[{ 'user-info__actions--visible': listIsVisible }]">
      <ul class="actions__links">
        <li class="links__item">
          <nuxt-link
            to="/settings"
            :exact="true"
            no-prefetch
            title="Настройки"
            class="item__link"
          >
            <i class="ti-settings link__icon"></i>
            <span class="link__text">Настройки</span>
          </nuxt-link>
        </li>
        <li class="links__item">
          <nuxt-link
            to="/"
            :exact="true"
            no-prefetch
            title="FAQ"
            class="item__link"
          >
            <i class="ti-help-alt link__icon"></i>
            <span class="link__text">FAQ</span>
          </nuxt-link>
        </li>
      </ul>

      <div class="logout" @click="logout()">
        <div class="logout__btn">
          <i class="ti-export btn__icon"></i>
          <p class="btn__text">Выйти</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listIsVisible: false,
    }
  },
  methods: {
    toggleListVisibility () {
      if (!this.listIsVisible) {
        this.openList()
      } else {
        this.closeList()
      }
    },
    openList () {
      this.listIsVisible = true
      setTimeout(() => {
        document.addEventListener('click', this.closeList)
      }, 0)
    },
    closeList () {
      this.listIsVisible = false
      document.removeEventListener('click', this.closeList)
    },
    logout () {
      this.$store.dispatch('auth/logout')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.user-info {
  position: relative;
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
  .user-info__overview {
    display: flex;
    align-items: center;
    .overview__name {
      .name__first {
        text-align: right;
        font-size: 14px;
        font-weight: 500;
        transition: $tr-02;
      }
      .name__last {
        text-align: right;
        font-size: 14px;
        font-weight: 500;
        transition: $tr-02;
      }
    }
    .overview__preview {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      width: 45px;
      height: 45px;
      background: $primaryGradient;
      color: $white;
      border-radius: 50%;
    }
  }
  .user-info__overview:hover {
    .overview__name {
      .name__first {
        color: $primary;
      }
      .name__last {
        color: $primary;
      }
    }
  }
  .user-info__actions {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 5px;
    background: $white;
    border: 1px solid $dividerBorder;
    box-shadow: $cardShadow;
    border-radius: 6px;
    transition: $tr-02;
    opacity: 0;
    visibility: hidden;
    .actions__links {
      display: flex;
      flex-direction: column;
      min-width: 160px;
      .links__item {
        display: flex;
        border-radius: 6px;
        .item__link {
          display: flex;
          align-items: center;
          padding: 10px;
          .link__icon {
            margin-right: 10px;
            // font-size: 14px;
          }
          // .link__text {
          //   font-size: 14px;
          // }
        }
      }
      .links__item:hover {
        background: $primaryLight5;
        .link__icon {
          color: $primary;
        }
        .link__text {
          color: $primary;
        }
      }
      .links__item:last-child {
        margin-bottom: 5px;
      }
    }
    .logout {
      border-top: 1px solid $dividerBorder;
      .logout__btn {
        display: flex;
        align-items: center;
        margin-top: 5px;
        padding: 10px;
        border-radius: 6px;
        .btn__icon {
          margin-right: 10px;
          transform: rotate(90deg);
          // font-size: 14px;
        }
        // .btn__text {
        //   font-size: 14px;
        // }
      }
      .logout__btn:hover {
        background: $primaryLight5;
        .btn__icon {
          color: $primary;
        }
        .btn__text {
          color: $primary;
        }
      }
    }
  }
  .user-info__actions--visible {
    opacity: 1;
    visibility: visible;
  }
}

.dark-theme .user-info {
  .user-info__actions {
    background: $cardBackgroundDarkBG;
    .actions__links {
      .links__item:hover {
        background: $primaryDarkHover;
      }
    }
    .logout {
      border-top: 1px solid $dividerBorderDarkBG;
      .logout__btn:hover {
        background: $primaryDarkHover;
      }
    }
  }
}

</style>
