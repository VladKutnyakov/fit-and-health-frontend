<template>
  <div class="training-programs-book">
    <page-info/>
    <div class="training-programs-book__filters-and-results">
      <sorting-filters />
      <search-results />
    </div>
  </div>
</template>

<script>
import PageInfo from '@/components/trainingProgramsBook/PageInfo'
import SortingFilters from '@/components/trainingProgramsBook/SortingFilters'
import SearchResults from '@/components/trainingProgramsBook/SearchResults'

export default {
  components: {
    PageInfo,
    SortingFilters,
    SearchResults,
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.training-programs-book {
  // border: 1px solid red;
  flex: 1 1 auto;
  .training-programs-book__filters-and-results {
    display: flex;
    align-items: flex-start;
  }
}

</style>
