<template>
  <div class="search-results">

    <app-block-title>Поиск рецептов</app-block-title>

    <app-search-block />

    <div class="filter-by">
      <filter-radio-text-group
        :valueList="['Все', 'Фото', 'Видео']"
        :defaultValue="filters.media"
        uppercase
        size14px
        @inputGroupValueChanged="filters.media = $event"
      />
      <p class="filter-by__divider">|</p>
      <filter-radio-text-group
        :valueList="['Все', 'Еда', 'Напитки']"
        :defaultValue="filters.foodOrDrink"
        uppercase
        size14px
        @inputGroupValueChanged="filters.foodOrDrink = $event"
      />
      <p class="filter-by__divider">|</p>
      <filter-radio-text-group
        :valueList="['Все', 'Мои рецепты']"
        :defaultValue="filters.type"
        uppercase
        size14px
        @inputGroupValueChanged="filters.type = $event"
      />
    </div>

    <div class="found-recipes">
      <found-recipe
        v-for="(item, index) in recipes"
        :key="index"
        :recipe="item"
      />
    </div>

    <app-button sizeSM uppercase center>Загрузить еще</app-button>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import FoundRecipe from '@/components/recipesBook/SearchResults/FoundRecipe'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FilterRadioTextGroup,
    FoundRecipe,
    AppButton
  },
  data () {
    return {
      filters: {
        media: 'Все',
        foodOrDrink: 'Все',
        type: 'Все'
      }
    }
  },
  computed: {
    ...mapState({
      recipes: state => state.recipesBook.recipes
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .filter-by {
    // border: 1px solid red;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    .filter-by__divider {
      // border: 1px solid red;
      margin: 0 20px;
      color: rgba(0,0,0,.2);
      user-select: none;
    }
  }
  .found-recipes {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
  }
}

</style>
