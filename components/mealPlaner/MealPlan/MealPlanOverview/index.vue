<template>
  <div class="meal-plan-overview">
    <div class="meal-plan-overview__content">
      <nutrients-settings />

      <div class="overview">
        <div class="title-description-marks">
          <div class="title-and-description">
            <div class="overview-title">
              <p class="overview-title__text">Название рациона:</p>
              <app-input-text
                class="title__input"
                :value="mealPlanerInfo.fields.title"
                placeholder="Укажите название рациона"
                @input="setMealPlanerInfoFieldValue({ field: 'title', newValue: $event })"
              />
            </div>

            <div class="overview-description">
              <p class="overview-description__text">Описание:</p>
              <app-textarea
                class="fill-area"
                :value="mealPlanerInfo.fields.description"
                placeholder="Укажите описание рациона"
                @input="setMealPlanerInfoFieldValue({ field: 'description', newValue: $event })"
              />
            </div>
          </div>

          <added-marks
            :marks="mealPlanerInfo.fields.marks"
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
import NutrientsSettings from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsSettings'
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'
import AddedMarks from '@/components/mealPlaner/MealPlan/MealPlanOverview/AddedMarks'
import NutrientsCalculations from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsCalculations'

export default {
  components: {
    NutrientsSettings,
    AppInputText,
    AppTextarea,
    AddedMarks,
    NutrientsCalculations,
  },
  computed: {
    ...mapState({
      mealPlanerInfo: state => state.mealPlaner.mealPlanerInfo
    })
  },
  methods: {
    ...mapMutations({
      setMealPlanerInfoFieldValue: 'mealPlaner/setMealPlanerInfoFieldValue'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-plan-overview {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-bottom: 1px solid $dividerBorder;
  .meal-plan-overview__content {
    display: flex;
    .overview {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .title-description-marks {
        flex: 1 1 auto;
        display: flex;
        padding-right: 10px;
        padding-bottom: 10px;
        .title-and-description {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          .overview-title {
            display: flex;
            flex-direction: column;
            padding: 10px;
            .overview-title__text {
              padding: 0 10px 5px 10px;
              font-weight: 500;
            }
          }
          .overview-description {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            .overview-description__text {
              padding: 0 10px 5px 10px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

</style>
