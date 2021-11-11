<template>
  <div class="meal-planer-calendar">
    <app-block-title>Календарь</app-block-title>
    <app-date-selector :isOpened="true" @select="getMealPlanerInfo($event)" />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppDateSelector from '@/components/basic/AppDateSelector'

export default {
  components: {
    AppBlockTitle,
    AppDateSelector
  },
  methods: {
    getMealPlanerInfo (date) {
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: date})
      this.$router.push(`/meal-planer?date=${date}`)
    }
  }
}
</script>
