<template>
  <app-page>
    <program-overview />
    <additional-info />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import ProgramOverview from '@/components/trainingProgram/ProgramOverview/index'
import AdditionalInfo from '@/components/trainingProgram/AdditionalInfo/index'

export default {
  name: 'TrainingProgram',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - ',
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
    ProgramOverview,
    AdditionalInfo,
  },
  // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   if (query.trainingProgramId) {
  //     await store.dispatch('trainingProgramEditor/fetchTrainingProgram', query.trainingProgramId)
  //   }
  //   await store.dispatch('trainingProgramEditor/fetchSkills')
  //   await store.dispatch('trainingProgramEditor/fetchTrainingTypes')
  // },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-program-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-program-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
