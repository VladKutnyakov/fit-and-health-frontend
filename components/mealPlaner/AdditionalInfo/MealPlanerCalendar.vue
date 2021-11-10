<template>
  <div class="meal-planer-calendar">
    <app-date-selector :isOpened="true" @select="getMealPlanerInfo($event)" />
  </div>
</template>

<script>
import AppDateSelector from '@/components/basic/AppDateSelector'

export default {
  components: {
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
