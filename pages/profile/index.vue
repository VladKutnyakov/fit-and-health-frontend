<template>
  <app-page>
    <user-card />
    <user-activity />
    <main-info />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import UserCard from '@/components/profile/UserCard'
import MainInfo from '@/components/profile/MainInfo'
import UserActivity from '@/components/profile/UserActivity/index'

export default {
  name: 'ProfilePage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Профиль',
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
  async asyncData ({ store }) {
    await store.dispatch('profile/fetchProfileInfo')
  },
  components: {
    AppPage,
    UserCard,
    UserActivity,
    MainInfo,
  },
}
</script>
