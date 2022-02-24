<template>
  <div class="app-header">
    <div class="app-header__logo-and-burger">
      <nuxt-link class="logo" to="/" exact no-prefetch>Fit and Health</nuxt-link>

      <div
        class="burger-btn"
        :class="[{ 'burger-btn--active': menuIsOpen }]"
        @click="toggleMenuVisibility(!menuIsOpen)"
      >
        <div class="burger"></div>
      </div>
    </div>

    <div class="app-header__theme-switcher">
      <i class="ti-shine theme-switcher__icon" :class="[{ 'ti-light-bulb': true }]"></i>
    </div>

    <div class="app-header__notifications">
      <i class="ti-bell notifications__icon"></i>
    </div>

    <div class="app-header__user-info">
      <div class="user-info">
        <div class="user-info__name">
          <p class="name__first">Дмитрий</p>
          <p class="name__last">Коробов</p>
        </div>
        <!-- <img src="" alt="user" class="user-info__preview-image"> -->
        <div class="user-info__preview">ДК</div>
      </div>

      <div class="user-info__actions">
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

        <div class="logout">
          <div class="logout__btn">
            <i class="ti-export btn__icon"></i>
            <p class="btn__text">Выйти</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      menuIsOpen: state => state.settings.menuIsOpen,
    })
  },
  methods: {
    ...mapMutations({
      toggleMenuVisibility: 'settings/toggleMenuVisibility',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-right: 40px;
  width: 100vw;
  height: 60px;
  background: $white;
  box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
  z-index: 9000;
  .app-header__logo-and-burger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: $primary;
    width: 260px;
    height: 100%;
    .logo {
      color: $white;
      font-size: 20px;
      font-weight: 200;
    }
    .burger-btn {
      position: relative;
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      .burger {
        width: 25px;
        height: 1px;
        background: $white;
        border-radius: 4px;
        transition: $tr-02;
      }
      .burger:before {
        position: absolute;
        content: '';
        top: 8px;
        left: 0;
        width: 30px;
        height: 1px;
        background: $white;
        border-radius: 4px;
        transition: $tr-02;
      }
      .burger:after {
        position: absolute;
        content: '';
        top: 22px;
        left: 0;
        width: 20px;
        height: 1px;
        background: $white;
        border-radius: 4px;
        transition: $tr-02;
      }
    }
    .burger-btn--active {
      .burger {
        width: 30px;
      }
      .burger:after {
        width: 30px;
      }
    }
  }
  .app-header__theme-switcher {
    margin-left: auto;
    padding: 5px;
    cursor: pointer;
    .theme-switcher__icon {
      font-size: 20px;
    }
  }
  .app-header__notifications {
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
    .notifications__icon {
      font-size: 20px;
    }
  }
  .app-header__user-info {
    position: relative;
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
    .user-info {
      display: flex;
      align-items: center;
      .user-info__name {
        .name__first {
          text-align: right;
          font-size: 14px;
          font-weight: 500;
        }
        .name__last {
          text-align: right;
          font-size: 14px;
          font-weight: 500;
        }
      }
      .user-info__preview-image {
        border: 1px solid red;
        margin-left: 10px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      .user-info__preview {
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
    .user-info__actions {
      position: absolute;
      top: calc(100% + 10px);
      right: 0;
      display: flex;
      flex-direction: column;
      padding: 5px;
      background: $white;
      border: 1px solid rgba(34,41,47,.1);
      box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
      border-radius: 6px;
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
              font-size: 14px;
            }
            .link__text {
              font-size: 14px;
            }
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
        border-top: 1px solid rgba(34,41,47,.2);
        .logout__btn {
          display: flex;
          align-items: center;
          margin-top: 5px;
          padding: 10px;
          border-radius: 6px;
          .btn__icon {
            margin-right: 10px;
            transform: rotate(90deg);
            font-size: 14px;
          }
          .btn__text {
            font-size: 14px;
          }
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
  }
}

</style>
