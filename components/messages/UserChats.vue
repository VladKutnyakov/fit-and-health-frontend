<template>
  <div class="user-chats">
    <div class="user-chats__content">
      <div class="actions">
        <div class="actions-buttons">
          <i class="ti-video-camera action-btn" title="Видео чат"></i>
          <i class="ti-video-clapper action-btn" title="Групповой видео чат"></i>
          <i class="ti-id-badge action-btn" title="Групповой чат"></i>
          <i class="ti-pencil action-btn" title="Личное сообщения пользователю"></i>

        </div>

        <app-search-block small/>
      </div>

      <div class="chat-list">
        <div class="chat-ticket" v-for="(item, index) in 4" :key="index">
          <img class="chat-ticket__image" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="">
          <div class="chat-ticket__info">
            <p class="title" title="Совместые тренировки CrossFit">Совместые тренировки CrossFit</p>
            <div class="new-message">
              <p class="new-message__title">Новые сообщения:</p>
              <p class="new-message__count">4</p>
            </div>
          </div>
          <div class="chat-ticket__remove-btn">
            <i class="ti-close remove-btn"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSearchBlock from '@/components/basic/AppSearchBlock'

export default {
  components: {
    AppSearchBlock
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.user-chats {
  // border: 1px solid red;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  .user-chats__content {
    background: $white;
    border-radius: 6px;
    box-shadow: $cardShadow;
    transition: $tr-02;
    overflow: hidden;
    .actions {
      padding: 10px;
      background: $black10;
      .actions-buttons {
        margin-bottom: 10px;
        padding: 0 10px;
        .action-btn {
          margin-right: 5px;
          padding: 5px;
          font-size: 20px;
          transition: $tr-02;
          cursor: pointer;
        }
        .action-btn:hover {
          color: $green;
        }
      }
      
    }

    .chat-list {
      display: flex;
      flex-direction: column;
      padding: 10px;
      .chat-ticket {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid $blockBorder;
        cursor: pointer;
        .chat-ticket__image {
          width: 50px;
          min-width: 50px;
          height: 50px;
          object-fit: cover;
          object-position: center;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .chat-ticket__info {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .title {
            width: 285px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: $tr-02;
          }
          .new-message {
            display: flex;
            margin-top: 2px;
            .new-message__title {
              font-size: 10px;
            }
            .new-message__count {
              margin-left: 5px;
              font-size: 10px;
            }
          }
          .info__new-message-count {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            min-width: 20px;
            max-width: 20px;
            height: 20px;
            background: $green;
            border-radius: 50%;
            .new-message-count {
              color: $white;
              font-size: 12px;
              font-weight: 500;
            }
          }
        }
        .chat-ticket__remove-btn {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-left: 10px;
          .remove-btn {
            // border: 1px solid red;
            padding: 5px;
            font-size: 10px;
            transition: $tr-02;
            cursor: pointer;
          }
          .remove-btn:hover {
            color: $green;
          }
        }
      }
      .chat-ticket:last-child {
        border-bottom: none;
      }
      .chat-ticket:hover {
        .chat-ticket__info {
          .title {
            color: $green;
          }
        }
      }
    }
  }
}

body.dark .user-chats {
  .user-chats__content {
    background: $cardBackgroundDarkBG;
  }
}

</style>
