<template>
  <div class="index-page">
    <div class="index-page__content">
      <div class="links">
        <nuxt-link to="/profile">Профиль</nuxt-link>
        <nuxt-link to="/auth">Войти / Зарегистрировать</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'empty',
  head () {
    return {
      title: 'Fit and Health - О проекте',
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
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.index-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-left: 80px;
  padding: 40px;
  .index-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .links {
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>
