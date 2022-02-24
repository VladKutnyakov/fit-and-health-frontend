<template>
  <div class="profile-page" :class="[{ 'profile-page--hidden-menu': !menuIsOpen }]">
    <app-page-title>Профиль</app-page-title>
    <div class="profile-page__content">
      <user-card />
      <user-activity />
      <main-info />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPageTitle from '@/components/basic/AppPageTitle'
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
  middleware: ['userAuth'],
  async asyncData ({ store }) {
    await store.dispatch('profile/fetchProfileInfo')
  },
  components: {
    AppPageTitle,
    UserCard,
    UserActivity,
    MainInfo
  },
  computed: {
    ...mapState({
      menuIsOpen: state => state.settings.menuIsOpen,
    })
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.profile-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 260px;
  padding: 40px;
  transition: $tr-02;
  .profile-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
    // .user-card-and-publication {
    //   width: 400px;
    //   min-width: 400px;
    //   max-width: 400px;
    // }
    // .main-info-and-publication {
    //   width: 400px;
    //   min-width: 400px;
    //   max-width: 400px;
    // }
  }
}

.profile-page--hidden-menu {
  margin-left: 0;
}

</style>
