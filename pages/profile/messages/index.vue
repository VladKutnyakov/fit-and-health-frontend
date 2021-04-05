<template>
  <div class="messages-page">
    <app-page-title>Сообщения</app-page-title>
    <div class="messages-page__content">
      <user-chats />
      <chat-history />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import UserChats from '@/components/messages/UserChats'
import ChatHistory from '@/components/messages/ChatHistory'
import AdditionalInfo from '@/components/messages/AdditionalInfo'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  components: {
    AppPageTitle,
    UserChats,
    ChatHistory,
    AdditionalInfo
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.messages-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .messages-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
