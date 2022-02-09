<template>
  <li class="product__item">
    <div class="item__element">
      <i
        v-if="!item.pinned"
        class="ti-pin-alt element__action-btn"
        :class="[{'element__action-btn--active': item.pinned}]"
        @click="changePinnedParam(item.id)"
      ></i>
      <i
        v-if="item.pinned"
        class="ti-pin2 element__action-btn"
        :class="[{'element__action-btn--active': item.pinned}]"
        @click="changePinnedParam(item.id)"
      ></i>
    </div>
    <div class="item__element">
      <i
        v-if="!item.favorite"
        class="ti-heart-broken element__action-btn"
        :class="[{'element__action-btn--active': item.favorite}]"
        @click="changeFavoriteParam(item.id)"
      ></i>
      <i
        v-if="item.favorite"
        class="ti-heart element__action-btn"
        :class="[{'element__action-btn--active': item.favorite}]"
        @click="changeFavoriteParam(item.id)"
      ></i>
    </div>
    <div class="item__element">
      <p class="element__value">{{ item.title }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ item.category }}</p>
    </div>
    <div class="item__element">
      <input
        class="element__weight-input"
        type="text"
        :value="item.approaches"
        @input="changeProductWeight({item, newWeight: $event.target.value})"
        @focus="setFocus($event)"
      >
    </div>
    <div class="item__element">
      <input
        class="element__weight-input"
        type="text"
        :value="item.repeats"
        @input="changeProductWeight({item, newWeight: $event.target.value})"
        @focus="setFocus($event)"
      >
    </div>
    <div class="item__element">
      <input
        class="element__weight-input"
        type="text"
        :value="item.additionalWeight"
        @input="changeProductWeight({item, newWeight: $event.target.value})"
        @focus="setFocus($event)"
      >
    </div>
    <div class="item__element">
      <i class="ti-plus element__action-btn" @click="addFoodToMealPart(item)"></i>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    item: Object
  },
  methods: {
    ...mapMutations({
      changeProductWeight: 'foodCalorieTable/changeProductWeight',
      addFoodToMealPart: 'mealPlaner/addFoodToMealPart'
    }),
    ...mapActions({
      changeFavoriteParam: 'foodCalorieTable/changeFavoriteParam',
      changePinnedParam: 'foodCalorieTable/changePinnedParam'
    }),
    setFocus ($event) {
      $event.target.select()
    },
    editProduct (product) {
      if (product.userId) {
        // Очистить поля и ошибки формы
        this.$store.commit('foodCalorieTable/clearProductForm', 'edit')

        // Установить значение для полей на основе редактируемого продукта
        for (const key in product) {
          this.$store.commit('foodCalorieTable/setProductFormField', {field: key, value: product[key]})
        }

        // Установить режим редактирования для модального окна
        this.$store.commit('foodCalorieTable/setModalCondition', 'edit')
        // Открыть модальное окно
        this.$store.commit('foodCalorieTable/toggleModalVisibility', {modal: 'productModalActive', condition: true})
      }
    },
    removeProduct (product) {
      if (product.userId) {
        this.$store.dispatch('foodCalorieTable/removeProduct', product)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.product__item {
  display: flex;
  margin-bottom: 5px;
  padding: 5px 0px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .item__element {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    width: 120px;
    text-align: center;
    border-right: 1px dashed $inputBorder;
    .element__value {
      // font-size: 14px;
    }
    .element__action-btn {
      padding: 5px;
      color: $black30;
      // font-size: 14px;
      border-radius: 50%;
      transition: $tr-02;
      cursor: pointer;
    }
    .element__action-btn:hover {
      color: $green;
    }
    .element__action-btn--active {
      color: $green;
    }
    .element__action-btn--disabled {
      color: $black30;
    }
    .element__action-btn--disabled:hover {
      color: $black30 !important;
    }
    .element__weight-input {
      flex: 1 1 auto;
      padding: 10px 5px;
      width: 100%;
      outline: none;
      border: 1px solid $inputBorder;
      border-radius: 6px;
      text-align: center;
      color: $green;
      // font-size: 14px;
      font-family: $fontMontserrat;
      font-weight: 500;
      transition: $tr-02;
    }
    .element__weight-input:focus {
      border: 1px solid $green;
    }
    .element__weight-input::selection {
      color: $white;
      background: $green;
    }
    .element__weight-scale {
      margin-top: 5px;
      margin-left: 5px;
      // font-size: 12px;
    }
  }
  .item__element:nth-child(1) {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
  }
  .item__element:nth-child(2) {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
  }
  .item__element:nth-child(3) {
    flex: 1 1 auto;
    min-width: 200px;
  }
  .item__element:nth-child(4) {
    padding: 0 5px;
  }
  // .item__element:nth-child(9) {
  //   width: 50px;
  //   min-width: 50px;
  //   max-width: 50px;
  //   .element__action-btn:hover {
  //     color: $black;
  //   }
  // }
  .item__element:last-child {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    border: none;
    .element__action-btn:hover {
      color: $green;
    }
  }
}

</style>
