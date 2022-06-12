<template>
  <div class="chat-history">
    <div class="chat-history__content">
      <div class="messages">
        <div class="incomming-message">
          <img class="incomming-message__user-image" src="/images/user-avatar.jpg">
          <div class="incomming-message__text-and-info">
            <p class="text">ответ на сообщение пользователя в несколько строк</p>
            <div class="info">12.03.2021 - 10:31</div>
          </div>
        </div>

        <div class="user-message">
          <div class="user-message__text-and-info">
            <p class="text">ответ на сообщение пользователя в несколько строк</p>
            <div class="info">12.03.2021 - 10:31</div>
          </div>
          <img class="user-message__user-image" src="/images/user-avatar.jpg">
        </div>
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
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
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
    border-radius: 6px;
    box-shadow: $cardShadow;
    transition: $tr-02;
    .messages {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      height: 200px;
      .incomming-message {
        // border: 1px solid red;
        align-self: flex-start;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 10px;
        width: calc(100% - 100px);
        .incomming-message__user-image {
          width: 50px;
          min-width: 50px;
          height: 50px;
          object-fit: cover;
          object-position: center;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .incomming-message__text-and-info {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          border-top-left-radius: 0;
          .text {
            text-align: left;
          }
          .info {
            margin-top: 5px;
            text-align: left;
            font-size: 10px;
          }
        }
      }
      .user-message {
        // border: 1px solid red;
        align-self: flex-end;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        margin-bottom: 10px;
        width: calc(100% - 100px);
        .user-message__user-image {
          width: 50px;
          min-width: 50px;
          height: 50px;
          object-fit: cover;
          object-position: center;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .user-message__text-and-info {
          display: flex;
          flex-direction: column;
          margin-right: 10px;
          padding: 10px;
          color: $white;
          background: $primary;
          border-radius: 6px;
          border-top-right-radius: 0;
          .text {
            text-align: right;
          }
          .info {
            margin-top: 5px;
            text-align: right;
            font-size: 10px;
          }
        }
      }
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

.dark-theme {
  .chat-history {
    .chat-history__content {
      background: $cardBackgroundDarkBG;
    }
  }
}

</style>
