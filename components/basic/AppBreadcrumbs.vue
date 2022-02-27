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
          <p class="link__text">
            <i v-if="index === 0" class="icon" :class="item.icon"></i>
            <span class="text">{{ item.title }}</span>
          </p>
        </nuxt-link>

        <div
          v-if="!item.active"
          class="item__link item__link--disabled"
          :title="item.title"
        >
          <p class="link__text">
            <i v-if="index === 0" class="icon" :class="item.icon"></i>
            <span class="text">{{ item.title }}</span>
          </p>
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
  padding: 0 15px;
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
        .link__text {
          display: flex;
          .icon {
            margin-right: 10px;
            font-size: 18px;
            transition: $tr-02;
          }
          .text {
            font-size: 18px;
            transition: $tr-02;
          }
        }
      }
      .item__link:hover {
        .link__text {
          .icon {
            color: $primary;
          }
          .text {
            color: $primary;
          }
        }
      }
      .item__link--disabled:hover {
        .link__text {
          .icon {
            color: $text;
          }
          .text {
            color: $text;
          }
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
