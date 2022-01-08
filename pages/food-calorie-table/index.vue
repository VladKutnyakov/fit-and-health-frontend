<template>
  <div class="food-calorie-table">
    <app-page-title>Таблица калорийности продуктов</app-page-title>
    <div class="food-calorie-table__content">
      <page-info />
      <div class="food-calorie-table__filters-and-table">
        <sorting-filters />
        <product-table />
      </div>
    </div>
    <product-form-modal />
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/foodCalorieTable/PageInfo'
import SortingFilters from '@/components/foodCalorieTable/SortingFilters'
import ProductTable from '@/components/foodCalorieTable/ProductTable'
import ProductFormModal from '@/components/foodCalorieTable/ProductFormModal'

export default {
  name: 'FoodCalorieTablePage',
  layout: 'default',
  middleware: ['userAuth'],
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
  async asyncData ({ store }) {
    await store.dispatch('foodCalorieTable/getProductCategories')
    await store.dispatch('foodCalorieTable/getAllProducts')
  },
  components: {
    AppPageTitle,
    PageInfo,
    SortingFilters,
    ProductTable,
    ProductFormModal
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.food-calorie-table {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .food-calorie-table__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .food-calorie-table__filters-and-table {
      display: flex;
    }
  }
}

</style>
