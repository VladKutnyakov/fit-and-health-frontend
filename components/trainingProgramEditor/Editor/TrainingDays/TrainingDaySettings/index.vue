<template>
  <div class="training-day__settings">
    <settings />
    <actions />
  </div>
</template>

<script>
import Settings from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/index'
import Actions from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Actions'

export default {
  components: {
    Settings,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-day__settings {
  // border: 1px solid red;
  display: flex;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
}
</style>
