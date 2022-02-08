<template>
  <div class="training-program-editor-page">
    <app-page-title>Редактор тренировочных программ</app-page-title>
    <div class="training-program-editor-page__content">
      <editor />
      <additional-info />
    </div>
    <select-exercises-modal />
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import Editor from '@/components/trainingProgramEditor/Editor/index'
import AdditionalInfo from '@/components/trainingProgramEditor/AdditionalInfo/index'
import SelectExercisesModal from '@/components/trainingProgramEditor/SelectExercisesModal/index'

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
    AppPageTitle,
    Editor,
    AdditionalInfo,
    SelectExercisesModal
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    if (query.trainingProgramId) {
      await store.dispatch('trainingProgramEditor/fetchTrainingProgram', query.trainingProgramId)
    }
    await store.dispatch('trainingProgramEditor/fetchSkills')
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
