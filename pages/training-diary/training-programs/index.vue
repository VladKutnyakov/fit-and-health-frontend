<template>
  <div class="training-programs-page">
    <app-page-title>Тренировочные программы</app-page-title>
    <div class="training-programs-page__content">
      <training-programs-book />
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"
import TrainingProgramsBook from "@/components/trainingProgramsBook/index"

export default {
  components: {
    TrainingProgramsBook,
    AppPageTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-programs-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-programs-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
