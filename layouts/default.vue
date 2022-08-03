<template>
  <div class="layout-default" :class="[{ 'dark-theme': appTheme === 'DARK' }]">
    <app-header />
    <app-navbar />

    <Nuxt />

    <app-scroll-to-top />

    <auth-modal />

    <app-notifications />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Cookies from 'js-cookie'
import AppHeader from '@/components/header/AppHeader'
import AppNavbar from '@/components/navigation/AppNavbar'
import AppNotifications from '@/components/basic/AppNotifications'
import AppScrollToTop from '@/components/basic/AppScrollToTop'
import AuthModal from '@/components/basic/AuthModal'

export default {
  components: {
    AppHeader,
    AppNavbar,
    AppNotifications,
    AppScrollToTop,
    AuthModal,
  },
  computed: {
    ...mapState({
      appTheme: state => state.settings.appTheme,
      canBeShowAuthModal: state => state.auth.canBeShowAuthModal,
    })
  },
  mounted () {
  //   // Если при серверном рендеринге был выдан новый токен, необходимо обновить куки с устаревшим токеном
  //   const browserToken = Cookies.get('authorization')
  //   const currentToken = this.$store.state.auth.token

  //   if (browserToken !== currentToken) {
  //     Cookies.set('authorization', currentToken, { expires: 30 })
  //   }
  }
}
</script>

<style lang="scss">

.layout-default {
  min-height: 100vh;
}

</style>
