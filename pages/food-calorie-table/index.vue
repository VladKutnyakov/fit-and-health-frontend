<template>
  <app-page>
    <div class="content">
      <page-info />
      <div class="filters-and-table">
        <sorting-filters />
        <search-results />
      </div>
    </div>

    <product-form-modal />

    <app-confirm-modal
      :value="confirmRemoveProductModalActive"
      icon="ti-help-alt"
      confirmMessage="Уверены что хотите удалить продукт?"
      width="400px"
      danger
      @confirm="confirmRemoveExercise()"
      @dismiss="setModalVisibility({ modal: 'confirmRemoveProductModalActive', condition: false })"
    />

  </app-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/foodCalorieTable/PageInfo'
import SortingFilters from '@/components/foodCalorieTable/SortingFilters'
import SearchResults from '@/components/foodCalorieTable/SearchResults/index'
import ProductFormModal from '@/components/foodCalorieTable/modals/ProductFormModal'
import AppConfirmModal from '@/components/basic/AppConfirmModal'

export default {
  name: 'FoodCalorieTablePage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Таблица калорийности продуктов',
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { // МИКРОРАЗМЕТКА
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://website.com",
            "name": "Website",
            "description": "This website is awesome.",
            "publisher": {
              "@type": "Organization",
              "name": "Website",
              "alternateName": "SiteWeb",
              "logo": {
                "@type": "ImageObject",
                "url": "https://someimage.com/image"
              }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  components: {
    AppPage,
    PageInfo,
    SortingFilters,
    SearchResults,
    ProductFormModal,
    AppConfirmModal,
  },
  async asyncData ({ store }) {
    await store.dispatch('foodCalorieTable/fetchPageInfo')
    await store.dispatch('foodCalorieTable/fetchProductsList')
    await store.dispatch('foodCalorieTable/fetchProductCategories').then((response) => {
      // Установить значение фильтров по категориям продуктов (все выбраны)
      store.commit('foodCalorieTable/setSearchFiltersParam', { param: 'categories', newValue: response })
      store.commit('foodCalorieTable/setSearchFiltersParam', { param: 'categoriesList', newValue: response })
    })
  },
  computed: {
    ...mapState({
      searchFilters: state => state.foodCalorieTable.searchFilters,
      productToRemove: state => state.foodCalorieTable.productToRemove,
      confirmRemoveProductModalActive: state => state.foodCalorieTable.confirmRemoveProductModalActive,
    }),
  },
  methods: {
    ...mapMutations({
      setModalVisibility: 'foodCalorieTable/setModalVisibility',
    }),
    confirmRemoveExercise () {
      this.$store.dispatch('foodCalorieTable/removeProduct', this.productToRemove).then(() => {
        this.$store.commit('foodCalorieTable/setModalVisibility', { modal: 'confirmRemoveProductModalActive', condition: false })

        this.$store.dispatch('foodCalorieTable/fetchPageInfo')
        this.fetchProductsList()
      })
    },
    fetchProductsList () {
      const payload = {
        searchString: this.searchFilters.searchString,
        userType: this.searchFilters.userType?.id || null,
        userRelation: this.searchFilters.userRelation?.id || null,

        orderBy: this.searchFilters.orderBy?.id || null,
        categories: [],
      }

      const categoriesIDs = []
      this.searchFilters.categories.forEach(element => {
        categoriesIDs.push(element.id)
      })

      payload.categories = categoriesIDs.join(', ')

      this.$store.commit('foodCalorieTable/setWaiteProductsListUpdate', true)
      this.$store.dispatch('foodCalorieTable/fetchProductsList', payload).finally(() => {
        this.$store.commit('foodCalorieTable/setWaiteProductsListUpdate', false)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.content {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1700px;
  .filters-and-table {
    display: flex;
    align-items: flex-start;
  }
}

</style>
