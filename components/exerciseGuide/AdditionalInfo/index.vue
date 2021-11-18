<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info__content">
      <div class="training-focus">
        <p>Акцент упражнения</p>

        <div class="chart-and-percents">
          <div class="chart">
            <p>график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)</p>
          </div>
          <div class="percents">
            <div class="percents__element">
              <p class="element__title">Сила:</p>
              <div class="element__value">60%</div>
            </div>
            <div class="percents__element">
              <p class="element__title">Выносливость:</p>
              <div class="element__value">20%</div>
            </div>
            <div class="percents__element">
              <p class="element__title">Гибкость:</p>
              <div class="element__value">5%</div>
            </div>
            <div class="percents__element">
              <p class="element__title">Кардио:</p>
              <div class="element__value">5%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="actions">
        <!-- <div class="actions__top">
          <app-input-checkbox
            :value="availability"
            label="Добавить в избранное"
            @change="availability = $event"
          />

          <app-input-checkbox
            class="mt-10"
            :value="availability"
            label="Добавить в закрепленные"
            @change="availability = $event"
          />

          <app-input-checkbox
            class="mt-10"
            :value="availability"
            label="Доступно для поиска всем пользователям"
            @change="availability = $event"
          />
        </div> -->

        <div class="actions__bottom">
          <app-button :disabled="true">
            <i class="ti-trash"></i>
          </app-button>

          <app-button class="ml-5" fillArea :disabled="true">Редактировать</app-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    AppInputCheckbox
  },
  data () {
    return {
      availability: false
    }
  },
  methods: {
    testClick() {
      console.log('test click');
    }
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
      padding: 10px;
      background: $white;
      border: 1px solid $black10;
      border-radius: 6px;
    }
    .actions__bottom {
      display: flex;
      // margin-top: 10px;
    }
  }
}

.training-focus {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .chart {
    margin: 150px 0;
  }
  .percents {
    padding: 20px 10px 10px 10px;
    border-top: 1px dashed $blockBorder;
    .percents__element {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .element__title {
        margin-right: auto;
      }
      .element__value {
        color: $green;
        font-weight: 500;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>