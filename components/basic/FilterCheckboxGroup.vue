<template>
  <div class="filter-checkbox-group">
    <app-accordion :isOpened="filterGroupOpened">
      <template v-slot:accordionHeader>
        <div class="filter-checkbox-group__header" @click="toggleOpened(!filterGroupOpened)">
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
        <div class="filter-checkbox-group__footer">
          <ul class="footer__value-list">
            <li v-for="(item, index) in valueList" :key="index" class="value-list__item">
              <app-input-checkbox
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
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'

export default {
  components: {
    AppAccordion,
    AppInputCheckbox,
  },
  props: {
    value: Array,
    valueList: Array,
    headerTitle: String,
    filterGroupOpened: Boolean
  },
  data () {
    return {
      checkedValue: this.value
    }
  },
  watch: {
    checkedValue () {
      this.$emit('change', this.checkedValue)
    }
  },
  methods: {
    removeAllValue () {
      this.checkedValue = []
    },
    selectAllValue () {
      this.checkedValue = this.value
    },
    toggleOpened ($event) {
      this.$emit('toggleOpened', $event)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.filter-checkbox-group {
  // border: 1px solid red;
  margin-bottom: 10px;
  .filter-checkbox-group__header {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  .filter-checkbox-group__footer {
    border-top: 1px solid $dividerBorder;
    .footer__value-list {
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

.dark-theme {
  .filter-checkbox-group {
    .filter-checkbox-group__footer {
      border-top: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
