<template>
  <div class="nutrients-calc">
    <div class="nutrients-calc__chart">график содержания БЖУК</div>
    <div class="nutrients-calc__nutrients">
      <div class="nutrient">
        <p class="nutrient__title">Белки:</p>
        <p class="nutrient__amount">{{ protein }}</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__title">Жиры:</p>
        <p class="nutrient__amount">{{ fats }}</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__title">Углеводы:</p>
        <p class="nutrient__amount">{{ carb }}</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__title">Ккал:</p>
        <p class="nutrient__amount">{{ kkal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      recipe: state => state.recipe.recipe
    }),
    protein () {
      let amount = 0
      for (let i = 0; i < this.recipe.products.length; i++) {
        amount += this.recipe.products[i].protein / 100 * this.recipe.products[i].weight
      }
      return Math.round(amount * 100) / 100
    },
    fats () {
      let amount = 0
      for (let i = 0; i < this.recipe.products.length; i++) {
        amount += this.recipe.products[i].fats / 100 * this.recipe.products[i].weight
      }
      return Math.round(amount * 100) / 100
    },
    carb () {
      let amount = 0
      for (let i = 0; i < this.recipe.products.length; i++) {
        amount += this.recipe.products[i].carb / 100 * this.recipe.products[i].weight
      }
      return Math.round(amount * 100) / 100
    },
    kkal () {
      let amount = 0
      for (let i = 0; i < this.recipe.products.length; i++) {
        amount += this.recipe.products[i].kkal / 100 * this.recipe.products[i].weight
      }
      return Math.round(amount * 100) / 100
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.nutrients-calc {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .nutrients-calc__chart {
    flex: 1 1 auto;
    padding: 10px;
    height: 300px;
  }
  .nutrients-calc__nutrients {
    // border: 1px solid red;
    padding: 0 10px;
    .nutrient {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      .nutrient__title {
        font-weight: 500;
      }
      .nutrient__amount {
        color: $green;
        font-weight: 500;
      }
    }
    .nutrient:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
