<template>
  <div class="new-post">
    <div class="new-post__user-message-wrapper">
      <textarea class="new-post__message" placeholder="Поделитесь своими достижениями или новостями..."></textarea>
    </div>
    <div class="new-post__attach-and-send">
      <i class="ti-cup new-post__attach-btn"></i>
      <i class="ti-rocket new-post__attach-btn"></i>
      <i class="ti-gallery new-post__attach-btn"></i>
      <i class="ti-video-camera new-post__attach-btn"></i>
      <app-button size14px>Отправить</app-button>
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
@import "@/assets/styles/vars.scss";

.new-post {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 20px 10px 20px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  .new-post__user-message-wrapper {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    .new-post__message {
      padding: 10px;
      width: 100%;
      height: 41px;
      color: $black;
      resize: none;
      outline: none;
      border: 1px solid $inputBorder;
      border-radius: 6px;
    }
  }
  .new-post__attach-and-send {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin: 10px 10px 0 10px;
    .new-post__attach-btn {
      margin-right: 20px;
      color: $gray;
      font-size: 20px;
      cursor: pointer;
      transition: $tr-02;
    }
    .new-post__attach-btn:hover {
      color: $black;
    }
    .new-post__attach-btn:nth-child(4) {
      margin-right: auto;
    }
  }
}

body.dark .new-post {
  background: $cardBackgroundDarkBG;
  .new-post__user-message-wrapper {
    .new-post__message {
      background: $black20;
      color: $textLight;
    }
  }
}

</style>
