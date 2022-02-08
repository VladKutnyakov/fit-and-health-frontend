<template>
  <div class="training-video">
    <p class="training-video__text">Видео тренировки:</p>
    <div class="video">video</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-video {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  .training-video__text {
    padding: 10px;
    font-weight: 500;
  }
  .video {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $black10;
    width: 100%;
    max-width: 600px;
    min-width: 600px;
    height: 350px;
  }
}

</style>
