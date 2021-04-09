<template>
  <div class="main-challenge">
    <!-- <app-block-title>Легендарный вызов</app-block-title> -->

    <div class="main-challenge__card">
      <preview-image />


      <div class="info">
        <challenge-title />
        <description />
        <stats />
      </div>

      <actions />
    </div>
  </div>
</template>

<script>
// import AppBlockTitle from '@/components/basic/AppBlockTitle'
import PreviewImage from '@/components/challenges/WeekChallenges/MainChallenge/PreviewImage'
import ChallengeTitle from '@/components/challenges/WeekChallenges/MainChallenge/ChallengeTitle'
import Description from '@/components/challenges/WeekChallenges/MainChallenge/Description'
import Stats from '@/components/challenges/WeekChallenges/MainChallenge/Stats'
import Actions from '@/components/challenges/WeekChallenges/MainChallenge/Actions'

export default {
  components: {
    // AppBlockTitle,
    PreviewImage,
    ChallengeTitle,
    Description,
    Stats,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.main-challenge {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .main-challenge__card {
    display: flex;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
