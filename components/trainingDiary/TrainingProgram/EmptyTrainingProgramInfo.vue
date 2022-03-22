<template>
  <div class="empty-training-program-info">
    <div class="message">
      <p class="message__info">Нет данных о тренировке.</p>
    </div>

    <div class="action-cards">
      <router-link to="/training-diary/training-in-progress" class="action-card">
        <i class="ti-plus action-card__icon"></i>
        <p class="action-card__title">Добавить тренировку</p>
      </router-link>

      <router-link to="/training-programs/training-program-editor" class="action-card">
        <i class="ti-pencil-alt action-card__icon"></i>
        <p class="action-card__title">Создать новую программу тренировок</p>
      </router-link>
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
  flex: 1 1 auto;
  .message {
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
    .message__info {
      padding: 40px 20px;
      text-align: center;
      font-size: 20px;
    }
  }
  .action-cards {
    display: flex;
    margin-top: 20px;
    padding: 40px 20px;
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
    .action-card {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      padding: 10px;
      border: 1px solid $dividerBorder;
      border-radius: 6px;
      transition: $tr-02;
      cursor: pointer;
      .action-card__icon {
        flex: 1 1 auto;
        padding: 80px 50px;
        background: $dividerBorder;
        text-align: center;
        font-size: 30px;
        border-radius: 6px;
        transition: $tr-02;
      }
      .action-card__title {
        margin: 20px 0 10px 0;
        text-align: center;
        font-size: 18px;
        transition: $tr-02;
      }
    }
    .action-card:hover {
      background: $primary;
      .action-card__icon {
        background: $black20;
        color: $white;
      }
      .action-card__title {
        color: $white;
      }
    }
  }
}

body.dark {
  .empty-training-program-info {
    .message {
      background: $cardBackgroundDarkBG;
      // .message__info {}
    }
    .action-cards {
      background: $cardBackgroundDarkBG;
      .action-card {
        border: 1px solid $dividerBorderDarkBG;
        cursor: pointer;
        .action-card__icon {
          background: $dividerBorderDarkBG;
        }
        // .action-card__title {}
      }
      .action-card:hover {
        .action-card__icon {
          background: $black40;
        }
        // .action-card__title {}
      }
    }
  }
}

</style>
