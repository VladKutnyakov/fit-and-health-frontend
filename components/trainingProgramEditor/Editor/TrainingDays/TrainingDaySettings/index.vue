<template>
  <div class="training-day-settings">
    <div class="settings">
      <div class="title-description-video">
        <div class="title-and-description">
          <training-title />
          <training-description />
          <training-type />
        </div>

        <training-video />
      </div>

      <exercises />
      <stats />
    </div>

    <actions />
  </div>
</template>

<script>
import TrainingTitle from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/TrainingTitle'
import TrainingDescription from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/TrainingDescription'
import TrainingType from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/TrainingType'
import TrainingVideo from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/TrainingVideo'
import Exercises from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Exercises/index'
import Stats from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Stats'
import Actions from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Actions'

export default {
  components: {
    TrainingTitle,
    TrainingDescription,
    TrainingType,
    TrainingVideo,
    Exercises,
    Stats,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-day-settings {
  // border: 1px solid red;
  display: flex;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .settings {
    flex: 1 1 auto;
    padding: 10px;
    .title-description-video {
      display: flex;
      .title-and-description {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
