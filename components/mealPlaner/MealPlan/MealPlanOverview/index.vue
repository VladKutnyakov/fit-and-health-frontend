<template>
  <div class="meal-plan-overview">
    <app-block-title>Рацион на сутки</app-block-title>

    <div class="meal-plan-overview__content">
      <nutrients-settings />
      <div class="overview">
        <div class="title-description-marks">
          <div class="title-and-description">
            <overview-title />
            <overview-description />
          </div>

          <add-marks
            :marks="marks"
            @addMark="setMealPlanMark($event)"
            @removeMark="removeMealPlanMark($event)"
          />
        </div>

        <nutrients-calculations />
      </div>

      <actions />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import OverviewTitle from '@/components/mealPlaner/MealPlan/MealPlanOverview/OverviewTitle'
import NutrientsSettings from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsSettings'
import OverviewDescription from '@/components/mealPlaner/MealPlan/MealPlanOverview/OverviewDescription'
import AddMarks from '@/components/mealPlaner/MealPlan/MealPlanOverview/AddMarks'
import NutrientsCalculations from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsCalculations'
import Actions from '@/components/mealPlaner/MealPlan/MealPlanOverview/Actions'

export default {
  components: {
    AppBlockTitle,
    OverviewTitle,
    NutrientsSettings,
    OverviewDescription,
    AddMarks,
    NutrientsCalculations,
    Actions
  },
  computed: {
    ...mapState({
      marks: state => state.mealPlaner.mealPlanerInfo.marks
    })
  },
  methods: {
    ...mapMutations({
      setMealPlanMark: 'mealPlaner/setMealPlanMark',
      removeMealPlanMark: 'mealPlaner/removeMealPlanMark'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-plan-overview {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .meal-plan-overview__content {
    display: flex;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .overview {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .title-description-marks {
        flex: 1 1 auto;
        display: flex;
        .title-and-description {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
        }
      }
      
    }
  }
}

</style>
