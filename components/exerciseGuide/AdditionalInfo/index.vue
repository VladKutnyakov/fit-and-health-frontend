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
        <div class="actions__top">
          <app-button >
            <i class="ti-trash"></i>
          </app-button>

          <app-button class="ml-5" >
            <i class="ti-save"></i>
          </app-button>

          <app-button class="ml-5" fillArea >Сделать основной</app-button>
        </div>
        
        <div class="actions__bottom">
          <app-button class="mt-10" fillArea >Начать тренировку</app-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppButton
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
  }
}

.training-focus {
  display: flex;
  flex-direction: column;
  padding: 10px;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;

  .chart {
    // border: 1px solid red;
    margin: 160px 0;
  }
  .percents {
    margin-top: auto;
    padding: 20px 10px 10px 10px;
    border-top: 1px dashed $blockBorder;
    .percents__element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      .element__title {
        // font-size: 18px;
        // font-weight: 500;
      }
      .element__value {
        color: $green;
        // font-size: 18px;
        font-weight: 500;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>