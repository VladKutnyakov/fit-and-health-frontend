<template>
  <div class="preview-image">
    {{ program.previewImage }}
  </div>
</template>

<script>
export default {
  props: {
    program: Object
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.preview-image {
  width: 100%;
  min-width: 250px;
  max-width: 250px;
  height: 360px;
  // object-fit: cover;
  // object-position: center;
  background: $black05;
  border-radius: 6px;
}

.dark-theme {
  .preview-image {
    background: $black10;
  }
}

</style>
