<template>
  <div class="app-page" :class="[{ 'app-page--hidden-menu': !menuIsOpen }]">
    <!-- <div class="app-page__breadcrumbs">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    </div> -->
    <!-- <div class="app-page__title">
      <app-page-title>{{ pageTitle }}</app-page-title>
    </div> -->
    <div class="app-page__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPageTitle from '@/components/basic/AppPageTitle'
// import AppBreadcrumbs from '@/components/basic/AppBreadcrumbs'

export default {
  name: 'AppPage',
  props: {
    pageTitle: String,
    breadcrumbs: Array,
  },
  components: {
    AppPageTitle,
    // AppBreadcrumbs,
  },
  computed: {
    ...mapState({
      menuIsOpen: state => state.appSettings.menuIsOpen,
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-left: 260px;
  padding: 40px 40px 40px 40px;
  transition: $tr-02;
  // .app-page__breadcrumbs {
  //   margin-bottom: 20px;
  //   width: 100%;
  //   max-width: 1700px;
  // }
  .app-page__title {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    // width: 100%;
    // max-width: 1700px;
  }
  .app-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

.app-page--hidden-menu {
  margin-left: 0;
}

</style>
