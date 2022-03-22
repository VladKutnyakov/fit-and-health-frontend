<template>
  <div class="meal-planer-calendar">
    <app-date-selector :initialDate="calendarInitialDate" :isOpened="true" @select="getMealPlanerInfo($event)" />
  </div>
</template>

<script>
import AppDateSelector from '@/components/basic/AppDateSelector'

export default {
  components: {
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

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.meal-planer-calendar {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}

</style>
