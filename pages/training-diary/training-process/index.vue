<template>
  <app-page>
    <training-program />
    <training-process />

    <select-training-program-modal />

    <app-confirm-modal
      :value="confirmCompleteTrainingProgramModalActive"
      icon="ti-help-alt"
      confirmMessage="Уверены что хотите завершить тренировку?"
      warning
      @confirm="confirmCompleteTrainingProgram()"
      @dismiss="toggleModalVisibility({modal: 'confirmCompleteTrainingProgramModalActive', condition: false})"
    />
  </app-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPage from '@/components/basic/AppPage'
import TrainingProgram from '@/components/trainingProcess/TrainingProgram'
import TrainingProcess from '@/components/trainingProcess/TrainingProcess/index'
import SelectTrainingProgramModal from '@/components/trainingProcess/SelectTrainingProgramModal/index'
import AppConfirmModal from '@/components/basic/AppConfirmModal'

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
    SelectTrainingProgramModal,
    AppConfirmModal
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
  computed: {
    ...mapState({
      confirmCompleteTrainingProgramModalActive: state => state.trainingProcess.confirmCompleteTrainingProgramModalActive
    })
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'trainingProcess/toggleModalVisibility',
    }),
    confirmCompleteTrainingProgram () {
      // console.log('Завершить тренировку и перейти к странице дневника тренировок')
      this.$store.commit('trainingProcess/setTrainingProgramFormFieldValue', {field: 'isStarted', newValue: false})

      this.$store.commit('trainingProcess/toggleModalVisibility', {modal: 'confirmCompleteTrainingProgramModalActive', condition: false})

      this.$router.push('/training-diary')
    }
  }
}
</script>
