<template>
  <app-page>
    <meal-plan />
    <additional-info />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import MealPlan from '@/components/mealPlanEditor/MealPlan/index'
import AdditionalInfo from '@/components/mealPlanEditor/AdditionalInfo/index'

export default {
  name: 'MealPlanEditorPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Редактор рациона',
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
    MealPlan,
    AdditionalInfo
  },
  // async asyncData ({ store, route }) {
  //   await store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: route.query.date})
  //   await store.dispatch('mealPlaner/fetchProducts')
  // },
}
</script>
