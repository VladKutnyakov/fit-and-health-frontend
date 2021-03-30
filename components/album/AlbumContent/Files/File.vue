<template>
  <div class="file">
    <img
      class="file__preview-image"
      src="https://media.gettyimages.com/photos/muscular-build-athlete-climbing-up-the-rope-in-a-gym-picture-id1093941786?s=2048x2048"
    />
    <p class="file__create-date">21.03.2021</p>
    <p class="file__title">Название файла</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.file {
  margin-right: 20px;
  margin-bottom: 20px;
  width: calc(100% / 4 - 15px);
  border: 1px solid $blockBorder;
  border-radius: 6px;
  transition: $tr-02;
  overflow: hidden;
  cursor: pointer;
  .file__preview-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
  .file__create-date {
    padding: 10px 10px 0 10px;
    font-size: 10px;
  }
  .file__title {
    margin-top: 5px;
    padding: 0 10px 10px 10px;
    font-size: 14px;
    font-weight: 500;
  }
}
.file:nth-child(4n) {
  margin-right: 0;
}
.file:hover {
  box-shadow: $boxShadow;
}

</style>