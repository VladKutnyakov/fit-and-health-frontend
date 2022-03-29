<template>
  <app-page>
    <training-program />
    <training-process />

    <select-training-program-modal />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import TrainingProgram from '@/components/trainingProcess/TrainingProgram'
import TrainingProcess from '@/components/trainingProcess/TrainingProcess/index'
import SelectTrainingProgramModal from '@/components/trainingProcess/SelectTrainingProgramModal/index'

export default {
  name: 'TrainingProcessPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Новая тренировка',
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
    TrainingProgram,
    TrainingProcess,
    SelectTrainingProgramModal
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    if (query.trainingProgram) {
      const payload = {
        trainingProgram: query.trainingProgram,
        trainingDay: query.trainingDay,
      }

      await store.dispatch('trainingProcess/fetchTrainingProgram', payload)
    }
    if (query.trainingDay) {
      await store.dispatch('trainingProcess/fetchTrainingDay', { trainingDay: query.trainingDay })
    }
  },
}
</script>
