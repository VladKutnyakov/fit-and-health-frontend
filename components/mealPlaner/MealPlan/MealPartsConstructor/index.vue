<template>
  <div class="meal-parts-constructor">
    <meal-parts />
    <meal-part-editor />
  </div>
</template>

<script>
import MealParts from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealParts/index'
import MealPartEditor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/MealPartEditor/index'

export default {
  components: {
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
