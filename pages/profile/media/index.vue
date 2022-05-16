<template>
  <app-page pageTitle="Фото и видео" :breadcrumbs="breadcrumbs">
    <div class="content">
      <page-info />
      <app-search-block
        class="search-media-album"
        small
        placeholder="Поиск по названи альбома"
      />
      <filters-and-actions />
      <media-albums />
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import PageInfo from '@/components/media/PageInfo'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FiltersAndActions from '@/components/media/FiltersAndActions'
import MediaAlbums from '@/components/media/MediaAlbums'

export default {
  layout: 'default',
  middleware: ['userAuth'],
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
  components: {
    AppPage,
    PageInfo,
    AppSearchBlock,
    FiltersAndActions,
    MediaAlbums
  },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Профиль',
          icon: 'ti-home',
          link: '/profile',
          active: true,
        },
        {
          title: 'Фото и видео',
          icon: 'ti-media',
          link: '/profile/media',
          active: false,
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.content {
  display: flex;
  flex-direction: column;
}

</style>
