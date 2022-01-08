<template>
  <div class="training-diary-page">
    <app-page-title>Дневник тренировок</app-page-title>

    <div class="training-diary-page__content">
      <div class="center">
        <training-program />
      </div>

      <div class="right">
        <training-diary-calendar />

        <div class="useful-pages">
          <app-block-title>Полезные страницы</app-block-title>
          <div class="useful-pages__elements">
            <nuxt-link tag="a" to="/training-programs" class="element">
              <i class="ti-clipboard element__icon"></i>
              <p class="element__text">Тренировочные<br>программы</p>
            </nuxt-link>
            <nuxt-link tag="a" to="/exercise-guide" class="element">
              <i class="ti-book element__icon"></i>
              <p class="element__text">Справочник<br>по упражнениям</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import TrainingProgram from "@/components/trainingDiary/TrainingProgram/index"
import TrainingDiaryCalendar from "@/components/trainingDiary/TrainingDiaryCalendar"

export default {
  name: 'TrainingDiaryPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Дневник тренировок',
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
    AppBlockTitle,
    TrainingProgram,
    TrainingDiaryCalendar
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('trainingDiary/fetchTrainingDiaryInfo', query)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-diary-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-diary-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .left {
      margin-right: 40px;
      width: 400px;
    }
    .center {
      width: 100%;
    }
    .right {
      margin-left: 40px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

.useful-pages {
  margin-top: 20px;
  .useful-pages__elements {
    display: flex;
    flex-wrap: wrap;
    .element {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 5px;
      text-decoration: none;
      color: $black;
      font-family: $fontMontserrat;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      flex: 1 1 auto;
      margin-bottom: 5px;
      padding: 20px;
      cursor: pointer;

      .element__icon {
        font-size: 26px;
        transition: all 0.2s ease-in-out;
      }

      .element__text {
        margin-top: 15px;
        text-align: center;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
      }
    }
    .element:hover {
      .element__icon {
        color: $green;
      }

      .element__text {
        color: $green;
      }
    }
  }
  
}

</style>
