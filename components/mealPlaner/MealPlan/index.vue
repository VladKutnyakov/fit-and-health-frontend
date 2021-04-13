<template>
  <div class="meal-plan">
    <meal-plan-overview />
    <meal-parts-constructor />
  </div>
</template>

<script>
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'
import MealPartsConstructor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/index'

export default {
  components: {
    MealPlanOverview,
    MealPartsConstructor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-plan {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

</style>
