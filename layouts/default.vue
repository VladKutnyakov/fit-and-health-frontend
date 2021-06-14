<template>
  <div class="layout-default">
    <app-navbar />
    <Nuxt />
    <app-notifications />
    <app-loader-preview :isActive="isActive" :message="message"/>
  </div>
</template>

<script>
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
  }
}
</script>
