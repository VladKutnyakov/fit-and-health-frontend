<template>
  <div class="meal-plan">
    <meal-plan-overview />
    <meal-parts-constructor />

    <div>
      <app-button>Сохранить рацион</app-button>
      <app-button>Сохранить в книгу рационов</app-button>
      <app-button class="ml-auto" dangerBtn >Очистить данные о рационе</app-button>
    </div>
  </div>
</template>

<script>
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'
import MealPartsConstructor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/index'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    MealPlanOverview,
    MealPartsConstructor,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-plan {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
}

body.dark {
  .meal-plan {
    background: $cardBackgroundDarkBG;
  }
}

</style>
