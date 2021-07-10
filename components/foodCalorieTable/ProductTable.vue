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

      <div v-if="pinnedProducts.length > 0" class="pinned-products">
        <app-block-title>Закрепленные продукты</app-block-title>

        <ul class="food-table__product-list">
          <product
            v-for="(item, index) in pinnedProducts"
            :key="index"
            :item="item"
          />
        </ul>
      </div>

      <div v-if="notPinnedProducts.length > 0" class="not-pinned-products">
        <app-block-title>Не закрепленные продукты</app-block-title>

        <ul class="food-table__product-list">
          <product
            v-for="(item, index) in notPinnedProducts"
            :key="index"
            :item="item"
          />
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import Product from '@/components/foodCalorieTable/Product'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    Product,
  },
  data () {
    return {
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
      pinnedProducts: state => state.foodCalorieTable.pinnedProducts,
      notPinnedProducts: state => state.foodCalorieTable.notPinnedProducts
    })
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
    .pinned-products {
      margin-top: 20px;
    }
    .not-pinned-products {
      margin-top: 20px;
    }
  }
}

</style>
