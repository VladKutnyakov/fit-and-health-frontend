<template>
  <div class="preview-image">
    <img class="image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.preview-image {
  padding: 10px;
  border-right: 1px solid $blockBorder;
  .image {
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    object-fit: cover;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
