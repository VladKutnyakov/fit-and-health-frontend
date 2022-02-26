<template>
  <app-page pageTitle="Сообщения" :breadcrumbs="breadcrumbs">
    <user-chats />
    <chat-history />
    <additional-info />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import UserChats from '@/components/messages/UserChats'
import ChatHistory from '@/components/messages/ChatHistory'
import AdditionalInfo from '@/components/messages/AdditionalInfo'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  components: {
    AppPage,
    UserChats,
    ChatHistory,
    AdditionalInfo
  },
  // async asyncData ({ store }) {
  //   await store.dispatch('foodCalorieTable/getAllProducts')
  // },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Моя страница',
          icon: 'ti-home',
          link: '/profile',
          active: true,
        },
        {
          title: 'Сообщения',
          icon: 'ti-home',
          link: '/messages',
          active: false,
        },
      ]
    }
  },
}
</script>
