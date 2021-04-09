<template>
  <div class="week-challenges">
    <app-block-title>Вызовы</app-block-title>

    <main-challenge />
    <div class="second-and-third-challenges">
      <challenge />
      <challenge />
      <challenge />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MainChallenge from '@/components/challenges/WeekChallenges/MainChallenge/index'
import Challenge from '@/components/challenges/WeekChallenges/Challenge/index'

export default {
  components: {
    AppBlockTitle,
    MainChallenge,
    Challenge
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.week-challenges {
  // border: 1px solid red;
  flex: 1 1 auto;
  .second-and-third-challenges {
    display: flex;
  }
}
</style>
