<template>
  <div class="editor">
    <app-block-title>Информация о тренировочной программе</app-block-title>
    <div class="overview-and-training-days">
      <training-overview />
      <training-days />
      <training-day-settings />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import TrainingOverview from '@/components/trainingProgramEditor/Editor/TrainingOverview/index'
import TrainingDays from '@/components/trainingProgramEditor/Editor/TrainingDays'
import TrainingDaySettings from '@/components/trainingProgramEditor/Editor/TrainingDaySettings/index'

export default {
  components: {
    AppBlockTitle,
    TrainingOverview,
    TrainingDays,
    TrainingDaySettings
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.editor {
  // border: 1px solid red;
  flex: 1 1 auto;
  .overview-and-training-days {
    display: flex;
    flex-direction: column;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>