<template>
  <div class="filter-radio-group">
    <app-accordion :isOpened="filterGroupOpened">
      <template v-slot:accordionHeader>
        <div class="filter-radio-group__header" @click="toggleOpened(!filterGroupOpened)">
          <p class="header__title">{{ headerTitle }}</p>
          <i
            class="header__icon"
            :class="[
              { 'ti-angle-right': !filterGroupOpened },
              { 'ti-angle-down': filterGroupOpened }
            ]"
          ></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="filter-radio-group__footer">
          <ul class="filter-radio-group__value-list">
            <li
              v-for="(item, index) in valueList"
              :key="index"
              class="value-list__item"
              :class="[{ 'value-list__item--active': isCheckedValue(item) }]"
              @click="changeValue(item)"
            >
              <p class="item__visible-switch"></p>
              <p class="item__text">{{ item && typeof item === 'object' ? item.title : item }}</p>
            </li>
          </ul>
        </div>
      </template>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'

export default {
  components: {
    AppAccordion,
  },
  props: {
    value: [String, Object],
    valueList: Array,
    headerTitle: String,
    filterGroupOpened: Boolean
  },
  data () {
    return {
      isOpened: false,
      checkedValue: this.value
    }
  },
  watch: {
    checkedValue () {
      this.$emit('change', this.value)
    }
  },
  methods: {
    isCheckedValue (item) {
      if (item && typeof item === 'object') {
        return !!(item.id === this.value.id)
      } else {
        return item === this.value
      }
    },
    changeValue (item) {
      this.$emit('change', item)
    },
    toggleOpened ($event) {
      this.$emit('toggleOpened', $event)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.filter-radio-group {
  // border: 1px solid red;
  margin-bottom: 10px;
  .filter-radio-group__header {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  .filter-radio-group__footer {
    border-top: 1px solid $dividerBorder;
    .filter-radio-group__value-list {
      padding: 10px;
      .value-list__item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
        .item__visible-switch {
          // border: 1px solid red;
          position: relative;
          height: 20px;
          width: 20px;
          border: 2px solid $primary;
          border-radius: 10px;
        }
        .item__visible-switch:after {
          // border: 1px solid red;
          position: absolute;
          top: 0;
          left: 2px;
          transform: translateY(calc(-50% + 8px));
          content: '';
          height: 12px;
          width: 12px;
          border-radius: 50%;
          transition: $tr-01;
        }
        .item__text {
          margin-left: 12px;
        }
      }
      .value-list__item:last-child {
        margin-bottom: 0;
      }
      .value-list__item--active {
        .item__visible-switch:after {
          background: $primary;
        }
        .item__text {
          color: $primary;
        }
      }
    }
  }
}

.dark-theme {
  .filter-radio-group {
    .filter-radio-group__footer {
      border-top: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
