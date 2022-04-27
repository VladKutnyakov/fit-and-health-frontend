<template>
  <div class="preview-image">
    <i class="ti-image"></i>
    <!-- <img class="image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"/> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.preview-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  min-width: 320px;
  max-width: 320px;
  height: 450px;
  background: $black10;
  border-radius: 6px;
  i {
    color: $black20;
    font-size: 100px;
  }
  .image {
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    object-fit: cover;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
  }
}

.dark-theme {
  .preview-image {
    background: $black20;
    i {
      color: $white20;
    }
  }
}

</style>
