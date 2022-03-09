<template>
  <div class="app-tabs">
    <ul class="app-tabs__tab-list">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        class="tab-list__item"
      >
        <p>{{ item.title }}</p>
      </li>
    </ul>

    <component
      :is="currentTabComponent"
    />
  </div>
</template>

<script>
export default {
  props: {
    tabList: Array,
  },
  computed: {
    currentTabComponent () {
      const activeTab = this.tabList.find(element => element.isActive)

      return activeTab ? activeTab.component : null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-tabs {}

</style>
