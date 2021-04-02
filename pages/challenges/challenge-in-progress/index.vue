<template>
  <div class="challenge-in-progress-page">
    <app-page-title>Выполнение вызова</app-page-title>
    <div class="challenge-in-progress-page__content">
      challenge-in-progress
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import UserChats from '@/components/messages/UserChats'
import ChatHistory from '@/components/messages/ChatHistory'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPageTitle,
    UserChats,
    ChatHistory
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.challenge-in-progress-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .challenge-in-progress-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
