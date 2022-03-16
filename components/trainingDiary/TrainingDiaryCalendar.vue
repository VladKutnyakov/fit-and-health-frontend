<template>
  <div class="meal-planer-calendar">
    <app-date-selector
      :initialDate="calendarInitialDate"
      :isOpened="true"
      @select="getTrainingDiaryInfo($event)"
    />
  </div>
</template>

<script>
import AppDateSelector from '@/components/basic/AppDateSelector'

export default {
  components: {
    AppDateSelector,
  },
  computed: {
    calendarInitialDate () {
      return this.$route.query.date
    }
  },
  methods: {
    getTrainingDiaryInfo (date) {
      this.$store.dispatch('trainingDiary/fetchTrainingDiaryInfo', {date: date})
      this.$router.push(`/training-diary?date=${date}`)
    }
  }
}
</script>
