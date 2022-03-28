<template>
  <div class="meal-plan">
    <meal-plan-overview />
    <!-- <meal-parts-constructor /> -->

    <app-tabs
      class="ml-10 mr-10"
      :tabList="tabList"
      canBeAddTabs
      @addTab="addMealPart()"
    />

    <!-- <div>
      <app-button>Сохранить рацион</app-button>
      <app-button>Сохранить в книгу рационов</app-button>
      <app-button class="ml-auto" dangerBtn >Очистить данные о рационе</app-button>
    </div> -->
  </div>
</template>

<script>
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'
// import MealPartsConstructor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/index'
import AppTabs from '@/components/basic/AppTabs'
import AppButton from '@/components/basic/AppButton'
import MealPartTab from '@/components/mealPlaner/MealPlan/MealPartTab'

export default {
  components: {
    MealPlanOverview,
    // MealPartsConstructor,
    AppTabs,
    AppButton
  },
  data () {
    return {
      tabList: [
        {
          isActive: true,
          title: 'Tab 1',
          icon: 'ti-more',
          component: MealPartTab,
        }
      ]
    }
  },
  methods: {
    addMealPart () {
      console.log('Добавить прием пищи')
    }
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
