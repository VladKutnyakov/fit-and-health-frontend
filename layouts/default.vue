<template>
  <div class="layout-default" :class="[{ 'dark-theme': appTheme === 'DARK' }]">
    <app-header />
    <app-navbar />
    <Nuxt />
    <app-notifications />
    <app-scroll-to-top />

    <app-auth-modal
      :value="true"
      condition="login"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from 'js-cookie'
import AppHeader from '@/components/header/AppHeader'
import AppNavbar from '@/components/navigation/AppNavbar'
import AppNotifications from '@/components/basic/AppNotifications'
import AppScrollToTop from '@/components/basic/AppScrollToTop'
import AppAuthModal from '@/components/basic/AppAuthModal'

export default {
  components: {
    AppHeader,
    AppNavbar,
    AppNotifications,
    AppScrollToTop,
    AppAuthModal,
  },
  computed: {
    ...mapState({
      appTheme: state => state.settings.appTheme,
    })
  },
  // mounted () {
  //   // Если при серверном рендеринге был выдан новый токен, необходимо обновить куки с устаревшим токеном
  //   const browserToken = Cookies.get('authorization')
  //   const currentToken = this.$store.state.auth.token

  //   if (browserToken !== currentToken) {
  //     Cookies.set('authorization', currentToken, { expires: 30 })
  //   }
  // }
}
</script>

<style lang="scss">

.layout-default {
  min-height: 100vh;
}

</style>
