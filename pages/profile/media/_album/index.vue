<template>
  <div class="album-page">
    <app-page-title>Название альбома</app-page-title>
    <div class="album-page__content">
      <div class="preview">
        Превью
      </div>
      <div class="filling">
        <div class="filling__album-info">
          <div class="album-info__description">
            description
          </div>
          <img src="https://hardcrossfit.com/wp-content/uploads/2019/06/ffff.png" class="album-info__preview-image">
        </div>

        <div class="filling__album-files-and-folders">
          files and folders
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'

export default {
  name: 'AlbumPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Медиа',
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { // МИКРОРАЗМЕТКА
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://website.com",
            "name": "Website",
            "description": "This website is awesome.",
            "publisher": {
              "@type": "Organization",
              "name": "Website",
              "alternateName": "SiteWeb",
              "logo": {
                "@type": "ImageObject",
                "url": "https://someimage.com/image"
              }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  // middleware: ['userAuth'],
  components: {
    AppPageTitle
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.album-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  padding: 40px;
  .album-page__content {
    // border: 1px solid red;
    display: flex;
    // flex-direction: column;
    width: 100%;
    max-width: 1700px;

    .preview {
      margin-right: 20px;
      padding: 10px;
      width: 60%;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .filling {
      margin-left: 20px;
      padding: 10px;
      width: 40%;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .filling__album-info {
        // border: 1px solid red;
        display: flex;
        // max-width: 100%;
        .album-info__description {
          // border: 1px solid red;
        }
        .album-info__preview-image {
          // border: 1px solid red;
          // max-width: 100%;
        }
      }
      .filling__album-files-and-folders {}
    }
  }
}

</style>
