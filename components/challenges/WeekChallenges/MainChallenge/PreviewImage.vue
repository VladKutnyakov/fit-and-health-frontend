<template>
  <div class="preview-image">
    <img class="image" src="https://wallpapercave.com/wp/wp1836146.jpg"/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.preview-image {
  display: flex;
  padding: 10px 0 10px 10px;
  .image {
    width: 100%;
    min-width: 500px;
    max-width: 500px;
    object-fit: cover;
    object-position: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
