<template>
  <div class="meal-planer-page">
    <app-page-title>Дневник питания</app-page-title>
    <div class="meal-planer-page__content">
      <meal-plan />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import MealPlan from '@/components/mealPlaner/MealPlan/index'
import AdditionalInfo from '@/components/mealPlaner/AdditionalInfo/index'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  components: {
    AppPageTitle,
    MealPlan,
    AdditionalInfo
  },
  async asyncData ({ store, route }) {
    await store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: route.query.date})
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.meal-planer-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .meal-planer-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
