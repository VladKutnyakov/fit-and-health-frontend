<template>
    <div class="useful-pages">
      <app-block-title>Полезные страницы</app-block-title>

      <div class="useful-pages__links">
        <nuxt-link to="/challenges/challenges-book" class="page-link">
          <i class="ti-search page-link__icon"></i>
          <p class="page-link__title">Поиск<br />вызовов</p>
        </nuxt-link>
        <nuxt-link to="/challenges/challenges-constructor" class="page-link">
          <i class="ti-layout page-link__icon"></i>
          <p class="page-link__title">Конструктор<br />вызовов</p>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.useful-pages {
  // border: 1px solid red;
  .useful-pages__links {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    .page-link {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5px;
      padding: 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .page-link__icon {
        font-size: 26px;
        transition: $tr-02;
      }
      .page-link__title {
        margin-top: 15px;
        text-align: center;
        font-weight: 500;
        transition: $tr-02;
      }
    }
    .page-link:nth-child(1) {
      margin-left: 0;
      margin-right: 2.5px;
    }
    .page-link:nth-child(2) {
      margin-left: 2.5px;
      margin-right: 0;
    }
    .page-link:hover {
      .page-link__icon {
        color: $green;
      }
      .page-link__title {
        color: $green;
      }
    }
  }
}

</style>
