<template>
  <div class="additional-info">
    <app-block-title>Настрокий рациона</app-block-title>

    <div class="additional-info__content">
      <nutrients-settings />

      <div class="actions">
        <div class="actions__top">
          <app-input-checkbox
            :value="availability"
            label="Доступно для всех пользователей"
            @change="availability = $event"
          />
          <!-- <app-input-checkbox
            class="mt-10"
            :value="false"
            label="Использовать"
            @change="availability = $event"
          /> -->
        </div>

        <div class="actions__bottom">
          <app-button fillArea >Сохранить рацион</app-button>

          <app-button  class="ml-5" >
            <i class="ti-trash"></i>
          </app-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import NutrientsSettings from '@/components/mealPlanEditor/AdditionalInfo/NutrientsSettings'
import AppButton from '@/components/basic/AppButton'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'

export default {
  components: {
    AppBlockTitle,
    NutrientsSettings,
    AppButton,
    AppInputCheckbox
  },
  data () {
    return {
      availability: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

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
      padding: 10px;
      background: $white;
      border: 1px solid $black10;
      border-radius: 6px;
    }
    .actions__bottom {
      display: flex;
      margin-top: 10px;
    }
  }
}

</style>
