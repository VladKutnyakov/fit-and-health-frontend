<template>
  <div class="app-breadcrumbs">
    <ul class="app-breadcrumbs__list">
      <li
        class="list__item"
        v-for="(item, index) in breadcrumbs"
        :key="index"
      >
        <nuxt-link
          v-if="item.active"
          class="item__link"
          :to="item.link"
          no-prefetch
          :title="item.title"
        >
          <i v-if="index === 0" class="link__icon" :class="item.icon"></i>
          <p v-else class="link__text">{{ item.title }}</p>
        </nuxt-link>

        <div
          v-if="!item.active"
          class="item__link item__link--disabled"
          :title="item.title"
        >
          <p class="link__text">{{ item.title }}</p>
        </div>

        <div v-if="index < breadcrumbs.length - 1" class="item__divider">
          <span class="divider">-</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-breadcrumbs {
  // border: 1px solid red;
  .app-breadcrumbs__list {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    .list__item {
      display: flex;
      .item__link {
        // border: 1px solid red;
        display: flex;
        padding: 5px;
        .link__icon {
          font-size: 18px;
          transition: $tr-02;
        }
        .link__text {
          font-size: 18px;
          transition: $tr-02;
        }
      }
      .item__link:hover {
        .link__icon {
          color: $primary;
        }
        .link__text {
          color: $primary;
        }
      }
      .item__link--disabled:hover {
        .link__icon {
          color: $text;
        }
        .link__text {
          color: $text;
        }
      }
      .item__divider {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        margin: 0 5px;
        .divider {
          font-size: 18px;
        }
      }
    }
  }
}

</style>
