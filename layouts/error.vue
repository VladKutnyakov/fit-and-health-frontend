<template>
  <div class="layout-error" :class="[{ 'dark-theme': appTheme === 'DARK' }]">
    <h1 v-if="error.statusCode === 404">Page not found --- 404</h1>
    <h1 v-else>An error occurred ---> {{ error.statusCode }}</h1>
    <hr>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: `Fit and Health - ${this.error.statusCode} ошибка`,
      // МИКРОРАЗМЕТКА
      // __dangerouslyDisableSanitizers: ['script'],
      // script: [
      //   {
      //     innerHTML: `{
      //       "@context": "http://schema.org",
      //       "@type": "WebSite",
      //       "url": "https://website.com",
      //       "name": "Website",
      //       "description": "This website is awesome.",
      //       "publisher": {
      //         "@type": "Organization",
      //         "name": "Website",
      //         "alternateName": "SiteWeb",
      //         "logo": {
      //           "@type": "ImageObject",
      //           "url": "https://someimage.com/image"
      //         }
      //       }
      //     }`,
      //     type: 'application/ld+json'
      //   }
      // ]
    }
  },
  layout: 'empty',
  props: ['error'],
  computed: {
    ...mapState({
      appTheme: state => state.appSettings.appTheme,
    })
  },
}
</script>

<style lang="scss">

.layout-error {
  min-height: 100vh;
}

</style>
