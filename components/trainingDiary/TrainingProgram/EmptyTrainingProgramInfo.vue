<template>
  <div class="empty-training-program-info">
    <app-block-title>Тренировочная программа</app-block-title>

    <div class="empty-training-program-info__content">
      <div class="message">
        <p class="message__info">Нет данных о тренировке.</p>
        
        <p class="message__offer">Начните <router-link to="/training-diary/training-in-progress" class="offer__link">новую тернировку</router-link> с использованием последней тренировочной программы или используйте поиск, чтобы <router-link to="/training-diary/training-programs" class="offer__link">найти программу</router-link> для тренировок.</p>
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

.empty-training-program-info {
  // border: 1px solid red;
  .empty-training-program-info__content {
    padding: 40px 10px;
    background: $hiddenBlockBG;
    // border: 1px solid $blockBorder;
    border-radius: 6px;
    .message {
      text-align: center;
      .message__info {
        font-size: 20px;
      }
      .message__offer {
        margin-top: 40px;
        .offer__link {
          color: $green;
          font-weight: 500;
        }
      }
    }
  }
}

</style>
