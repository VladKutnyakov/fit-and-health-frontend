<template>
  <div class="profile-page">
    profile page
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: ['userAuth'],
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

</style>
