<template>
  <app-page>
    <week-challenges />
    <additional-info />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import WeekChallenges from '@/components/challenges/WeekChallenges/index'
import AdditionalInfo from '@/components/challenges/AdditionalInfo/index'

export default {
  layout: 'default',
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPage,
    WeekChallenges,
    AdditionalInfo,
  }
}
</script>
