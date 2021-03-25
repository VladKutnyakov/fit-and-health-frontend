<template>
  <div class="media-page">
    <app-page-title>Фото и видео</app-page-title>
    <div class="media-page__content">
      <page-info />
      <app-search-block
        class="search-media-album"
        small
        placeholder="Поиск по названи альбома"
      />
      <filters-and-actions />
      <media-albums />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/media/PageInfo'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FiltersAndActions from '@/components/media/FiltersAndActions'
import MediaAlbums from '@/components/media/MediaAlbums'

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
  middleware: ['userAuth'],
  components: {
    AppPageTitle,
    PageInfo,
    AppSearchBlock,
    FiltersAndActions,
    MediaAlbums
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
  }
}

</style>
