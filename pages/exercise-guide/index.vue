<template>
  <app-page>
    <div class="content">
      <page-info />
      <div class="sorting-filters-and-search-results">
        <sorting-filters />
        <search-results />
      </div>
    </div>

    <exercise-form-modal />

  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/exerciseGuide/PageInfo'
import SortingFilters from '@/components/exerciseGuide/SortingFilters'
import SearchResults from '@/components/exerciseGuide/SearchResults'
import ExerciseFormModal from '@/components/exerciseGuide/ExerciseFormModal'

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
    AppPage,
    PageInfo,
    SortingFilters,
    SearchResults,
    ExerciseFormModal,
  },
  async asyncData ({ store }) {
    await store.dispatch('exercises/fetchExercisesList')
    await store.dispatch('exercises/fetchMuscles').then((response) => {
      // Установить значение фильтров по мышечной группе (все выбраны)
      const groupList = []

      for (let i = 0; i < response.data.length; i++) {
        groupList.push(response.data[i])
      }

      
      store.commit('exercises/setSearchFiltersParam', { param: 'muscleGroup', newValue: groupList })
      store.commit('exercises/setSearchFiltersParam', { param: 'muscleGroupList', newValue: groupList })
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
  .sorting-filters-and-search-results {
    display: flex;
    align-items: flex-start;
  }
}

</style>
