<template>
  <div class="chat-history">
    <app-block-title>История сообщений</app-block-title>
    <div class="chat-history__content">
      <div class="messages">
        <p>сообщение пользователя</p>
        <p>ответ на сообщение пользователя</p>
      </div>

      <div class="new-message">
        <textarea class="message-textarea" placeholder="Сообщение..."></textarea>
        <div class="new-message__attach-and-send">
          <i class="ti-cup attach-btn"></i>
          <i class="ti-rocket attach-btn"></i>
          <i class="ti-gallery attach-btn"></i>
          <i class="ti-video-camera attach-btn"></i>
          <app-button size14px>Отправить</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.chat-history {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .chat-history__content {
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .messages {
      height: 200px;
    }
    .new-message {
      display: flex;
      flex-direction: column;
      .message-textarea {
        padding: 10px;
        width: 100%;
        height: 100px;
        color: $black;
        resize: none;
        outline: none;
        border: 1px solid $inputBorder;
        border-radius: 6px;
      }
      .new-message__attach-and-send {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .attach-btn {
          margin-right: 5px;
          padding: 5px;
          color: $black60;
          font-size: 20px;
          cursor: pointer;
          transition: $tr-02;
        }
        .attach-btn:hover {
          color: $green;
        }
        .attach-btn:nth-child(4) {
          margin-right: auto;
        }
      }
    }
  }
}

</style>
