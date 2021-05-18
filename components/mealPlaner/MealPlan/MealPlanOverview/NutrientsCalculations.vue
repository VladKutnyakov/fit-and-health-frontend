<template>
  <div class="nutrients-calculations">
    <div class="nutrients-calculations__item">
      <p class="item__title">Белки</p>
      <div class="item__value">
        <p class="value__current">{{ getCurrentProtein }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ Math.round(parseFloat(targetProtein * targetWeight) * 100) / 100 }}</p>
        <p class="value__scale">гр</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Жиры</p>
      <div class="item__value">
        <p class="value__current">{{ getCurrentFats }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ Math.round(parseFloat(targetFats * targetWeight) * 100) / 100 }}</p>
        <p class="value__scale">гр</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Углеводы</p>
      <div class="item__value">
        <p class="value__current">{{ getCurrentCarb }}</p>
        <p class="value__divider">/</p>
        <p class="value__max">{{ Math.round(parseFloat(targetCarb * targetWeight) * 100) / 100 }}</p>
        <p class="value__scale">гр</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Калорийность</p>
      <div class="item__value">
        <p class="value__current">{{ getCurrentKkal }}</p>
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
  data () {
    return {}
  },
  computed: {
    ...mapState({
      targetProtein: state => state.mealPlaner.mealPlanerInfo.targetProtein,
      targetFats: state => state.mealPlaner.mealPlanerInfo.targetFats,
      targetCarb: state => state.mealPlaner.mealPlanerInfo.targetCarb,
      targetWeight: state => state.mealPlaner.mealPlanerInfo.targetWeight
    }),
    ...mapGetters({
      getCurrentProtein: 'mealPlaner/getCurrentProtein',
      getCurrentFats: 'mealPlaner/getCurrentFats',
      getCurrentCarb: 'mealPlaner/getCurrentCarb',
      getCurrentKkal: 'mealPlaner/getCurrentKkal',
      getDayTargetKkal: 'mealPlaner/getDayTargetKkal',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.nutrients-calculations {
  display: flex;
  justify-content: space-around;
  margin: 10px 10px 0 10px;
  padding: 10px;
  border-top: 1px solid $blockBorder;
  .nutrients-calculations__item {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px dashed $blockBorder;
    .item__title {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
    }
    .item__value {
      display: flex;
      margin-top: 5px;
      .value__current {
        color: $green;
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

</style>
