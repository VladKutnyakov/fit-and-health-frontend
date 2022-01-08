<template>
  <div class="meal-plan-editor-page">
    <app-page-title>Редактор рациона</app-page-title>
    <div class="meal-plan-editor-page__content">
      <meal-plan />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
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
  middleware: ['userAuth'],
  components: {
    AppPageTitle,
    MealPlan,
    AdditionalInfo
  },
  // async asyncData ({ store, route }) {
  //   await store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: route.query.date})
  //   await store.dispatch('mealPlaner/fetchProducts')
  // },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.meal-plan-editor-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .meal-plan-editor-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
