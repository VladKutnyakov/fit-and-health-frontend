<template>
  <div class="meal-plan-overview">
    <div class="meal-plan-overview__content">
      <div class="preview-image">
        <i class="ti-image"></i>
      </div>

      <div class="overview">
        <div class="title-description-marks">
          <div class="title-and-description">
            <overview-title />
            <overview-description />
          </div>

          <added-marks
            :marks="marks"
            @addMark="setMealPlanMark($event)"
            @removeMark="removeMealPlanMark($event)"
          />
        </div>

        <nutrients-calculations />
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import OverviewTitle from '@/components/mealPlanEditor/MealPlan/MealPlanOverview/OverviewTitle'
import OverviewDescription from '@/components/mealPlanEditor/MealPlan/MealPlanOverview/OverviewDescription'
import AddedMarks from '@/components/mealPlanEditor/MealPlan/MealPlanOverview/AddedMarks'
import NutrientsCalculations from '@/components/mealPlanEditor/MealPlan/MealPlanOverview/NutrientsCalculations'

export default {
  components: {
    OverviewTitle,
    OverviewDescription,
    AddedMarks,
    NutrientsCalculations
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
    .preview-image {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      padding: 10px;
      width: 100%;
      min-width: 350px;
      max-width: 350px;
      height: 500px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      i {
        color: $black20;
        font-size: 100px;
      }
    }
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
