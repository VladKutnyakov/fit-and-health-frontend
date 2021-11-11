<template>
  <div class="additional-info">
    <meal-planer-calendar />
    <useful-pages />
  </div>
</template>

<script>
import MealPlanerCalendar from '@/components/mealPlaner/AdditionalInfo/MealPlanerCalendar'
import UsefulPages from '@/components/mealPlaner/AdditionalInfo/UsefulPages'

export default {
  components: {
    MealPlanerCalendar,
    UsefulPages
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.additional-info {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}

</style>
