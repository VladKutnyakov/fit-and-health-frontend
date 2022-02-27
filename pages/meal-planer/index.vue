<template>
  <app-page pageTitle="Дневник питания" :breadcrumbs="breadcrumbs">
    <meal-plan />
    <additional-info />

    <search-recipes-and-products-modal />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import MealPlan from '@/components/mealPlaner/MealPlan/index'
import AdditionalInfo from '@/components/mealPlaner/AdditionalInfo/index'
import SearchRecipesAndProductsModal from '@/components/mealPlaner/SearchRecipesAndProductsModal'

export default {
  name: 'MealPlanerPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Дневник питания',
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
  middleware: ['userAuth'],
  components: {
    AppPage,
    MealPlan,
    AdditionalInfo,
    SearchRecipesAndProductsModal,
  },
  async asyncData ({ store, route }) {
    await store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: route.query.date})
  },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Профиль',
          icon: 'ti-home',
          link: '/profile',
          active: true,
        },
        {
          title: 'Дневник питания',
          icon: 'ti-agenda',
          link: '/meal-planer',
          active: false,
        },
      ]
    }
  },
}
</script>
