<template>
  <div class="nutrients-settings">

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
            :value="targetProtein"
            small
            textRight
            selectOnFocus
            @input="setNutrientsSettingsParam({field: 'targetProtein', newValue: $event})"
          />
          <p class="element__scale">гр.</p>
        </div>
        <div class="target__element">
          <p class="element__text">Жиры:</p>
          <app-input-text
            class="element__value"
            :value="targetFats"
            small
            textRight
            selectOnFocus
            @input="setNutrientsSettingsParam({field: 'targetFats', newValue: $event})"
          />
          <p class="element__scale">гр.</p>
        </div>
        <div class="target__element">
          <p class="element__text">Углеводы:</p>
          <app-input-text
            class="element__value"
            :value="targetCarb"
            small
            textRight
            selectOnFocus
            @input="setNutrientsSettingsParam({field: 'targetCarb', newValue: $event})"
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
            :value="currentWeight"
            small
            textRight
            selectOnFocus
            @input="setUserParam({field: 'weight', newValue: $event})"
          />
          <p class="element__scale">кг.</p>
        </div>
        <div class="target__element">
          <p class="element__text">Желаемый вес:</p>
          <app-input-text
            class="element__value"
            :value="targetWeight"
            small
            textRight
            selectOnFocus
            @input="setUserParam({field: 'targetWeight', newValue: $event})"
          />
          <p class="element__scale">кг.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import AppChartCircle from '@/components/basic/AppChartCircle'
import AppTooltip from '@/components/basic/AppTooltip'
import AppInputText from '@/components/basic/AppInputText.vue'

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
      weightIsEdit: false
    }
  },
  computed: {
    ...mapState({
      targetProtein: state => state.mealPlaner.mealPlanerInfo.targetProtein,
      targetFats: state => state.mealPlaner.mealPlanerInfo.targetFats,
      targetCarb: state => state.mealPlaner.mealPlanerInfo.targetCarb,
      currentWeight: state => state.mealPlaner.mealPlanerInfo.user.params[0].weight,
      targetWeight: state => state.mealPlaner.mealPlanerInfo.user.params[0].targetWeight,
    }),
    ...mapGetters({
      getDayTargetKkal: 'mealPlaner/getDayTargetKkal',
    })
  },
  methods: {
    ...mapMutations({
      setNutrientsSettingsParam: 'mealPlaner/setNutrientsSettingsParam',
      setUserParam: 'mealPlaner/setUserParam'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.nutrients-settings {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid $blockBorder;
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
        color: $green;
        font-size: 32px;
        font-weight: 600;
      }
      .calculated-calories__scale {
        margin-top: -5px;
        color: $green;
        font-size: 14px;
      }
    }
  }
  .nutrients-settings__nutrients {
    display: flex;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
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
    border-top: 1px dashed $blockBorder;
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

</style>