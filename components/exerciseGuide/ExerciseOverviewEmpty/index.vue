<template>
  <div class="exercise-overview-empty">
    <app-block-title>Описание упражения</app-block-title>
    <div class="exercise-overview-empty__content">
      <div class="message">
        <i class="ti-search message__icon"></i>
        <p class="message__text">Выберите упражнение из списка, что бы получить подробную информацию о нем.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-overview-empty {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .exercise-overview-empty__content {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: $hiddenBlockBG;
    // border: 1px solid $blockBorder;
    border-radius: 6px;
    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 500px;
      .message__icon {
        color: $black40;
        font-size: 40px;
      }
      .message__text {
        margin-top: 20px;
        color: $black40;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}

</style>
