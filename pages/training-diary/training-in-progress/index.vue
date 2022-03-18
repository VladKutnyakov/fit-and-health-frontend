<template>
  <app-page pageTitle="Новая тренировка" :breadcrumbs="breadcrumbs">
    <training-program />
    <training-process />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
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
    AppPage,
    TrainingProgram,
    TrainingProcess
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
          title: 'Дневник тренировок',
          icon: 'ti-timer',
          link: '/training-diary',
          active: true,
        },
        {
          title: 'Новая тренировка',
          icon: 'ti-bolt',
          link: '/training-diary/training-in-progress',
          active: false,
        },
      ]
    }
  },
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
