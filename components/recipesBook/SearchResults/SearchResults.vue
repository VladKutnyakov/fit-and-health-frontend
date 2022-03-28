<template>
  <div class="search-results">
    <div class="search-recipes">
      <app-block-title>Поиск рецептов</app-block-title>

      <div class="search-recipes__filters">
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
      </div>
    </div>

    <div class="founded-recipes">
      <founded-recipe
        v-for="(item, index) in recipes"
        :key="index"
        :recipe="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import FoundedRecipe from '@/components/recipesBook/SearchResults/FoundedRecipe'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FilterRadioTextGroup,
    FoundedRecipe,
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
      recipes: state => state.recipes.recipes
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
  .search-recipes {
    background: $white;
    box-shadow: $cardShadow;
    border-radius: 6px;
    transition: $tr-02;
    .search-recipes__filters {
      padding: 10px;
      .filter-by {
        display: flex;
        margin-top: 20px;
        margin-bottom: 5px;
        .filter-by__divider {
          margin: 0 20px;
          color: rgba(34,41,47,.1);
          user-select: none;
        }
      }
    }
  }

  .founded-recipes {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}

</style>
