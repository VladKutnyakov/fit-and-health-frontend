<template>
  <div class="index-page">
    index page
  </div>
</template>

<script>
export default {
  middleware: ['userAuth'],
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.index-page {}
</style>
