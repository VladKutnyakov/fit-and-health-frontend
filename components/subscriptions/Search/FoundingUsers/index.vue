<template>
  <div class="founding-users">
    <user v-for="(item, index) in 7" :key="index"/>
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
  display: flex;
  flex-wrap: wrap;
}

</style>
