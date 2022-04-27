<template>
  <div class="preview-image">
    <i class="ti-image"></i>
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
  background: $black05;
  border-radius: 6px;
  transition: $tr-02;
  i {
    color: $black20;
    font-size: 100px;
    transition: $tr-02;
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
    background: $white05;
    i {
      color: $white20;
    }
  }
}

</style>
