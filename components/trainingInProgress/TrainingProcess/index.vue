<template>
  <div class="training-process">
    <app-block-title>Процесс тренировки</app-block-title>
    <div class="training-process__content">

      <main-stats />

      <app-info class="mt-10 ml-10 mr-10" info text="Комментарий к тренировочному дню в несколько предложений." />

      <div class="video-and-comment">
        <div class="video">video and training comment</div>
        <timer />
        <!-- <comment /> -->
      </div>

      <div class="exercise-and-timer">
        <!-- <timer /> -->
        <exercises />
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppInfo from '@/components/basic/AppInfo'
import MainStats from '@/components/trainingInProgress/TrainingProcess/MainStats'
import Timer from '@/components/trainingInProgress/TrainingProcess/Timer'
import Comment from '@/components/trainingInProgress/TrainingProcess/Comment'
import AudioPlayer from '@/components/trainingInProgress/TrainingProcess/AudioPlayer'
import Exercises from '@/components/trainingInProgress/TrainingProcess/Exercises'

export default {
  components: {
    AppBlockTitle,
    AppInfo,
    MainStats,
    Timer,
    Comment,
    AudioPlayer,
    Exercises
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-process {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .training-process__content {
    display: flex;
    flex-direction: column;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;

    .exercise-and-timer {
      display: flex;
      margin: 10px;
      padding-top: 10px;
      border-top: 1px dashed $blockBorder;
    }

    .video-and-comment {
      display: flex;
      // border-top: 1px dashed $blockBorder;
      margin: 0 10px;
      .video {
        flex: 1 1 auto;
        margin-top: 10px;
        padding: 10px;
        height: 500px;
        background: $hiddenBlockBG;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
  }
}

</style>
