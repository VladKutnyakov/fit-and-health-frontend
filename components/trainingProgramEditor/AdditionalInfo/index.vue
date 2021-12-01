<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info__content">
      <training-focus />

      <div class="actions">
        <div class="actions__top">
          <app-button >
            <i class="ti-trash"></i>
          </app-button>

          <app-button class="ml-5" >
            <i class="ti-save"></i>
          </app-button>

          <app-button class="ml-5 fill-area" >Сделать основной</app-button>
        </div>

        <div class="actions__bottom fill-area">
          <app-button class="mt-5 fill-area" >Начать тренировку</app-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton.vue'
import TrainingFocus from '@/components/trainingProgramEditor/AdditionalInfo/TrainingFocus'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    TrainingFocus
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.additional-info {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .additional-info__content {
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .actions {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    .actions__top {
      display: flex;
    }
    .actions__bottom {
      display: flex;
    }
  }
}

</style>