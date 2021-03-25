<template>
  <div class="layout-empty">
    <Nuxt />
    <app-notifications />
  </div>
</template>

<script>
import AppNotifications from '@/components/basic/AppNotifications'

export default {
  components: {
    AppNotifications
  }
}
</script>

