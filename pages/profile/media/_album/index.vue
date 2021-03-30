<template>
  <div class="album-page">
    <app-page-title>Название альбома</app-page-title>
    <div class="album-page__content">
      <page-info />
      <div class="preview-and-filling">
        <album-content />
        <album-info />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle";
import PageInfo from "@/components/album/PageInfo";
import AlbumContent from '@/components/album/AlbumContent/index'
import AlbumInfo from '@/components/album/AlbumInfo'

export default {
  name: "AlbumPage",
  layout: "default",
  head() {
    return {
      title: "Fit and Health - Альбом",
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          // МИКРОРАЗМЕТКА
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
          type: "application/ld+json",
        },
      ],
    };
  },
  middleware: ['userAuth'],
  components: {
    AppPageTitle,
    PageInfo,
    AlbumContent,
    AlbumInfo
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/vars.scss";

.album-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  padding: 40px;
  .album-page__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .preview-and-filling {
      display: flex;
      align-items: flex-start;
    }
  }
}
</style>
