<template>
  <div class="sorting-filters">
    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__list">
      <filter-radio-group
        :filterGroupOpened="true"
        headerTitle="Сортировать по ..."
        :valueList="sortingBy"
        defaultValue="Названию"
        @applyFunc="applyFilters()"
        @inputGroupValueChanged="applyFilters($event, 'sortingBy')"
      />

      <filter-radio-group
        :filterGroupOpened="true"
        headerTitle="Продукты"
        :valueList="productType"
        defaultValue="Все продукты"
        @applyFunc="applyFilters()"
        @inputGroupValueChanged="applyFilters($event, 'productType')"
      />

      <filter-checkbox-group
        :filterGroupOpened="true"
        headerTitle="Категории"
        :valueList="productCategories"
        :defaultValue="selectedProductCategories"
        @applyFunc="applyFilters()"
        @inputGroupValueChanged="applyFilters($event, 'productCategory')"
      >
        <template v-slot:btnWrapper>
          <app-button size14px uppercase>Очистить</app-button>
          <app-button size14px uppercase>Выбрать все</app-button>
        </template>
      </filter-checkbox-group>
    </div>

    <app-button class="mr-10 mb-10 ml-10" size14px fillArea >Применить фильтры</app-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    FilterRadioGroup,
    FilterCheckboxGroup,
    AppButton,
  },
  data () {
    return {
      sortingBy: [
        'Названию',
        'Белкам',
        'Жирам',
        'Углеводам',
        'Калорийности'
      ],
      productType: [
        'Все продукты',
        'Мои продукты',
        'Закрепленные',
        'Избранные'
      ]
    }
  },
  computed: {
    ...mapState({
      productCategories: state => state.foodCalorieTable.productCategories,
      selectedProductCategories: state => state.foodCalorieTable.productCategories
    })
  },
  methods: {
    ...mapMutations({
      setSortingByFilter: 'foodCalorieTable/setSortingByFilter',
      setProductTypeFilter: 'foodCalorieTable/setProductTypeFilter',
      setProductCategory: 'foodCalorieTable/setProductCategory',
      sortProducts: 'foodCalorieTable/sortProducts',
    }),
    applyFilters ($event, filterGroup) {
      switch (filterGroup) {
        case 'sortingBy':
          this.setSortingByFilter($event)
          break
        case 'productType':
          this.setProductTypeFilter($event)
          break
        case 'productCategory':
          this.setProductCategory($event)
          break
        default:
          break
      }
      // отфильтровать продукты в store и перерендорить страницу
      this.sortProducts()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.sorting-filters {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  .sorting-filters__list {
    margin: 10px;
  }
}

.dark-theme {
  .sorting-filters {
    background: $cardBackgroundDarkBG;
  }
}

</style>
