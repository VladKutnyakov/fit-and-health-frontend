<template>
  <div class="added-product">
    <div class="item__element">
      <i class="ti-exchange-vertical"></i>
    </div>
    <div class="item__element">
      <p class="element__value">{{ mealPartProduct.product.title }}</p>
    </div>
    <div class="item__element">
      <div class="element__input-wrapper">
        <input
          class="element__weight-input"
          type="text"
          :value="mealPartProduct.weightInMealPart"
          @input="setProductWeight({id: mealPartProduct.product.id, newValue: $event.target.value})"
          @focus="setFocus($event)"
        />
        <span class="element__weight-scale">гр.</span>
      </div>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (mealPartProduct.product.protein / 100 * mealPartProduct.weightInMealPart) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (mealPartProduct.product.fats / 100 * mealPartProduct.weightInMealPart) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (mealPartProduct.product.carb / 100 * mealPartProduct.weightInMealPart) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (mealPartProduct.product.kkal / 100 * mealPartProduct.weightInMealPart) * 100) / 100 }}</p>
    </div>
    <div class="item__element" @click="removeFoodFromMealPart(mealPartProduct.product.id)">
      <i class="ti-trash"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    mealPartProduct: Object
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      setProductWeight: 'mealPlaner/setProductWeight',
      removeFoodFromMealPart: 'mealPlaner/removeFoodFromMealPart'
    }),
    setFocus ($event) {
      $event.target.select()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.added-product {
  display: flex;
  margin-bottom: 5px;
  padding: 10px 0px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .item__element {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 10px;
    width: 100%;
    max-width: 150px;
    text-align: center;
    border-right: 1px solid $inputBorder;
    .element__value {
      font-size: 16px;
    }
    .element__weight-input {
      margin-top: -3px;
      padding: 0;
      width: 60px;
      min-width: 50px;
      max-width: 50px;
      outline: none;
      border: none;
      border-bottom: 1px solid $blockBorder;
      text-align: center;
      color: $green;
      font-family: $fontMontserrat;
      font-weight: 500;
    }
    .element__weight-input::selection {
      color: $white;
      background: $green;
    }
    .element__weight-scale {
      margin-top: 5px;
      font-size: 12px;
    }
  }
  .item__element:nth-child(1) {
    max-width: 50px;
    cursor: pointer;
  }
  .item__element:nth-child(2) {
    min-width: 250px;
    max-width: 100%;
    .element__value {
      text-align: left;
      font-weight: 500;
    }
  }
  .item__element:last-child {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    border: none;
    cursor: pointer;
  }
}

</style>
