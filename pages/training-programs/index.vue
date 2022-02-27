<template>
  <app-page pageTitle="Тренировочные программы" :breadcrumbs="breadcrumbs">
    <training-programs-book />
  </app-page>
</template>

<script>
import AppPage from "@/components/basic/AppPage"
import TrainingProgramsBook from "@/components/trainingProgramsBook/index"

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
  middleware: ['userAuth'],
  components: {
    AppPage,
    TrainingProgramsBook,
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('trainingPrograms/fetchTrainingProgramsList')
  },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Моя страница',
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

.training-programs-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-programs-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
