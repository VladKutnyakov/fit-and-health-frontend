<template>
  <app-page>
    <editor />
    <additional-info />

    <select-exercises-modal />

    <app-confirm-modal
      :value="confirmStartTrainingProcessModalActive"
      icon="ti-help-alt"
      confirmMessage="Тренировочная программа не сохранена. Уверены что хотите начать тренировку?"
      width="400px"
      warning
      @confirm="confirmStartTrainingProcess()"
      @dismiss="toggleModalVisibility({modal: 'confirmStartTrainingProcessModalActive', condition: false})"
    />
  </app-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPage from '@/components/basic/AppPage'
import Editor from '@/components/trainingProgramEditor/Editor/index'
import AdditionalInfo from '@/components/trainingProgramEditor/AdditionalInfo/index'
import SelectExercisesModal from '@/components/trainingProgramEditor/SelectExercisesModal/index'
import AppConfirmModal from '@/components/basic/AppConfirmModal'

export default {
  name: 'TrainingProgramEditor',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Редактор тренировочных программ',
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
    Editor,
    AdditionalInfo,
    SelectExercisesModal,
    AppConfirmModal
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    if (query.trainingProgramId) {
      await store.dispatch('trainingProgramEditor/fetchTrainingProgram', query.trainingProgramId)
    }
    await store.dispatch('trainingProgramEditor/fetchSkills')
    await store.dispatch('trainingProgramEditor/fetchTrainingTypes')
  },
  computed: {
    ...mapState({
      confirmStartTrainingProcessModalActive: state => state.trainingProgramEditor.confirmStartTrainingProcessModalActive,
    })
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    }),
    confirmStartTrainingProcess () {
      console.log('Начать тренировку')
      this.toggleModalVisibility({modal: 'confirmStartTrainingProcessModalActive', condition: false})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-program-editor-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-program-editor-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
