<template>
  <div class="layout-empty" :class="[{ 'dark-theme': appTheme === 'DARK' }]">
    <Nuxt />
    <app-notifications />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNotifications from '@/components/basic/AppNotifications'

export default {
  components: {
    AppNotifications
  },
  computed: {
    ...mapState({
      appTheme: state => state.settings.appTheme,
    })
  },
}
</script>

<style lang="scss">

.layout-empty {
  min-height: 100vh;
}

</style>
