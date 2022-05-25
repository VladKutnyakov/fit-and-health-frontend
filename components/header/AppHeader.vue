<template>
  <div class="app-header">
    <logo-and-burger />
    <theme-switcher />
    <notifications />
    <user-info v-if="accessToken" />

    <app-button
      v-if="!accessToken"
      class="ml-20"
      @click="openAuthModal()"
    >Вход</app-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LogoAndBurger from '@/components/header/LogoAndBurger'
import ThemeSwitcher from '@/components/header/ThemeSwitcher'
import Notifications from '@/components/header/Notifications'
import UserInfo from '@/components/header/UserInfo'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    LogoAndBurger,
    ThemeSwitcher,
    Notifications,
    UserInfo,
    AppButton,
  },
  computed: {
    ...mapState({
      accessToken: state => state.auth.accessToken,
    })
  },
  methods: {
    openAuthModal () {
      this.$store.commit('auth/setModalVisibility', { modal: 'authModalActive', condition: true })
    },
  },
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
  box-shadow: $cardShadow;
  transition: $tr-02;
  z-index: 9000;
}

.dark-theme .app-header {
  background: $cardBackgroundDarkBG;
}

</style>
