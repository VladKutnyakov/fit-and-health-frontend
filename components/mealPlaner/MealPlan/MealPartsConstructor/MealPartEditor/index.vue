<template>
  <div class="meal-part-editor">
    <div class="settings-and-food">
      <div class="settings">
        <div class="settings__element">
          <p class="element__title">Время приема пищи:</p>
          <app-input-text :value="mealParts[selectedMealPart].mealTime" />
        </div>
        <div class="settings__element">
          <p class="element__title">Название приема пищи:</p>
          <app-input-text :value="mealParts[selectedMealPart].title" />
        </div>
      </div>

      <div class="products-and-recipes">
        <p class="products-and-recipes__block-title">Добавленные продкты и рецепты</p>
        <div class="products-and-recipes__content">
          <added-product />
          <added-recipe />
          <added-product />
          <added-product />
          <added-product />

          <search-recipes-and-products :active="searchRecipesAndProductsModalActive" />
        </div>
      </div>
    </div>

    <actions />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'
import AddedProduct from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedProduct'
import AddedRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedRecipe'
import Actions from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealPartEditor/Actions'
import SearchRecipesAndProducts from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealPartEditor/SearchRecipesAndProducts'

export default {
  components: {
    AppInputText,
    AddedProduct,
    AddedRecipe,
    SearchRecipesAndProducts,
    Actions
  },
  data() {
    return {
      selectedMealPart: 0,
      filterByMarks: ['Все совпадения', 'Добавленные мной', 'Избранное'],
      filterByMarksChecked: 'Все совпадения',
      filterByType: ['Продукты', 'Рецепты'],
      filterByTypeChecked: ['Продукты', 'Рецепты'],
    }
  },
  computed: {
    ...mapState({
      mealParts: state => state.mealPlaner.mealPlanerInfo.mealParts,
      searchRecipesAndProductsModalActive: state => state.mealPlaner.searchRecipesAndProductsModalActive
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-part-editor {
  flex: 1 1 auto;
  display: flex;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .settings-and-food {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin: 10px;
    .settings {
      display: flex;
      .settings__element {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        .element__title {
          font-weight: 500;
          padding: 5px 10px 5px 10px;
        }
      }
      .settings__element:first-child {
        max-width: 300px;
      }
      .settings__element:last-child {
        margin-right: 0;
      }
    }
    .products-and-recipes {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .products-and-recipes__block-title {
        font-weight: 500;
        padding: 10px;
      }
      .products-and-recipes__content {
        position: relative;
        padding: 10px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        overflow: hidden;
      }
    }
  }
}

</style>
