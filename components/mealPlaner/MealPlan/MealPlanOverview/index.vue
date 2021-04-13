<template>
  <div class="meal-plan-overview">
    <app-block-title>Рацион на сутки</app-block-title>

    <div class="meal-plan-overview__content">
      <nutrients-settings />
      <div class="info">
        <overview-title />
        <div class="stats-description-marks">
          <div class="stats-and-description">
            <overview-stats />
            <overview-description />
          </div>

          <add-marks
            class="mt-5"
            :marks="marks"
            @addMark="addMark($event)"
            @removeMark="removeMark($event)"
          />
        </div>
        <nutrients-calculations />
      </div>
      <actions />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import OverviewTitle from '@/components/mealPlaner/MealPlan/MealPlanOverview/OverviewTitle'
import NutrientsSettings from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsSettings'
import OverviewStats from '@/components/mealPlaner/MealPlan/MealPlanOverview/OverviewStats'
import OverviewDescription from '@/components/mealPlaner/MealPlan/MealPlanOverview/OverviewDescription'
import AddMarks from '@/components/mealPlaner/MealPlan/MealPlanOverview/AddMarks'
import NutrientsCalculations from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsCalculations'
import Actions from '@/components/mealPlaner/MealPlan/MealPlanOverview/Actions'

export default {
  components: {
    AppBlockTitle,
    OverviewTitle,
    NutrientsSettings,
    OverviewStats,
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
    addMark ($event) {
      console.log($event)
    },
    removeMark ($event) {
      console.log($event)
    }
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
    .info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      .stats-description-marks {
        flex: 1 1 auto;
        display: flex;
        .stats-and-description {
          flex: 1 1 auto;
        }
      }
    }
    .stats-and-description {
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
