<template>
  <div class="training-in-progress-page">
    <app-page-title>Новая тренировка</app-page-title>

    <div class="training-in-progress-page__content">
      <training-days />
      <training-process />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import TrainingDays from '@/components/trainingInProgress/TrainingDays'
import TrainingProcess from '@/components/trainingInProgress/TrainingProcess/index'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  components: {
    AppPageTitle,
    TrainingDays,
    TrainingProcess
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-in-progress-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-in-progress-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
