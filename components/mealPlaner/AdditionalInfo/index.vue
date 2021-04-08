<template>
  <div class="additional-info">
    <app-block-title>Календарь</app-block-title>
    <meal-planer-calendar />
    <useful-pages />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPlanerCalendar from '@/components/mealPlaner/AdditionalInfo/MealPlanerCalendar'
import UsefulPages from '@/components/mealPlaner/AdditionalInfo/UsefulPages'

export default {
  components: {
    AppBlockTitle,
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
