<template>
  <app-page>
    <editor />
    <div class="additional-info-and-exercises">
      <additional-info />
      <exercises />
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
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
    AppPage,
    Editor,
    AdditionalInfo,
    Exercises
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.additional-info-and-exercises {
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}

</style>
