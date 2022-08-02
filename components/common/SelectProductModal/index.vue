<template>
  <app-modal
    :isActive="active"
    maxWidth="1800px"
    headerTitle="Список продуктов"
    @close="closeModal()"
  >
    <template v-slot:modalContent>
      <div class="search-recipes-and-products">
        <app-search-block
          small
          filters
          placeholder="Поиск продуктов"
          @openFilters="openFilters()"
        />

        <div class="founding__results">
          <div class="products-list__header">
            <p class="header__column-title"><i class="ti-pin-alt"></i></p>
            <p class="header__column-title"><i class="ti-heart"></i></p>
            <p class="header__column-title">Название</p>
            <p class="header__column-title">Масса</p>
            <p class="header__column-title">Белки</p>
            <p class="header__column-title">Жиры</p>
            <p class="header__column-title">Углеводы</p>
            <p class="header__column-title">Ккал</p>
            <p class="header__column-title"><i class="ti-pencil-alt"></i></p>
          </div>

          <div v-if="pinnedProducts.length > 0" class="pinned-products">
            <p class="pinned-products__title">Закрепленные продукты</p>

            <ul class="food-table__product-list">
              <product
                v-for="(item, index) in pinnedProducts"
                :key="index"
                :item="item"
              />
            </ul>
          </div>

          <div v-if="notPinnedProducts.length > 0" class="not-pinned-products">
            <p v-if="pinnedProducts.length > 0" class="not-pinned-products__title">Не закрепленные продукты</p>

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
    <template v-slot:modalFooter>
      <div class="footer__action-btns">
        <app-button
          @click="closeModal()"
        >Закрыть</app-button>
      </div>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppModal from '@/components/basic/AppModal'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppInfo from '@/components/basic/AppInfo'
import AppInputRadio from '@/components/basic/AppInputRadio'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import Product from '@/components/common/SelectProductModal/Product'

export default {
  props: {
    active: Boolean,
  },
  components: {
    AppModal,
    AppSearchBlock,
    AppInfo,
    AppInputRadio,
    AppInputCheckbox,
    AppBlockTitle,
    Product,
    AppButton,
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      pinnedProducts: state => state.foodCalorieTable.pinnedProducts,
      notPinnedProducts: state => state.foodCalorieTable.notPinnedProducts,
      searchRecipesAndProductsModalActive: state => state.mealPlaner.searchRecipesAndProductsModalActive,
    })
  },
  watch: {
    active (newValue) {
      if (newValue) {
        this.$store.dispatch('foodCalorieTable/fetchProductsList')
      }
    },
  },
  methods: {
    openFilters () {
      console.log('openFilters')
    },
    closeModal () {
      this.$emit('closeModal')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.search-recipes-and-products {
  display: flex;
  flex-direction: column;
  .filters {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .filters__groups {
      display: flex;
      margin-top: 10px;
      .group {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .group__title {
          margin-bottom: 10px;
          padding-bottom: 10px;
          font-size: 14px;
          font-weight: 500;
          border-bottom: 1px dashed $blockBorder;
        }
        .input-item {
          margin-bottom: 5px;
        }
      }
      .group:last-child {
        margin-right: 0;
      }
    }
  }
  .founding__results {
    // border: 1px solid red;
    margin-top: 20px;
    padding: 10px;
    min-height: 200px;
    background: $white;
    border: 1px solid $inputBorder;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0,0,0,.25);
    // overflow: auto;
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
      z-index: 10;
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
      // .header__column-title:nth-child(9) {
      //   width: 50px;
      //   min-width: 50px;
      //   max-width: 50px;
      // }
      .header__column-title:nth-child(9) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        border: none;
      }
    }
    .pinned-products {
      margin-bottom: 10px;
      .pinned-products__title {
        padding: 0 0 10px 10px;
      }
    }
    .not-pinned-products {
      .not-pinned-products__title {
        padding: 0 0 10px 10px;
      }
    }
  }
}

.footer__action-btns {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

</style>
