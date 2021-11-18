<template>
  <div class="meal-planer-calendar">
    <app-block-title>Календарь тренировок</app-block-title>
    <app-date-selector :initialDate="calendarInitialDate" :isOpened="true" @select="getTrainingDiaryInfo($event)" />
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
    getTrainingDiaryInfo (date) {
      console.log(`fetch training-diary info (date -> ${date})`)
      // this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', {date: date})
      this.$router.push(`/training-diary?date=${date}`)
    }
  }
}
</script>
