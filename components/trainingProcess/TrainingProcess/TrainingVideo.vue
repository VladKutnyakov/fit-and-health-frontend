<template>
  <div class="video">виртуальный ассистент или видео-тренировка от тренера</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.video {
  flex: 1 1 auto;
  margin: 10px 10px 0 10px;
  padding: 10px;
  height: 550px;
  background: $black10;
  border-radius: 6px;
}

body.dark {
  .video {
    background: $black20;
  }
}

</style>
