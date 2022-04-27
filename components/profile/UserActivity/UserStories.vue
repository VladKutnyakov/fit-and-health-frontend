<template>
  <div class="user-stories">
    <app-block-title>Истории</app-block-title>
    <div class="user-stories__story-block">
      <div class="story-block__element">
        <img class="element__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar">
        <i class="ti-plus element__add-icon"></i>
      </div>
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
@import "@/assets/styles/vars.scss";

.user-stories {
  margin-bottom: 30px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
  .user-stories__story-block {
    display: flex;
    padding: 15px 20px;
    .story-block__element {
      position: relative;
      margin-right: 15px;
      // padding: 5px;
      transition: $tr-02;
      cursor: pointer;
      .element__user-avatar {
        width: 100px;
        height: 160px;
        border-radius: 6px;
        object-fit: cover;
        object-position: center;
      }
      .element__add-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $white;
        padding: 5px;
        border-radius: 50%;
        opacity: 0;
        transition: $tr-02;
        font-size: 14px;
      }
    }
    .story-block__element:last-child {
      margin-right: 0;
    }
    .story-block__element:hover {
      box-shadow: $btnHoverShadow;
      .element__add-icon {
        opacity: 1;
      }
    }
  }
}

.dark-theme {
  .user-stories {
    background: $cardBackgroundDarkBG;
  }
}

</style>
