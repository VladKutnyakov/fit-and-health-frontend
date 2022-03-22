<template>
  <div class="training-diary-calendar">
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

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-diary-calendar {
  margin-left: 40px;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
}

</style>
