<template>
  <div class="preview-image">
    <img class="image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg" alt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.preview-image {
  padding: 10px;
  .image {
    width: 100%;
    min-width: 250px;
    max-width: 250px;
    object-fit: cover;
    object-position: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
