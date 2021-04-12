<template>
  <div class="settings">
    <div class="title-description-video">
      <div class="title-and-description">
        <training-title />
        <training-description />
      </div>

      <training-video />
    </div>

    <exercises />
    <stats />
  </div>
</template>

<script>
import TrainingTitle from '@/components/trainingProgramEditor/Editor/TrainingDays/Settings/TrainingTitle'
import TrainingDescription from '@/components/trainingProgramEditor/Editor/TrainingDays/Settings/TrainingDescription'
import TrainingVideo from '@/components/trainingProgramEditor/Editor/TrainingDays/Settings/TrainingVideo'
import Exercises from '@/components/trainingProgramEditor/Editor/TrainingDays/Settings/Exercises/index'
import Stats from '@/components/trainingProgramEditor/Editor/TrainingDays/Settings/Stats'

export default {
  components: {
    TrainingTitle,
    TrainingDescription,
    TrainingVideo,
    Exercises,
    Stats
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.settings {
  // border: 1px solid red;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .title-description-video {
    display: flex;
    .title-and-description {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
