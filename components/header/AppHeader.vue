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
  }
}

</style>
