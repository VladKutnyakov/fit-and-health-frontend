<template>
  <div class="album-content">
    <albums />
    <files />
  </div>
</template>

<script>
import Albums from '@/components/album/AlbumContent/Albums/index'
import Files from '@/components/album/AlbumContent/Files/index'

export default {
  components: {
    Albums,
    Files
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.album-content {
  flex: 1 1 auto;
}

</style>
