<template>
  <div class="section-parameters">
    <app-block-title>Настраиваемые параметры</app-block-title>
    <div class="section-parameters__content">

      <div class="parameters-block">
        <p class="parameters-block__title">Общие</p>
        <div class="parameters-block__content">
          <div class="parameter">
            <p class="parameter__title">Фамилия:</p>
            <app-input-text />
          </div>
          <div class="parameter">
            <p class="parameter__title">Имя:</p>
            <app-input-text />
          </div>
          <div class="parameter">
            <p class="parameter__title">Отчество:</p>
            <app-input-text />
          </div>
          <div class="parameter">
            <p class="parameter__title">Пол:</p>
            <app-input-text />
          </div>
        </div>
      </div>

      <div class="parameters-block">
        <p class="parameters-block__title">Пользовательские параметры</p>
        <div class="parameters-block__content">
          <div class="parameter">
            <p class="parameter__title">Возраст:</p>
            <app-input-text />
          </div>
          <div class="parameter">
            <p class="parameter__title">Рост:</p>
            <app-input-text />
          </div>
          <div class="parameter">
            <p class="parameter__title">Вес:</p>
            <app-input-text />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppInputText from '@/components/basic/AppInputText'

export default {
  components: {
    AppBlockTitle,
    AppInputText
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.section-parameters {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .section-parameters__content {
    flex: 1 1 auto;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .parameters-block {
      display: flex;
      flex-direction: column;
      padding: 10px;
      .parameters-block__title {
        padding: 10px 20px;
        font-weight: 500;
      }
      .parameters-block__content {
        padding: 10px 20px;
        background: $white;
        box-shadow: $insetBoxShadow;
        border-radius: 6px;
      }
      .parameter {
        display: flex;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px dashed $black20;
        .parameter__title {
          min-width: 200px;
          font-weight: 500;
        }
      }
      .parameter:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
    }
  }
}

</style>
