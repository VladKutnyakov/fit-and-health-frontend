<template>
  <div class="meal-plans-page">
    <app-page-title>Сохраненные рационы</app-page-title>
    <div class="meal-plans-page__content">
      <page-info />
      <div class="filters-and-table">
        <!-- <sorting-filters />
        <product-table /> -->
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/mealPlans/PageInfo'

export default {
  layout: 'default',
  components: {
    AppPageTitle,
    PageInfo
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.meal-plans-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .meal-plans-page__content {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .filters-and-table {
      display: flex;
    }
  }
}

</style>
