<template>
  <app-modal
    :isActive="searchRecipesAndProductsModalActive"
    maxWidth="1200px"
    headerTitle="Добавление продуктов или рецептов в рацион"
    :headerDescriptions="['Найдите и добавьте продукт или рецепт в выбранный прием пищи.']"
    @close="closeModal()"
  >
    <template v-slot:modalContent>
      <div class="search-recipes-and-products">
        <app-search-block
          small
          filters
          placeholder="Поиск продуктов и рецептов"
          @openFilters="openFilters()"
        />

        <div v-if="filtersIsOpened" class="filters">
          <app-info
            small
            info
            text="Нажмите кнопку поиска (лупа), чтобы применить фильтры."
          />

          <div class="filters__groups">
            <div class="group">
              <p class="group__title">Сортировать по...</p>
              <app-input-radio
                small
                class="input-item"
                v-for="(item, index) in sortingByNutrients"
                :key="index"
                v-model="nutrientChecked"
                :label="item"
                :value="item"
              />
            </div>
            <div class="group">
              <p class="group__title">Показать</p>
              <app-input-radio
                small
                class="input-item"
                v-for="(item, index) in filterByUserImportances"
                :key="index"
                v-model="filterByUserImportanceChecked"
                :label="item"
                :value="item"
              />
            </div>
            <div class="group">
              <p class="group__title">Тип</p>
              <app-input-checkbox
                small
                class="input-item"
                v-for="(item, index) in filterByTypes"
                :key="index"
                v-model="filterByTypeChecked"
                :label="item"
                :value="item"
              />
            </div>
          </div>
        </div>

        <div class="founding__results">
          <div class="product__header">
            <p class="header__column-title"><i class="ti-pin-alt"></i></p>
            <p class="header__column-title"><i class="ti-heart"></i></p>
            <p class="header__column-title">Название</p>
            <p class="header__column-title">Масса</p>
            <p class="header__column-title">Белки</p>
            <p class="header__column-title">Жиры</p>
            <p class="header__column-title">Углеводы</p>
            <p class="header__column-title">Ккал</p>
            <p class="header__column-title"><i class="ti-trash"></i></p>
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
          @click.native="closeModal()"
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
import Product from '@/components/mealPlaner/Product'
import AppButton from '@/components/basic/AppButton'

export default {
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
    return {
      filtersIsOpened: false,
      filterByUserImportances: ['Все доступные', 'Добавленные мной', 'Закрепленные', 'Избранные'],
      filterByUserImportanceChecked: 'Все доступные',
      sortingByNutrients: ['Названию', 'Белкам', 'Жирам', 'Углеводам', 'Калорийности'],
      nutrientChecked: 'Названию',
      filterByTypes: ['Продукты', 'Рецепты'],
      filterByTypeChecked: ['Продукты', 'Рецепты']
    }
  },
  computed: {
    ...mapState({
      searchRecipesAndProductsModalActive: state => state.mealPlaner.searchRecipesAndProductsModalActive,
      pinnedProducts: state => state.foodCalorieTable.pinnedProducts,
      notPinnedProducts: state => state.foodCalorieTable.notPinnedProducts
    })
  },
  methods: {
    ...mapMutations({
      closeModal: 'mealPlaner/setSearchRecipesAndProductsModalActive'
    }),
    openFilters () {
      this.filtersIsOpened = !this.filtersIsOpened
    }
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
    // position: relative;
    margin-top: 20px;
    padding: 10px;
    height: 800px;
    // max-height: 400px;
    background: $white;
    border: 1px solid $inputBorder;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0,0,0,.25);
    // overflow: auto;
    .product__header {
      position: sticky;
      top: -20px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $green;
      border: 1px solid transparent;
      border-radius: 6px;
      .header__column-title {
        padding: 5px;
        width: 120px;
        text-transform: uppercase;
        text-align: center;
        font-size: 10px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column-title:nth-child(1) {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
      }
      .header__column-title:nth-child(2) {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
      }
      .header__column-title:nth-child(3) {
        flex: 1 1 auto;
        min-width: 200px;
      }
      .header__column-title:nth-child(9) {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
        border: none;
      }
    }
    .pinned-products {
      margin-bottom: 10px;
      // padding: 0 10px;
      .pinned-products__title {
        font-size: 14px;
        padding: 0 0 10px 10px;
      }
    }
    .not-pinned-products {
      // padding: 0 10px;
      .not-pinned-products__title {
        font-size: 14px;
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
