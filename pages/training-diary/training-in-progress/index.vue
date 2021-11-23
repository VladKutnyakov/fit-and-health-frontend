<template>
  <div class="training-in-progress-page">
    <app-page-title>Новая тренировка</app-page-title>

    <div class="training-in-progress-page__content">
      <training-program />
      <training-process />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import TrainingProgram from '@/components/trainingInProgress/TrainingProgram'
import TrainingProcess from '@/components/trainingInProgress/TrainingProcess/index'

export default {
  name: 'TrainingInProgressPage',
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
    AppPageTitle,
    TrainingProgram,
    TrainingProcess
  },
  // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   await store.dispatch('trainingDiary/fetchTrainingDiaryInfo', query)
  // }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-in-progress-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-in-progress-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
