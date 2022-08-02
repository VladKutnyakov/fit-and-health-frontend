<template>
  <app-page>
    <meal-plan />
    <additional-info />

    <select-product-modal
      :active="selectProductModalActive"
      @selectProduct="selectProduct($event)"
      @closeModal="setModalVisibility({ modal: 'selectProductModalActive', condition: false })"
    />
  </app-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPage from '@/components/basic/AppPage'
import MealPlan from '@/components/mealPlaner/MealPlan/index'
import AdditionalInfo from '@/components/mealPlaner/AdditionalInfo/index'
import SelectProductModal from '@/components/common/SelectProductModal/index'

export default {
  name: 'MealPlanerPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Дневник питания',
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
    MealPlan,
    AdditionalInfo,
    SelectProductModal,
  },
  async asyncData ({ store, route }) {
    await store.dispatch('mealPlaner/fetchMealPlanerInfo', { date: route.query.date })
  },
  computed: {
    ...mapState({
      selectProductModalActive: state => state.mealPlaner.selectProductModalActive,
    }),
  },
  methods: {
    ...mapMutations({
      setModalVisibility: 'mealPlaner/setModalVisibility',
    }),
    selectProduct ($event) {
      console.log('selectProduct', $event)
    },
  },
}
</script>
