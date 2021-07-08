<template>
  <div class="product-table">

    <app-block-title>Продукты</app-block-title>

    <app-search-block
      :filters="false"
      @searchStringChanged="searchString = $event"
    />

    <div class="food-table">
      <div class="food-table__header">
        <p class="header__column-title"><i class="ti-pin-alt"></i></p>
        <p class="header__column-title"><i class="ti-heart"></i></p>
        <p class="header__column-title">Название</p>
        <p class="header__column-title">Масса</p>
        <p class="header__column-title">Белки</p>
        <p class="header__column-title">Жиры</p>
        <p class="header__column-title">Углеводы</p>
        <p class="header__column-title">Ккал</p>
        <p class="header__column-title"><i class="ti-pencil"></i></p>
        <p class="header__column-title"><i class="ti-trash"></i></p>
      </div>
      <ul class="food-table__product-list">
        <li v-for="(item, index) in sortedProducts" :key="index" class="product-list__item">
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
              class="ti-heart element__action-btn"
              :class="[{'element__action-btn--active': item.favorite}]"
              @click="changeFavoriteParam(item.id)"
            ></i>
          </div>
          <div class="item__element">
            <p class="element__value">{{ item.title }}</p>
          </div>
          <div class="item__element">
            <input
              class="element__weight-input"
              type="text"
              :value="item.weight"
              @input="changeProductWeight({index, newWeight: $event.target.value})"
              @focus="setFocus($event)"
            >
          </div>
          <div class="item__element">
            <p class="element__value">{{ Math.round( (item.protein / 100 * item.weight) * 100) / 100 }}</p>
          </div>
          <div class="item__element">
            <p class="element__value">{{ Math.round( (item.fats / 100 * item.weight) * 100) / 100 }}</p>
          </div>
          <div class="item__element">
            <p class="element__value">{{ Math.round( (item.carb / 100 * item.weight) * 100) / 100 }}</p>
          </div>
          <div class="item__element">
            <p class="element__value">{{ Math.round( (item.kkal / 100 * item.weight) * 100) / 100 }}</p>
          </div>
          <div class="item__element">
            <i
              class="ti-pencil element__action-btn"
              @click="editProduct(item)"
            ></i>
          </div>
          <div class="item__element">
            <i
              class="ti-trash element__action-btn"
              @click="removeProduct(item)"
            ></i>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppTooltip from '@/components/basic/AppTooltip'
import AppButtonWithActions from '@/components/basic/AppButtonWithActions'
import CategoryIcon from '@/components/foodCalorieTable/CategoryIcon'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    AppTooltip,
    AppButtonWithActions,
    CategoryIcon
  },
  data () {
    return {
      btnActions: ['Редактировать', 'Удалить'],
      productWeight: 100,
      searchString: ''
    }
  },
  watch: {
    searchString () {
      this.$store.commit('foodCalorieTable/setSearchString', this.searchString)
      this.$store.commit('foodCalorieTable/sortProducts')
    }
  },
  computed: {
    ...mapState({
      sortedProducts: state => state.foodCalorieTable.sortedProducts
    })
  },
  methods: {
    ...mapMutations({
      changeProductWeight: 'foodCalorieTable/changeProductWeight'
    }),
    ...mapActions({
      changeFavoriteParam: 'foodCalorieTable/changeFavoriteParam'
    }),
    setFocus ($event) {
      $event.target.select()
    },
    editProduct (product) {
      for (const key in product) {
        this.$store.commit('foodCalorieTable/setProductFormField', {field: key, value: product[key]})
      }

      this.$store.commit('foodCalorieTable/toggleModalVisibility', {modal: 'productModalActive', condition: true})
    },
    removeProduct (product) {
      this.$store.dispatch('foodCalorieTable/removeProduct', product)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.product-table {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .food-table {
    position: relative;
    margin-top: 20px;
    .food-table__header {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $green;
      border: 1px solid transparent;
      border-radius: 6px;
      .header__column-title {
        padding: 7px;
        width: 120px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column-title:nth-child(1) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      .header__column-title:nth-child(2) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      .header__column-title:nth-child(3) {
        flex: 1 1 auto;
        min-width: 200px;
      }
      .header__column-title:nth-child(9) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      .header__column-title:nth-child(10) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        border: none;
      }
    }
    .food-table__product-list {
      .product-list__item {
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
          padding: 5px;
          width: 120px;
          text-align: center;
          border-right: 1px solid $inputBorder;
          .element__value {
            font-size: 16px;
          }
          .element__action-btn {
            padding: 8px;
            color: $black30;
            border-radius: 50%;
            transition: $tr-02;
            cursor: pointer;
          }
          .element__action-btn:hover {
            color: $green;
          }
          .element__action-btn--active {
            color: $white;
            background: $green;
            cursor: pointer;
          }
          .element__action-btn--active:hover {
            color: $white;
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
            font-size: 12px;
          }
        }
        .item__element:nth-child(1) {
          width: 50px;
          min-width: 50px;
          max-width: 50px;
        }
        .item__element:nth-child(2) {
          width: 50px;
          min-width: 50px;
          max-width: 50px;
        }
        .item__element:nth-child(3) {
          flex: 1 1 auto;
          min-width: 200px;
        }
        .item__element:nth-child(4) {
          padding: 0 5px;
        }
        .item__element:nth-child(9) {
          width: 50px;
          min-width: 50px;
          max-width: 50px;
          .element__action-btn:hover {
            color: $black;
          }
        }
        .item__element:nth-child(10) {
          width: 50px;
          min-width: 50px;
          max-width: 50px;
          border: none;
          .element__action-btn:hover {
            color: $red;
          }
        }
      }
    }
  }
}

</style>
