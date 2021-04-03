<template>
  <div class="recipe-page">
    <app-page-title>productTitle</app-page-title>
    <div class="recipe-page__content">
      <recipe-overview />
      <additional-info />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPageTitle from "@/components/basic/AppPageTitle";
import RecipeOverview from '@/components/recipe/RecipeOverview/index'
import AdditionalInfo from '@/components/recipe/AdditionalInfo/index'

export default {
  // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   await store.dispatch('recipe/fetchRecipe', params.recipe)
  // },
  computed: {
    // ...mapState({
    //   productTitle: state => state.recipe.recipe.title
    // }),
  },
  components: {
    AppPageTitle,
    RecipeOverview,
    AdditionalInfo
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.recipe-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .recipe__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
