<template>
  <div class="nutrients-calculations">
    <div class="nutrients-calculations__item">
      <p class="item__title">Белки</p>
      <div class="item__value">
        <p
          class="value__current"
          :class="[nutrientAmountValidationClass(getCurrentProtein, targetMaxProtein)]"
        >{{ getCurrentProtein }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ targetMaxProtein }}</p>
        <p class="value__scale">гр</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Жиры</p>
      <div class="item__value">
        <p
          class="value__current"
          :class="[nutrientAmountValidationClass(getCurrentFats, targetMaxFats)]"
        >{{ getCurrentFats }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ targetMaxFats }}</p>
        <p class="value__scale">гр</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Углеводы</p>
      <div class="item__value">
        <p
          class="value__current"
          :class="[nutrientAmountValidationClass(getCurrentCarb, targetMaxCarb)]"
        >{{ getCurrentCarb }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ targetMaxCarb }}</p>
        <p class="value__scale">гр</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Калорийность</p>
      <div class="item__value">
        <p
          class="value__current"
          :class="[nutrientAmountValidationClass(getCurrentKkal, getDayTargetKkal)]"
        >{{ getCurrentKkal }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ getDayTargetKkal }}</p>
        <p class="value__scale">ккал</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      mealPlanerInfo: state => state.mealPlaner.mealPlanerInfo,
    }),
    ...mapGetters({
      getCurrentProtein: 'mealPlaner/getCurrentProtein',
      getCurrentFats: 'mealPlaner/getCurrentFats',
      getCurrentCarb: 'mealPlaner/getCurrentCarb',
      getCurrentKkal: 'mealPlaner/getCurrentKkal',
      getDayTargetKkal: 'mealPlaner/getDayTargetKkal',
    }),
    targetMaxProtein () {
      return Math.round(parseFloat(this.mealPlanerInfo.fields.targetProtein * this.mealPlanerInfo.fields.targetWeight) * 100) / 100
    },
    targetMaxFats () {
      return Math.round(parseFloat(this.mealPlanerInfo.fields.targetFats * this.mealPlanerInfo.fields.targetWeight) * 100) / 100
    },
    targetMaxCarb () {
      return Math.round(parseFloat(this.mealPlanerInfo.fields.targetCarb * this.mealPlanerInfo.fields.targetWeight) * 100) / 100
    },
  },
  methods: {
    nutrientAmountValidationClass (currentValue, targetValue) {
      const maxPermissibleValue = (currentValue * 15 / 100) + targetValue

      if (currentValue <= targetValue) {
        return 'value__current--success'
      } else if (currentValue > targetValue && currentValue < maxPermissibleValue) {
        return 'value__current--warning'
      }
      return 'value__current--danger'
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.nutrients-calculations {
  display: flex;
  justify-content: space-around;
  margin: 0 10px 10px 10px;
  padding: 10px;
  border: 1px solid $dividerBorder;
  border-radius: 6px;
  .nutrients-calculations__item {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid $dividerBorder;
    .item__title {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
    }
    .item__value {
      display: flex;
      margin-top: 5px;
      .value__current {
        font-weight: 600;
      }
      .value__current--success {
        color: $green;
        font-weight: 600;
      }
      .value__current--warning {
        color: $warning;
        font-weight: 600;
      }
      .value__current--danger {
        color: $red;
        font-weight: 600;
      }
      .value__divider {
        margin: 0 5px;
        color: $gray;
      }
      .value__max {
        margin-top: 1px;
        color: $gray;
        font-size: 14px;
        font-weight: 500;
      }
      .value__scale {
        margin-top: 3px;
        margin-left: 2px;
        color: $gray;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  .nutrients-calculations__item:last-child {
    border-right: none;
  }
}

.dark-theme {
  .nutrients-calculations {
    background: $black15;
    .nutrients-calculations__item {
      border-right: 1px solid $dividerBorderDarkBG;
    }
    .nutrients-calculations__item:last-child {
      border-right: none;
    }
  }
}

</style>
