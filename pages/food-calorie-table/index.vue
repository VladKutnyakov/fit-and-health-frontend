<template>
  <app-page pageTitle="Таблица калорийности продуктов" :breadcrumbs="breadcrumbs">
    <div class="content">
      <page-info />
      <div class="food-calorie-table__filters-and-table">
        <sorting-filters />
        <product-table />
      </div>
    </div>

    <product-form-modal />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
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
  components: {
    AppPage,
    PageInfo,
    SortingFilters,
    ProductTable,
    ProductFormModal
  },
  async asyncData ({ store }) {
    await store.dispatch('foodCalorieTable/getProductCategories')
    await store.dispatch('foodCalorieTable/getAllProducts')
  },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Моя страница',
          icon: 'ti-home',
          link: '/profile',
          active: true,
        },
        {
          title: 'Таблица калорийности продуктов',
          icon: 'ti-view-list-alt',
          link: '/food-calorie-table',
          active: false,
        },
      ]
    }
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
  .food-calorie-table__filters-and-table {
    display: flex;
  }
}

</style>
