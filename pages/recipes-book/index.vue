<template>
  <app-page>
    <div class="content">
      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить рецепт"
        @btnAction="openRecipeEditor()"
      />

      <div class="filters-and-results">
        <sorting-filters />
        <search-results />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import AppPageInfo from '@/components/basic/AppPageInfo'
import SortingFilters from '@/components/recipesBook/SortingFilters'
import SearchResults from '@/components/recipesBook/SearchResults/SearchResults'

export default {
  layout: 'default',
  async asyncData ({ store }) {
    await store.dispatch('recipes/fetchRecipes')
  },
  components: {
    AppPage,
    AppPageInfo,
    SortingFilters,
    SearchResults
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: 'Всего рецептов',
          value: 952
        },
        {
          title: 'Избранное',
          value: 2
        },
        {
          title: 'Мои рецепты',
          value: 14
        }
      ]
    }
  },
  methods: {
    openRecipeEditor () {
      this.$router.push('/recipes-book/recipe-editor')
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
  width: 100%;
  max-width: 1700px;
  .filters-and-results {
    display: flex;
    align-items: flex-start;
  }
}

</style>
