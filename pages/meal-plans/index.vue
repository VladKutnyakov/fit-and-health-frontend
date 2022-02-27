<template>
  <app-page pageTitle="Сохраненные рационы" :breadcrumbs="breadcrumbs">
    <div class="content">
      <page-info />
      <div class="filters-and-table">
        <sorting-filters />
        <search-results />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/mealPlans/PageInfo'
import SortingFilters from '@/components/mealPlans/SortingFilters'
import SearchResults from '@/components/mealPlans/SearchResults/index'

export default {
  layout: 'default',
  components: {
    AppPage,
    PageInfo,
    SortingFilters,
    SearchResults
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
          title: 'Сохраненные рационы',
          icon: 'ti-write',
          link: '/meal-plans',
          active: false,
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.content {
  display: flex;
  flex-direction: column;
  .filters-and-table {
    display: flex;
  }
}

</style>
