<template>
  <div class="settings">
    <overview />
    <exercises />
    <stats />
  </div>
</template>

<script>
import Overview from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Overview'
import Exercises from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Exercises/index'
import Stats from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Stats'

export default {
  components: {
    Overview,
    Exercises,
    Stats
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.settings {
  flex: 1 1 auto;
  padding: 10px;
}

</style>