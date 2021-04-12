<template>
  <div class="week-challenges">
    <app-block-title>Эпический вызов</app-block-title>
    <main-challenge />

    <app-block-title>Легендарный вызов</app-block-title>
    <main-challenge />

    <app-block-title>Классический вызов</app-block-title>
    <main-challenge />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MainChallenge from '@/components/challenges/WeekChallenges/MainChallenge/index'

export default {
  components: {
    AppBlockTitle,
    MainChallenge
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.week-challenges {
  // border: 1px solid red;
  flex: 1 1 auto;
}
</style>
