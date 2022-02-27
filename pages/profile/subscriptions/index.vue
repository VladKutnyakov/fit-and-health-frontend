<template>
  <app-page pageTitle="Интересные страницы" :breadcrumbs="breadcrumbs">
    <div class="content">
      <page-info />
      <div class="filters-and-search">
        <filters />
        <search />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/subscriptions/PageInfo'
import Filters from '@/components/subscriptions/Filters/index'
import Search from '@/components/subscriptions/Search/index'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  components: {
    AppPage,
    PageInfo,
    Filters,
    Search
  },
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
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
          title: 'Интересные страницы',
          icon: 'ti-crown',
          link: '/profile/subscriptions',
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
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
}
.filters-and-search {
  display: flex;
}

</style>
