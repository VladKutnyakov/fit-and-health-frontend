<template>
  <div class="meal-planer-calendar">
    <app-block-title>Календарь</app-block-title>
    <app-date-selector :initialDate="calendarInitialDate" :isOpened="true" @select="getMealPlanerInfo($event)" />
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
  computed: {
    calendarInitialDate () {
      return this.$route.query.date
    }
  },
  methods: {
    getMealPlanerInfo (date) {
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: date})
      this.$router.push(`/meal-planer?date=${date}`)
    }
  }
}
</script>
