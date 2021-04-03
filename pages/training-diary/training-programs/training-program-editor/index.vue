<template>
  <div class="training-program-editor-page">
    <app-page-title>Редактор тренировочных программ</app-page-title>
    <div class="training-program-editor-page__content">
      <editor />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import Editor from '@/components/trainingProgramEditor/Editor/index'
import AdditionalInfo from '@/components/trainingProgramEditor/AdditionalInfo/index'

export default {
  middleware: ['userAuth'],
  components: {
    AppPageTitle,
    Editor,
    AdditionalInfo
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-program-editor-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-program-editor-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
