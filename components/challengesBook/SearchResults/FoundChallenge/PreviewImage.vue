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
  // padding: 10px;
  // border-right: 1px solid $blockBorder;
  .image {
    width: 100%;
    min-width: 450px;
    max-width: 450px;
    object-fit: cover;
    object-position: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
