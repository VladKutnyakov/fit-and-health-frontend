<template>
  <div class="app-header">
    <logo-and-burger />
    <theme-switcher />
    <notifications />
    <user-info />
  </div>
</template>

<script>
import LogoAndBurger from '@/components/header/LogoAndBurger'
import ThemeSwitcher from '@/components/header/ThemeSwitcher'
import Notifications from '@/components/header/Notifications'
import UserInfo from '@/components/header/UserInfo'

export default {
  components: {
    LogoAndBurger,
    ThemeSwitcher,
    Notifications,
    UserInfo,
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
