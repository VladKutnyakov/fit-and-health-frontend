<template>
  <div class="training-description">
    <p class="training-description__text">Комментарий к тренеровочному дню:</p>
    <app-textarea class="fill-area" placeholder="Комментарий" />
  </div>
</template>

<script>
import AppTextarea from '@/components/basic/AppTextarea'

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
  .training-description__text {
    padding: 10px;
    font-weight: 500;
  }
}

</style>
