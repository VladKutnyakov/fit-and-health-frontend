<template>
  <app-page>
    <div class="content">
      <page-info />
      <div class="sorting-filters-and-search-results">
        <sorting-filters />
        <search-results />
      </div>

      <!-- <div class="exercises-list-and-overview">
        <exercises-list />
        <exercise-overview v-if="overviewFetched" />
        <exercise-overview-empty v-else />
        <additional-info v-if="overviewFetched" />
      </div> -->
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

// import ExercisesList from "@/components/exerciseGuide/ExercisesList/index"
// import ExerciseOverview from '@/components/exerciseGuide/ExerciseOverview/index'
// import ExerciseOverviewEmpty from '@/components/exerciseGuide/ExerciseOverviewEmpty/index'
// import AdditionalInfo from '@/components/exerciseGuide/AdditionalInfo/index'

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

    // ExercisesList,
    // ExerciseOverview,
    // ExerciseOverviewEmpty,
    // AdditionalInfo,
  },
  async asyncData ({ store }) {
    await store.dispatch('exercises/fetchExercisesList')
  },
  computed: {
    overviewFetched () {
      if (this.$store.state.exercises.exerciseInfo?.id) {
        return true
      }
      return false
    }
  },
  create () {
    this.$store.commit('exercises/setExerciseInfo', {
      id: null,
      title: null,
      type: null,
      sort: null,
      equipment: null,
      exertion: null,
      practiceLevel: null,
      techniqueDescription: null,
      muscleGroup: null,
      additionalMuscles: [],
      user: null
    })
  }
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

  // .exercises-list-and-overview {
  //   display: flex;
  // }
}

</style>