<template>
  <div class="logo-and-burger">
    <nuxt-link class="logo" to="/" exact no-prefetch>Fit and Health</nuxt-link>

    <div
      class="burger-btn"
      :class="[{ 'burger-btn--active': menuIsOpen }]"
      @click="toggleMenuVisibility(!menuIsOpen)"
    >
      <div class="burger"></div>
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

.logo-and-burger {
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

</style>
