<template>
  <div class="training-day__settings">
    <settings />
  </div>
</template>

<script>
import Settings from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/index'

export default {
  components: {
    Settings,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-day__settings {
  // border: 1px solid red;
  display: flex;
}

</style>
