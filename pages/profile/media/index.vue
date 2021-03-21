<template>
  <div class="media-page">
    <app-page-title>Медиа</app-page-title>
    <div class="media-page__content">
      <app-search-block class="search-media-album" small placeholder="Поиск по названи альбома"/>

      <div class="fiters">
        <i class="ti-filter filter__icon"></i>
        <i class="ti-view-list-alt filter__icon"></i>
        <i class="ti-view-grid filter__icon"></i>
      </div>

      <div class="albums">
        <div class="album" v-for="(item, index) in 10" :key="index">
          <img class="album__preview-image" src="https://hardcrossfit.com/wp-content/uploads/2019/06/ffff.png">
          <p class="album__title">Название альбома</p>
          <p class="album__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam corrupti quibusdam nihil optio praesentium, eum culpa veritatis, ipsa sit ducimus.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'

export default {
  name: 'MediaPage',
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
    AppPageTitle,
    AppSearchBlock
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.media-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  padding: 40px;
  .media-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;

    .fiters {
      margin-left: auto;
      .filter__icon {
        margin-right: 5px;
        padding: 5px;
        cursor: pointer;
      }
    }

    .albums {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
      .album {
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        width: calc(100% / 4 - 15px);
        .album__preview-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          object-position: center;
          border-radius: 6px;
        }
        .album__title {
          margin-top: 10px;
          padding: 0 10px;
          font-size: 18px;
          font-weight: 500;
        }
        .album__description {
          margin-top: 10px;
          padding: 0 10px;
        }
      }
      .album:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}

</style>
