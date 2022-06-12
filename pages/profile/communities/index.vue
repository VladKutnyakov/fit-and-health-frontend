<template>
  <app-page>
    <main-info />
    <history />
    <media />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import MainInfo from '@/components/communities/MainInfo'
import History from '@/components/communities/History/index'
import Media from '@/components/communities/Media'

export default {
  layout: 'default',
  components: {
    AppPage,
    MainInfo,
    History,
    Media,
  }
}
</script>
