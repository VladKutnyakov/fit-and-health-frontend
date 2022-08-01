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
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/foodCalorieTable/PageInfo'
import SortingFilters from '@/components/foodCalorieTable/SortingFilters'
import SearchResults from '@/components/foodCalorieTable/SearchResults/index'
import ProductFormModal from '@/components/foodCalorieTable/modals/ProductFormModal'

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
    ProductFormModal
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
