<template>
  <div class="media-albums">
    <album v-for="(item, index) in 10" :key="index" />
  </div>
</template>

<script>
import Album from '@/components/media/Album'

export default {
  components: {
    Album
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.media-albums {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

</style>
