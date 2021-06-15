<template>
  <div class="layout-default">
    <app-navbar />
    <Nuxt />
    <app-notifications />
    <app-loader-preview :isActive="isActive" :message="message"/>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapState } from 'vuex'
import AppNavbar from '@/components/navigation/AppNavbar'
import AppNotifications from '@/components/basic/AppNotifications'
import AppLoaderPreview from '@/components/basic/AppLoaderPreview'

export default {
  components: {
    AppNavbar,
    AppNotifications,
    AppLoaderPreview
  },
  computed: {
    ...mapState({
      isActive: state => state.loaderPreview.isActive,
      message: state => state.loaderPreview.message
    })
  },
  mounted () {
    // Если при серверном рендеринге был выдан новый токен, необходимо обновить куки с устаревшим токеном
    const browserToken = Cookies.get('authorization')
    const currentToken = this.$store.state.auth.token

    if (browserToken !== currentToken) {
      Cookies.set('authorization', currentToken, { expires: 30 })
    }
  }
}
</script>
