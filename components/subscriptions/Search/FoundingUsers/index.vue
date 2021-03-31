<template>
  <div class="founding-users">
    <user />
  </div>
</template>

<script>
import User from '@/components/subscriptions/Search/FoundingUsers/User'

export default {
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.founding-users {
  // margin-top: 20px;
}

</style>
