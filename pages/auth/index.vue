<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <app-login-form
        v-if="loginForm"
        @changeForm="loginForm = false"
      />
      <app-register-form
        v-if="!loginForm"
        @changeForm="loginForm = true"
      />
    </div>
  </div>
</template>

<script>
import AppLoginForm from '@/components/auth/AppLoginForm'
import AppRegisterForm from '@/components/auth/AppRegisterForm'

export default {
  name: 'AuthPage',
  layout: 'empty',
  head () {
    return {
      title: 'Fit and Health - Авторизация или регистрация',
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
    AppLoginForm,
    AppRegisterForm
  },
  data () {
    return {
      loginForm: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.auth-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .auth-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 100%;
    height: 100vh;
    max-width: 1400px;
  }
}

</style>
