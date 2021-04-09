<template>
  <div class="challenge-editor-page">
    <app-page-title>Конструктор вызывов</app-page-title>
    <div class="challenge-editor-page__content">
      <editor />
      <div class="additional-info-and-exercises">
        <additional-info />
        <exercises />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import Editor from '@/components/challengeEditor/Editor/index'
import AdditionalInfo from '@/components/challengeEditor/AdditionalInfo/index'
import Exercises from '@/components/challengeEditor/Exercises/index'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPageTitle,
    Editor,
    AdditionalInfo,
    Exercises
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.challenge-editor-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .challenge-editor-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;

    .additional-info-and-exercises {
      margin-left: 40px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

</style>
