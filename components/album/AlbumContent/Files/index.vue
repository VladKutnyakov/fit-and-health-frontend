<template>
  <div class="files">
    <app-block-title>Файлы</app-block-title>
    <div class="files__list">
      <file v-for="(item, index) in 15" :key="index" />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import File from '@/components/album/AlbumContent/Files/File'

export default {
  components: {
    AppBlockTitle,
    File
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.files {
  .files__list {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>