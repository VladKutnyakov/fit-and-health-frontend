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

    <app-confirm-modal
      :value="confirmRemoveExerciseModalActive"
      icon="ti-help-alt"
      confirmMessage="Уверены что хотите удалить упражнение?"
      width="400px"
      danger
      @confirm="confirmRemoveExercise()"
      @dismiss="setModalVisibility({modal: 'confirmRemoveExerciseModalActive', condition: false})"
    />

  </app-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/exerciseGuide/PageInfo'
import SortingFilters from '@/components/exerciseGuide/SortingFilters'
import SearchResults from '@/components/exerciseGuide/SearchResults'
import ExerciseFormModal from '@/components/exerciseGuide/modals/ExerciseFormModal'
import AppConfirmModal from '@/components/basic/AppConfirmModal'

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
    AppConfirmModal,
  },
  async asyncData ({ store }) {
    await store.dispatch('exercises/fetchPageInfo')
    await store.dispatch('exercises/fetchExercisesList')
    await store.dispatch('exercises/fetchMuscles').then((response) => {
      // Установить значение фильтров по мышечной группе (все выбраны)
      const groupList = []

      for (let i = 0; i < response.length; i++) {
        groupList.push(response[i])
      }

      store.commit('exercises/setSearchFiltersParam', { param: 'muscleGroup', newValue: groupList })
      store.commit('exercises/setSearchFiltersParam', { param: 'muscleGroupList', newValue: groupList })
    })
  },
  computed: {
    ...mapState({
      searchFilters: state => state.exercises.searchFilters,
      exerciseToRemove: state => state.exercises.exerciseToRemove,
      confirmRemoveExerciseModalActive: state => state.exercises.confirmRemoveExerciseModalActive,
    }),
  },
  methods: {
    ...mapMutations({
      setModalVisibility: 'exercises/setModalVisibility',
    }),
    confirmRemoveExercise () {
      if (this.exerciseToRemove?.user) {
        // Снять активность для кнопок
        this.$store.commit('exercises/setWaiteExerciseListUpdate', true)

        // Удалить упражнение
        this.$store.dispatch('exercises/removeExercise', this.exerciseToRemove.id)
          .then(() => {
            // Зачистить данные об упражнение, которое должно быть удалено
            this.$store.commit('exercises/setExerciseToRemove', null)

            // Закрыть модальное окно подтверждения удаления
            this.$store.commit('exercises/setModalVisibility', { modal: 'confirmRemoveExerciseModalActive', condition: false })

            // Обновить общую информацио о разделе для старницы
            this.$store.dispatch('exercises/fetchPageInfo')

            // Обновить список упражнений
            const payload = {
              searchString: this.searchFilters.searchString,
              mediaType: this.searchFilters.mediaType?.id || null,
              trainingPlace: this.searchFilters.trainingPlace?.id || null,
              userType: this.searchFilters.userType?.id || null,

              orderBy: this.searchFilters.orderBy?.id || null,
              muscleGroup: [],
            }

            const muscleGroupIDs = []
            this.searchFilters.muscleGroup.forEach(element => {
              muscleGroupIDs.push(element.id)
            })

            payload.muscleGroup = muscleGroupIDs.join(', ')

            this.$store.dispatch('exercises/fetchExercisesList', payload)
          })
          .finally(() => {
            // Вернуть активность для кнопок
            this.$store.commit('exercises/setWaiteExerciseListUpdate', false)
          })
      }
    },
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
