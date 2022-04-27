<template>
  <div class="app-tabs">
    <ul class="app-tabs__tab-list">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        class="tab-list__item"
        :class="[{ 'tab-list__item--active': item.isActive }]"
        @click="selectTab(index)"
      >
        <p class="item__title">
          <i v-if="item.icon" class="item__icon" :class="item.icon"></i>
          {{ item.title }}
        </p>
      </li>

      <li
        v-if="canBeAddTabs"
        class="tab-list__item"
        @click="addTab()"
      >
        <p class="item__title">
          <i class="ti-plus"></i>
        </p>
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
    canBeAddTabs: Boolean,
  },
  computed: {
    currentTabComponent () {
      const activeTab = this.tabList.find(element => element.isActive)

      return activeTab ? activeTab.component : null
    }
  },
  methods: {
    selectTab (tab) {
      this.$emit('selectTab', tab)
    },
    addTab () {
      this.$emit('addTab')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-tabs {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  .app-tabs__tab-list {
    display: flex;
    padding: 0 10px;
    border-bottom: 1px solid $dividerBorder;
    .tab-list__item {
      display: flex;
      margin-right: 5px;
      border: 1px solid $dividerBorder;
      border-bottom: none;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      transition: $tr-02;
      cursor: pointer;
      .item__icon {
        margin-right: 10px;
      }
      .item__title {
        padding: 10px 15px;
        transition: $tr-02;
      }
      .item__title:hover {
        color: $primary;
      }
    }
    .tab-list__item:hover {
      background: $primaryLight5;
      border: 1px solid $primaryLight5;
      border-bottom: none;
    }
    .tab-list__item--active {
      background: $primary;
      border: 1px solid $primary;
      border-bottom: none;
      .item__title {
        color: $white;
      }
      .item__title:hover {
        color: $white;
      }
    }
    .tab-list__item--active:hover {
      background: $primary;
      border: 1px solid $primary;
      border-bottom: none;
    }
  }
}

.dark-theme {
  .app-tabs {
    .app-tabs__tab-list {
      border-bottom: 1px solid $dividerBorderDarkBG;
      .tab-list__item {
        border: 1px solid $dividerBorderDarkBG;
        border-bottom: none;
      }
      .tab-list__item:hover {
        background: $primaryDarkHover;
      }
      .tab-list__item--active:hover {
        background: $primary;
        border: 1px solid $primary;
        border-bottom: none;
      }
    }
  }
}

</style>
