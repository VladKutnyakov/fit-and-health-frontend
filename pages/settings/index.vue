<template>
  <app-page pageTitle="Настроки" :breadcrumbs="breadcrumbs">
    <sections />
    <section-parameters />
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
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
    AppPage,
    Sections,
    SectionParameters
  },
  // async asyncData ({ $axios }) {
  //   const login = await $axios.$get('/api/login')
  //   const register = await $axios.$get('/api/register')
  //   console.log(login)
  //   console.log(register)
  // },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Моя страница',
          icon: 'ti-home',
          link: '/profile',
          active: true,
        },
        {
          title: 'Настроки',
          icon: 'ti-settings',
          link: '/settings',
          active: false,
        },
      ]
    }
  },
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
