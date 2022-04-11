<template>
  <div class="filter-radio-text-group">
    <ul class="filter-radio-text-group__value-list">
      <li
        v-for="(item, index) in valueList"
        :key="index"
        class="value-list__item"
        :class="[{ 'value-list__item--active': item === value }]"
        @click="changeValue(item)"
      >
        <p
          class="item__text"
          :class="[
            {'text-transform-uppercase': uppercase},
            {'size14px': size14px},
            {'size18px': size18px}
          ]"
        >{{ item && typeof item === 'object' ? item.title : item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    valueList: Array,
    value: [String, Object],
    uppercase: Boolean,
    size14px: Boolean,
    size18px: Boolean
  },
  methods: {
    changeValue (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.filter-radio-text-group {
  // border: 1px solid red;
  user-select: none;
  .filter-radio-text-group__value-list {
    display: flex;
    .value-list__item {
      cursor: pointer;
      .item__text {
        margin: 0 5px;
        padding: 0 5px;
        color: $text;
      }
    }
    .value-list__item:hover {
      .item__text {
        color: $primary;
      }
    }
    .value-list__item--active {
      .item__text {
        color: $primary;
      }
    }
  }
}

.text-transform-uppercase {
  text-transform: uppercase;
}
.size14px {
  font-size: 14px;
}
.size18px {
  font-size: 18px;
}

</style>
