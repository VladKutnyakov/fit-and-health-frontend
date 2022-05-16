<template>
  <app-page pageTitle="Тренировочные программы" :breadcrumbs="breadcrumbs">
    <div class="content">
      <page-info/>
      <div class="filters-and-results">
        <sorting-filters />
        <search-results />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/trainingPrograms/PageInfo'
import SortingFilters from '@/components/trainingPrograms/SortingFilters'
import SearchResults from '@/components/trainingPrograms/SearchResults/index'

export default {
  name: 'TrainingPrograms',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Тренировочные программы',
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
  },
  async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('trainingPrograms/fetchPageInfo')
    await store.dispatch('trainingPrograms/fetchTrainingProgramsList')
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
          title: 'Тренировочные программы',
          icon: 'ti-clipboard',
          link: '/training-programs',
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
  .filters-and-results {
    display: flex;
    align-items: flex-start;
  }
}

</style>
