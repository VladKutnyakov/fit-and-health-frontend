<template>
  <div class="nutrients-settings">
    <p class="nutrients-settings__block-title">Настройки рациона:</p>

    <div class="nutrients-settings__content">
      <div class="chart">
        <app-chart-circle />
        <div class="chart__calculated-calories">
          <p class="calculated-calories__value">{{ getDayTargetKkal }}</p>
          <p class="calculated-calories__scale">ккал</p>
        </div>
      </div>

      <div class="nutrients-settings__nutrients">
        <div class="nutrients__target">
          <div class="target__element">
            <p class="element__text">Белки:</p>
            <app-input-text
              class="element__value"
              :value="mealPlanerInfo.fields.targetProtein"
              small
              textRight
              selectOnFocus
              @input="setMealPlanerInfoFieldValue({ field: 'targetProtein', newValue: $event })"
            />
            <p class="element__scale">гр.</p>
          </div>
          <div class="target__element">
            <p class="element__text">Жиры:</p>
            <app-input-text
              class="element__value"
              :value="mealPlanerInfo.fields.targetFats"
              small
              textRight
              selectOnFocus
              @input="setMealPlanerInfoFieldValue({ field: 'targetFats', newValue: $event })"
            />
            <p class="element__scale">гр.</p>
          </div>
          <div class="target__element">
            <p class="element__text">Углеводы:</p>
            <app-input-text
              class="element__value"
              :value="mealPlanerInfo.fields.targetCarb"
              small
              textRight
              selectOnFocus
              @input="setMealPlanerInfoFieldValue({ field: 'targetCarb', newValue: $event })"
            />
            <p class="element__scale">гр.</p>
          </div>
        </div>
      </div>

      <div class="nutrients-settings__weight">
        <div class="weight__target">
          <div class="target__element">
            <p class="element__text">Текущий вес:</p>
            <app-input-text
              class="element__value"
              :value="mealPlanerInfo.fields.currentWeight"
              small
              textRight
              selectOnFocus
              @input="setMealPlanerInfoFieldValue({ field: 'currentWeight', newValue: $event })"
            />
            <p class="element__scale">кг.</p>
          </div>
          <div class="target__element">
            <p class="element__text">Желаемый вес:</p>
            <app-input-text
              class="element__value"
              :value="mealPlanerInfo.fields.targetWeight"
              small
              textRight
              selectOnFocus
              @input="setMealPlanerInfoFieldValue({ field: 'targetWeight', newValue: $event })"
            />
            <p class="element__scale">кг.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import AppChartCircle from '@/components/basic/AppChartCircle'
import AppTooltip from '@/components/basic/AppTooltip'
import AppInputText from '@/components/basic/AppInputText'

export default {
  components: {
    AppChartCircle,
    AppInputText,
    AppTooltip
  },
  data () {
    return {
      proteinIsEdit: false,
      fatsIsEdit: false,
      carbIsEdit: false,
      weightIsEdit: false,
    }
  },
  computed: {
    ...mapState({
      mealPlanerInfo: state => state.mealPlaner.mealPlanerInfo,
    }),
    ...mapGetters({
      getDayTargetKkal: 'mealPlaner/getDayTargetKkal',
    })
  },
  methods: {
    ...mapMutations({
      setMealPlanerInfoFieldValue: 'mealPlaner/setMealPlanerInfoFieldValue',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.nutrients-settings {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin: 10px 0 10px 10px;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  .nutrients-settings__block-title {
    padding: 0 10px 5px 10px;
    font-weight: 500;
  }
  .nutrients-settings__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    .chart {
      position: relative;
      flex: 1 1 auto;
      .chart__calculated-calories {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        z-index: 2;
        .calculated-calories__value {
          margin-top: 15px;
          color: $primary;
          font-size: 32px;
          font-weight: 600;
        }
        .calculated-calories__scale {
          margin-top: -5px;
          color: $primary;
          font-size: 14px;
        }
      }
    }
    .nutrients-settings__nutrients {
      display: flex;
      padding-top: 10px;
      // border-top: 1px solid $dividerBorder;
      .nutrients__target {
        flex: 1 1 auto;
        padding: 0 5px;
        .target__element {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          .element__text {
            font-weight: 500;
          }
          .element__value {
            margin-left: auto;
            max-width: 70px;
          }
          .element__scale {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 600;
          }
        }
        .target__element:last-child {
          margin-bottom: 0;
        }
      }
    }
    .nutrients-settings__weight {
      display: flex;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid $dividerBorder;
      .weight__target {
        flex: 1 1 auto;
        padding: 0 5px;
        .target__element {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          .element__text {
            font-weight: 500;
          }
          .element__value {
            margin-left: auto;
            max-width: 70px;
          }
          .element__scale {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 600;
          }
        }
        .target__element:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.dark-theme {
  .nutrients-settings {
    .nutrients-settings__content {
      background: $black15;
      .nutrients-settings__weight {
        border-top: 1px solid $dividerBorderDarkBG;
      }
    }
  }
}

</style>