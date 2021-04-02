<template>
  <div class="user-chats">
    <app-block-title>Меню</app-block-title>
    <div class="actions">
      <i class="ti-pencil" title="Личное сообщения пользователю"></i>
      <i class="ti-id-badge" title="Групповой чат"></i>
      <i class="ti-video-camera" title="Видео чат"></i>
      <i class="ti-video-clapper" title="Групповой видео чат"></i>
    </div>
    <p>Поиск по чатам</p>
    <div>
      созданные чаты
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.user-chats {
  border: 1px solid red;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
}

</style>
