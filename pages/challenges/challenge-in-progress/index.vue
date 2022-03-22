<template>
  <app-page>
    challenge-in-progress
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import UserChats from '@/components/messages/UserChats'
import ChatHistory from '@/components/messages/ChatHistory'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPage,
    UserChats,
    ChatHistory
  }
}
</script>
