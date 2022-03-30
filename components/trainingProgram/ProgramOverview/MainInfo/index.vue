<template>
  <div class="main-info">
    <div class="preview-image">
      <i class="ti-image"></i>
    </div>
    <div class="overview">
      <div class="title">
        <p class="title__block-title">Название программы:</p>
        <app-input-text
          :value="null"
          disabled
        />
      </div>
      <div class="description">
        <p class="description__block-title">Описание программы:</p>
        <app-textarea
          class="fill-area"
          :value="null"
          disabled
        />
      </div>
      <div class="skill">
        <p class="skill__block-title">Сложность тренировочной программы:</p>
        <app-input-text
          :value="null"
          disabled
        />
      </div>
    </div>
    <div class="added-marks">
      <div class="added-marks__block-title">
        Добавленные отметки:
      </div>
      <div class="added-marks__marks"></div>
      <div class="added-marks__input-wrapper">
        <input
         
          type="text"
          placeholder="Добавьте отметку"
          class="input"
        />
        <button class="action-btn">
          <i class="ti-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppInputText,
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-info {
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $dividerBorder;
  .preview-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    min-width: 320px;
    max-width: 320px;
    height: 450px;
    background: $black10;
    border-radius: 6px;
    i {
      color: $black20;
      font-size: 100px;
    }
    .image {
      width: 100%;
      min-width: 300px;
      max-width: 300px;
      object-fit: cover;
      border: 1px solid $dividerBorder;
      border-radius: 6px;
    }
  }
  .overview {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      flex-direction: column;
      padding: 0 10px 10px 10px;
      .title__block-title {
        margin-bottom: 5px;
        padding: 0 20px;
        font-weight: 500;
      }
    }
    .description {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      .description__block-title {
        margin-bottom: 5px;
        padding: 0 20px;
        font-weight: 500;
      }
    }
    .skill {
      display: flex;
      flex-direction: column;
      padding: 10px 10px 0 10px;
      .skill__block-title {
        margin-bottom: 5px;
        padding: 0 20px;
        font-weight: 500;
      }
    }
  }
}

body.dark {
  .main-info {
    border-bottom: 1px solid $dividerBorderDarkBG;
    .preview-image {
      background: $black20;
      i {
        color: $white20;
      }
    }
  }
}

</style>
