<template>
  <app-page>
    <training-program />
    <training-diary-calendar />
  </app-page>
</template>

<script>
import AppPage from "@/components/basic/AppPage"
import TrainingProgram from "@/components/trainingDiary/TrainingProgram/index"
import TrainingDiaryCalendar from "@/components/trainingDiary/TrainingDiaryCalendar"

export default {
  name: 'TrainingDiaryPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Дневник тренировок',
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
    TrainingProgram,
    TrainingDiaryCalendar
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('trainingDiary/fetchTrainingDiaryInfo', query)
  },
}
</script>
