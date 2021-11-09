<template>
  <div class="exercises-guide-page">
    <app-page-title>Справочник по упражнениям</app-page-title>

    <div class="exercises-guide-page__content">
      <page-info />
      <div class="exercises-list-and-overview">
        <exercises-list />
        <exercise-overview v-if="overviewFetched" />
        <exercise-overview-empty v-else />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/exerciseGuide/PageInfo'
import ExercisesList from "@/components/exerciseGuide/ExercisesList/index"
import ExerciseOverview from '@/components/exerciseGuide/ExerciseOverview/index'
import ExerciseOverviewEmpty from '@/components/exerciseGuide/ExerciseOverviewEmpty/index'

export default {
  name: 'ExercisesGuidPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Справочник по упражнениям',
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
    PageInfo,
    ExercisesList,
    ExerciseOverview,
    ExerciseOverviewEmpty
  },
  async asyncData ({ store }) {
    await store.dispatch('exercises/fetchExercisesList')
  },
  computed: {
    overviewFetched () {
      if (this.$store.getters['exercises/getExerciseInfo'].id) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises-guide-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .exercises-guide-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .exercises-list-and-overview {
      display: flex;
    }
  }
}

</style>