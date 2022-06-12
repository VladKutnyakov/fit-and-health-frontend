<template>
  <div class="media">
    <div class="foto">
      <app-block-title>Фотоальбомы</app-block-title>
      <div class="foto__preview-list">
        <div v-for="(item, index) in 2" :key="index" class="preview-list__item"></div>
      </div>
      <app-button class="ml-10 mr-10 mb-10" size14px >Посмотреть все</app-button>
    </div>

    <div class="video">
      <app-block-title>Видеоальбомы</app-block-title>
      <div class="video__preview-list">
        <div v-for="(item, index) in 4" :key="index" class="preview-list__item"></div>
      </div>
      <app-button class="ml-10 mr-10 mb-10" size14px >Посмотреть все</app-button>
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

.media {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  .foto {
    display: flex;
    flex-direction: column;
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
    .foto__preview-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      padding: 0 10px;
      .preview-list__item {
        margin-bottom: 10px;
        background: $black10;
        width: 100%;
        height: 200px;
        border-radius: 6px;
      }
    }
  }
  .video {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
    .video__preview-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      padding: 0 10px;
      .preview-list__item {
        margin: 0 10px 10px 0;
        background: $black10;
        width: calc(50% - 5px);
        height: 120px;
        border-radius: 6px;
      }
      .preview-list__item:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}

</style>
