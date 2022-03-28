<template>
  <div class="meal-plan">
    <meal-plan-overview />

    <app-tabs
      class="ml-10 mr-10"
      :tabList="tabList"
      canBeAddTabs
      @selectTab="selectMealPart($event)"
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
import { mapState } from 'vuex'
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'
// import MealPartsConstructor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/index'
import AppTabs from '@/components/basic/AppTabs'
import AppButton from '@/components/basic/AppButton'
import TabMealPart from '@/components/mealPlaner/MealPlan/MealParts/TabMealPart'

export default {
  components: {
    MealPlanOverview,
    // MealPartsConstructor,
    AppTabs,
    AppButton
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      mealParts: state => state.mealPlaner.mealPlanerInfo.mealParts,
      selectedMealPart: state => state.mealPlaner.selectedMealPart,
    }),
    tabList () {
      const list = []

      this.mealParts.forEach((element, index) => {
        list.push({
          ...element,
          isActive: index === this.selectedMealPart ? true : false,
          component: TabMealPart,
        })
      })

      return list
    }
  },
  methods: {
    selectMealPart ($event) {
      this.$store.commit('mealPlaner/setSelectedMealPart', $event)
    },
    addMealPart () {
      this.$store.commit('mealPlaner/addNewMealPart')
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
