<template>
  <div class="subscriptions-page">
    <app-page-title>Интересные страницы</app-page-title>
    <div class="subscriptions-page__content">
      <page-info />
      <div class="filters-and-search">
        <filters />
        <search />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/subscriptions/PageInfo'
import Filters from '@/components/subscriptions/Filters/index'
import Search from '@/components/subscriptions/Search/index'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPageTitle,
    PageInfo,
    Filters,
    Search
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.subscriptions-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .subscriptions-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .filters-and-search {
      display: flex;
    }
  }
}

</style>
