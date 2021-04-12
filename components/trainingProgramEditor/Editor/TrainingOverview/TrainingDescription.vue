<template>
  <div class="training-description">
    <p class="training-description__text">Описание программы:</p>

    <app-textarea
      class="fill-area"
      placeholder="Описание программы тренировок"
      @valueChanged="test = $event"
    />
  </div>
</template>

<script>
import AppTextarea from "@/components/basic/AppTextarea";

export default {
  components: {
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-description {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .training-description__text {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>