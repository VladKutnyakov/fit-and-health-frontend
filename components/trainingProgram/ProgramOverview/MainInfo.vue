<template>
  <div class="main-info">
    <div class="preview-image">
      <i class="ti-image"></i>
    </div>
    <div class="overview">
      <div class="program-title">
        <p class="program-title__text">
          Название программы:
        </p>
        <div class="app-input-text">
          <input
            type="text"
            placeholder="Название программы тренировок"
            class="input"
          />
        </div>
      </div>
      <div class="training-description">
        <p class="training-description__text">
          Описание программы:
        </p>
        <textarea
          placeholder="Описание программы тренировок"
          class="app-textarea fill-area"
        ></textarea>
      </div>
      <div class="training-skill">
        <p class="training-skill__block-title">
          Сложность тренировочной программы:
        </p>
        <div class="app-select">
          <div class="app-select__value">
            <input
              placeholder="Выберите значение"
              class="app-select__selected-value"
            />
            <div class="app-select__action">
              <i class="ti-angle-down app-select__icon"></i>
            </div>
            <div class="app-select__action">
              <i class="ti-close app-select__icon"></i>
            </div>
          </div>
          <ul class="app-select__list">
            <li class="app-select__list-item">Низкая</li>
            <li class="app-select__list-item">Ниже среднего</li>
            <li class="app-select__list-item">Средняя</li>
            <li class="app-select__list-item">Выше среднего</li>
            <li class="app-select__list-item">Высокая</li>
          </ul>
        </div>
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
export default {}
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
