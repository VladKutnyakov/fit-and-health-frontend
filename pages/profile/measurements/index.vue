<template>
  <app-page pageTitle="Замеры и статистика" :breadcrumbs="breadcrumbs">
    <div class="content__left-block">
      <tracking-params />
      <user-progress-chart />
      <calculation-parameters />
    </div>
    <div class="content__right-block">
      <user-params-overview />
    </div>
  </app-page>

</template>

<script>
import AppPage from '@/components/basic/AppPage'
import TrackingParams from '@/components/measurements/TrackingParams'
import UserProgressChart from '@/components/measurements/UserProgressChart'
import CalculationParameters from '@/components/measurements/CalculationParameters'
import UserParamsOverview from '@/components/measurements/UserParamsOverview'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  components: {
    AppPage,
    TrackingParams,
    UserProgressChart,
    CalculationParameters,
    UserParamsOverview
  },
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
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
          title: 'Замеры и статистика',
          icon: 'ti-bar-chart',
          link: '//profile/measurements',
          active: false,
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.measurements-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .measurements-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
    .content__left-block {
      flex: 1 1 auto;
    }
  }
}

</style>
