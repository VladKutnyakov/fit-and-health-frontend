<template>
  <div class="albums">
    <app-block-title>Альбомы</app-block-title>
    <div class="albums__child-albums">
      <album v-for="(item, index) in 5" :key="index" />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import Album from '@/components/album/AlbumContent/Albums/Album'

export default {
  components: {
    AppBlockTitle,
    Album
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.albums {
  margin-bottom: 20px;
  .albums__child-albums {
    display: flex;
    flex-wrap: wrap;
  }
}



</style>
