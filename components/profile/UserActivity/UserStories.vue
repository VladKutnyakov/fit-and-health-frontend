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
  .user-stories__story-block {
    display: flex;
    .story-block__element {
      position: relative;
      padding: 5px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      transition: $tr-02;
      cursor: pointer;
      .element__user-avatar {
        width: 60px;
        height: 60px;
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
    .story-block__element:hover {
      box-shadow: $btnHoverShadow;
      .element__add-icon {
        opacity: 1;
      }
    }
  }
}

</style>