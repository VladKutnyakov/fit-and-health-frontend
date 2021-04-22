<template>
  <div
    class="search-recipes-and-products"
    :class="[{ 'search-recipes-and-products--active': active }]"
  >
    <app-search-block placeholder="Поиск продуктов и рецептов" small />
    <div class="filters">
      <div class="filter__checbox">
        <app-input-checkbox
          small
          class="input-item"
          v-for="(item, index) in filterByType"
          :key="index"
          v-model="filterByTypeChecked"
          :label="item"
          :value="item"
        />
      </div>
      <div class="filter__radio">
        <app-input-radio
          small
          class="input-item"
          v-for="(item, index) in filterByMarks"
          :key="index"
          v-model="filterByMarksChecked"
          :label="item"
          :value="item"
        />
      </div>
    </div>

    <div class="founding__results">
      <found-product-or-recipe v-for="(item,index) in 5" :key="index" />
    </div>
  </div>
</template>

<script>
import AppInputRadio from '@/components/basic/AppInputRadio'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FoundProductOrRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealPartEditor/FoundProductOrRecipe'

export default {
  props: {
    active: Boolean
  },
  components: {
    AppInputRadio,
    AppInputCheckbox,
    AppSearchBlock,
    FoundProductOrRecipe,
  },
  data() {
    return {
      filterByMarks: ['Все совпадения', 'Добавленные мной', 'Избранное'],
      filterByMarksChecked: 'Все совпадения',
      filterByType: ['Продукты', 'Рецепты'],
      filterByTypeChecked: ['Продукты', 'Рецепты'],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.search-recipes-and-products {
  position: absolute;
  top: calc(-100%);
  left: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-04;
  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    .filter__radio {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .input-item {
        margin-right: 20px;
      }
      .input-item:last-child {
        margin-right: 0;
      }
    }
    .filter__checbox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .input-item {
        margin-right: 20px;
      }
      .input-item:last-child {
        margin-right: 0;
      }
    }
  }
  .founding__results {
    flex: 1 1 auto;
    padding: 10px;
    background: $white;
    border-radius: 6px;
    // border: 1px solid $blockBorder;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0 0 0 / 25%);
  }
}
.search-recipes-and-products--active {
  top: 10px;
}

</style>
