<template>
  <app-page>
    <div class="content">
      <app-page-info
        :infoElements="pageInfo"
        btnTitle="Добавить вызов"
        @btnAction="AddChallengeBtn()"
      />
      <div class="filters-and-results">
        <search-filters />
        <search-results />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import AppPageInfo from '@/components/basic/AppPageInfo'
import SearchFilters from '@/components/challengesBook/SearchFilters'
import SearchResults from '@/components/challengesBook/SearchResults/index'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPage,
    AppPageInfo,
    SearchFilters,
    SearchResults
  },
  data () {
    return {
      pageInfo: [
        {
          title: 'Всего вызывов',
          value: 28456
        },
        {
          title: 'Принято',
          value: 65
        },
        {
          title: 'Побед',
          value: 52
        },
        {
          title: 'Мои вызовы',
          value: 14
        },
      ]
    }
  },
  methods: {
    AddChallengeBtn () {
      console.log('add challenge')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.content {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  .filters-and-results {
    display: flex;
  }
}

</style>
