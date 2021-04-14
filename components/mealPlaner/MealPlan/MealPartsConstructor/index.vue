<template>
  <div class="meal-parts-constructor">
    <app-block-title>Редактор рациона</app-block-title>
    <meal-parts />
    <meal-part-editor />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealParts from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealParts/index'
import MealPartEditor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealPartEditor/index'

export default {
  components: {
    AppBlockTitle,
    MealParts,
    MealPartEditor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-parts-constructor {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
}

</style>
