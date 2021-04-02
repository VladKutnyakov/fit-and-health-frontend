<template>
  <div class="chat-history">
    <app-block-title>История сообщений</app-block-title>
    <div>
      messages
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

.chat-history {
  border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
}

</style>
