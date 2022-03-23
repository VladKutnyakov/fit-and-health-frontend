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
            <li v-for="(item, index) in valueList" :key="index" class="value-list__item">
              <app-input-radio
                v-model="checkedValue"
                :label="item"
                :value="item"
              />
            </li>
          </ul>
        </div>
      </template>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppInputRadio from '@/components/basic/AppInputRadio'

export default {
  components: {
    AppAccordion,
    AppInputRadio,
  },
  props: {
    headerTitle: String,
    valueList: Array,
    defaultValue: String,
    filterGroupOpened: Boolean
  },
  data () {
    return {
      isOpened: false,
      checkedValue: this.defaultValue
    }
  },
  watch: {
    checkedValue () {
      this.$emit('inputGroupValueChanged', this.checkedValue)
    }
  },
  methods: {
    setDefaultValue () {
      this.checkedValue = this.defaultValue
    },
    applyFilter () {
      this.$emit('applyFunc')
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
    transition: $tr-02;
    .header__title {
      color: $text;
      font-weight: 500;
    }
    .header__icon {
      color: $text;
    }
  }
  .filter-radio-group__footer {
    border-top: 1px solid $dividerBorder;
    .filter-radio-group__value-list {
      padding: 10px;
      .value-list__item {
        margin-bottom: 10px;
      }
      .value-list__item:last-child {
        margin-bottom: 0;
      }
    }
  }
}

body.dark {
  .filter-radio-group {
    .filter-radio-group__footer {
      border-top: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
