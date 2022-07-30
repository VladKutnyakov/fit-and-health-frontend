<template>
  <div class="search-results">

    <div class="search-results__search">
      <app-block-title>Поиск</app-block-title>

      <app-search-block
        class="mt-10 mr-10 mb-10 ml-10"
        :filters="false"
        placeholder="Название продукта"
        @searchStringChanged="searchString = $event"
      />

      <div class="search__filters">
        <filter-radio-text-group
          :value="searchFilters.userType"
          :valueList="userTypesList"
          uppercase
          size14px
          @change="
            setSearchFiltersParam({ param: 'productType', newValue: $event }),
            fetchExercisesList()
          "
        />

        <p class="filters__divider">|</p>

        <filter-radio-text-group
          :value="searchFilters.userRelation"
          :valueList="userRelationsList"
          uppercase
          size14px
          @change="
            setSearchFiltersParam({ param: 'userRelation', newValue: $event }),
            fetchExercisesList()
          "
        />
      </div>
    </div>

    <div class="product-table__products-list">
      <div class="products-list__header">
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
        <p class="pinned-products__block-title">Закрепленные продукты</p>

        <ul class="product-list">
          <product
            v-for="(item, index) in pinnedProducts"
            :key="index"
            :item="item"
          />
        </ul>
      </div>

      <div v-if="notPinnedProducts.length > 0" class="not-pinned-products">
        <p class="not-pinned-products__block-title" v-if="pinnedProducts.length > 0">Не закрепленные продукты</p>

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
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import Product from '@/components/foodCalorieTable/SearchResults/Product'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FilterRadioTextGroup,
    Product,
  },
  data () {
    return {
      searchString: '',
      userTypesList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'MY',
          title: 'Мои продукты'
        },
      ],
      userRelationsList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'PINNED',
          title: 'Закрепленные'
        },
        {
          id: 'FAVORITE',
          title: 'Избранные'
        },
      ],
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.foodCalorieTable.searchFilters,
      pinnedProducts: state => state.foodCalorieTable.pinnedProducts,
      notPinnedProducts: state => state.foodCalorieTable.notPinnedProducts
    })
  },
  watch: {
    searchString () {
      this.$store.commit('foodCalorieTable/setSearchString', this.searchString)
      this.$store.commit('foodCalorieTable/sortProducts')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  margin-bottom: 80px;
  .search-results__search {
    display: flex;
    flex-direction: column;
    background: $white;
    box-shadow: $cardShadow;
    border-radius: 6px;
    transition: $tr-02;
    .search__filters {
      display: flex;
      margin: 10px 10px 15px 10px;
      .filters__divider {
        margin: 0 10px;
        color: $black20;
        user-select: none;
      }
    }
  }
  .product-table__products-list {
    position: relative;
    margin-top: 20px;
    .products-list__header {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $primary;
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
      margin: 20px 0;
      .pinned-products__block-title {
        padding: 10px 20px;
      }
    }
    .not-pinned-products {
      .not-pinned-products__block-title {
        padding: 10px 20px;
      }
    }
  }
}

.dark-theme {
  .search-results {
    .search-results__search {
      background: $cardBackgroundDarkBG;
      .search__filters {
        .filters__divider {
          color: $dividerBorderDarkBG;
        }
      }
    }
  }
}

</style>
