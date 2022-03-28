<template>
  <app-page>
    recipe editor
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'

export default {
  name: 'RecipeEditor',
  layout: 'default',
  middleware: ['userAuth'],
  async asyncData ({ store }) {
    // await store.dispatch('recipes/fetchRecipes')
  },
  components: {
    AppPage
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

</style>
