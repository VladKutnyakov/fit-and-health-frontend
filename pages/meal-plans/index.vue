<template>
  <app-page>
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
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .filters-and-table {
    display: flex;
    align-items: flex-start;
  }
}

</style>
