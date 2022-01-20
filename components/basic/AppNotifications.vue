<template>
  <div v-show="isVisible" class="notifications">
    <ul class="notifications-list">
      <app-notice
        v-for="item in notifications"
        :key="item.id"
        :notice="item"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNotice from '@/components/basic/AppNotice'

export default {
  components: {
    AppNotice
  },
  computed: {
    ...mapState({
      notifications: state => state.notifications.notices,
    }),
    isVisible () {
      if (this.notifications.length > 0) {
        return true
      }
      return false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.notifications {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  z-index: 9999;
  overflow: hidden;
}

</style>