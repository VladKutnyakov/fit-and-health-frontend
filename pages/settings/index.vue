<template>
  <div class="settings-page">
    <app-page-title>Настроки профиля</app-page-title>

    <div class="settings-page__content">
      <sections />
      <section-parameters />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import Sections from '@/components/settings/Sections/index'
import SectionParameters from '@/components/settings/SectionParameters/index'

export default {
  layout: 'default',
  name: 'SettingsPage',
  head () {
    return {
      title: 'Fit and Health - Настроки профиля',
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
    AppPageTitle,
    Sections,
    SectionParameters
  },
  // async asyncData ({ $axios }) {
  //   const login = await $axios.$get('/api/login')
  //   const register = await $axios.$get('/api/register')
  //   console.log(login)
  //   console.log(register)
  // },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.settings-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .settings-page__content {
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
