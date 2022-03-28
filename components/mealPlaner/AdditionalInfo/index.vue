<template>
  <div class="additional-info">
    <meal-planer-calendar />
    <meal-planer-actions />
  </div>
</template>

<script>
import MealPlanerCalendar from '@/components/mealPlaner/AdditionalInfo/MealPlanerCalendar'
import MealPlanerActions from '@/components/mealPlaner/AdditionalInfo/MealPlanerActions'

export default {
  components: {
    MealPlanerCalendar,
    MealPlanerActions
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.additional-info {
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}

</style>
