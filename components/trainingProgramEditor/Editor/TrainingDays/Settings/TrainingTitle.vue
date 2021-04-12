<template>
  <div class="training-title">
    <p class="training-title__text">Название тренировочного дня:</p>
    <app-input-text value="День 1. Ноги и плечи" />
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'

export default {
  components: {
    AppInputText
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-title {
  .training-title__text {
    padding: 10px;
    font-weight: 500;
  }
}

</style>
