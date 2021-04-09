<template>
  <div class="challenge">
    <!-- <app-block-title>Эпический / классический / базовый</app-block-title> -->

    <div class="challenge__card">
      <div class="card__content">
        <div class="card__info">
          <preview-image />
          <challenge-title />
          <description />
          <stats />
          <actions />
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
// import AppBlockTitle from '@/components/basic/AppBlockTitle'
import ChallengeTitle from '@/components/challenges/WeekChallenges/Challenge/ChallengeTitle'
import PreviewImage from '@/components/challenges/WeekChallenges/Challenge/PreviewImage'
import Description from '@/components/challenges/WeekChallenges/Challenge/Description'
import Stats from '@/components/challenges/WeekChallenges/Challenge/Stats'
import Actions from '@/components/challenges/WeekChallenges/Challenge/Actions'

export default {
  components: {
    // AppBlockTitle,
    ChallengeTitle,
    PreviewImage,
    Description,
    Stats,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.challenge {
  // border: 1px solid red;
  width: 50%;
  .challenge__card {
    display: flex;
    flex-direction: column;
    .card__content {
      display: flex;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .card__info {
        display: flex;
        flex-direction: column;
      }
    }
  }
}

.challenge:first-child {
  margin-right: 20px;
}

.challenge:last-child {
  margin-left: 20px;
}

</style>
