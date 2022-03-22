<template>
  <div class="empty-training-program-info">
    <div class="message">
      <p class="message__info">Нет данных о тренировке.</p>

      <p class="message__offer">Начните <router-link to="/training-diary/training-in-progress" class="offer__link">новую тернировку</router-link> с использованием последней тренировочной программы или используйте поиск, чтобы <router-link to="/training-programs" class="offer__link">найти программу</router-link> для тренировок.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.empty-training-program-info {
  // border: 1px solid red;
  padding: 40px 10px;
  flex: 1 1 auto;
  background: $hiddenBlockBG;
  border-radius: 6px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
  .message {
    text-align: center;
    .message__info {
      font-size: 20px;
    }
    .message__offer {
      margin-top: 40px;
      .offer__link {
        color: $primary;
        font-weight: 500;
      }
    }
  }
}

body.dark {
  .empty-training-program-info {
    background: $cardBackgroundDarkBG;
  }
}

</style>
