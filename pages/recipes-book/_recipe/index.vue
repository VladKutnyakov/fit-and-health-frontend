<template>
  <app-page>
    <recipe-overview />
    <additional-info />
  </app-page>
</template>

<script>
import { mapState } from 'vuex'
import AppPage from "@/components/basic/AppPage";
import RecipeOverview from '@/components/recipe/RecipeOverview/index'
import AdditionalInfo from '@/components/recipe/AdditionalInfo/index'

export default {
  // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   await store.dispatch('recipe/fetchRecipe', params.recipe)
  // },
  // computed: {
  //   ...mapState({
  //     productTitle: state => state.recipe.recipe.title
  //   }),
  // },
  components: {
    AppPage,
    RecipeOverview,
    AdditionalInfo
  }
}
</script>
