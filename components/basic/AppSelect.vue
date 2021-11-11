<template>
  <div
    class="app-select"
    :style="[
      { 'max-width': maxWidth },
      { 'min-width': minWidth },
    ]"
  >
    <div class="app-select__value" @click="toggleVisibility()">
      <input
        ref="selectedValue"
        class="app-select__selected-value"
        :class="[
          {'app-select__selected-value--left': alignSelectedValueLeft},
          {'app-select__selected-value--right': alignSelectedValueRight},
          {'app-select__selected-value--center': alignSelectedValueCenter},
        ]"
        :value="typeof selectValue === 'object' && selectValue != null ? selectValue.title : selectValue"
        :placeholder="placeholder || 'Выберите значение'"
      />
      <i class="app-select__icon ti-angle-double-down"></i>
    </div>

    <ul
      ref="listOptions"
      class="app-select__list"
      :class="[
        {'app-select__list-opened': listOpened},
        {'app-select__list-left': alignListLeft},
        {'app-select__list-right': alignListRight},
        {'app-select__list-center': alignListCenter}
      ]"
    >
      <li
        v-for="(item, index) in selectOptionsList"
        :key="index"
        class="app-select__list-item"
        @click="selectItem(item)"
      >{{ typeof item === 'object' && item != null ? item.title : item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    minWidth: String,
    maxWidth: String,
    value: [String, Number, Object],
    selectOptionsList: Array,
    placeholder: String,
    alignListLeft: Boolean,
    alignListRight: Boolean,
    alignListCenter: Boolean,
    alignSelectedValueLeft: Boolean,
    alignSelectedValueRight: Boolean,
    alignSelectedValueCenter: Boolean
  },
  data () {
    return {
      selectValue: this.value,
      listOpened: false
    }
  },
  watch: {
    value () {
      this.selectValue = this.value
    }
  },
  methods: {
    toggleVisibility () {
      if (!this.listOpened) {
        this.openSelect()
      } else {
        this.closeSelect()
      }
    },
    openSelect () {
      this.listOpened = true
      setTimeout(() => {
        document.addEventListener('click', this.closeSelect)
      }, 10)
    },
    closeSelect () {
      this.listOpened = false
      document.removeEventListener('click', this.closeSelect)
    },
    selectItem (item) {
      this.closeSelect()
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/vars.scss";

.app-select {
  // border: 1px solid red;
  flex: 1 1 auto;
  position: relative;
  display: flex;
  width: 100%;
  .app-select__value {
    display: flex;
    flex: 1 1 auto;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    cursor: pointer;
    .app-select__selected-value {
      position: relative;
      flex: 1 1 auto;
      padding: 10px;
      width: 100%;
      min-width: 50px;
      border: none;
      border-right: 1px solid $blockBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .app-select__icon {
      // border: 1px solid red;
      flex: 1 1 auto;
      align-self: center;
      padding: 0 10px;
      font-family: $fontThemify;
      font-size: 14px;
    }
  }
  
  .app-select__list {
    // border: 1px solid red;
    position: absolute;
    top: 0px;
    width: 100%;
    max-height: 200px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    box-shadow: $boxShadow;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    transition: $tr-02;
    overflow: auto;
    .app-select__list-item {
      // border: 1px solid red;
      padding: 10px;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
    }
    .app-select__list-item:hover {
      background: rgba(52,40,104,.04);
    }
    .app-select__list-item:first-child {
      margin-top: 4px;
    }
    .app-select__list-item:last-child {
      margin-bottom: 4px;
    }
  }
  .app-select__list-opened {
    top: 45px;
    opacity: 1;
    visibility: visible;
    transition: $tr-02;
  }
}

.app-select__default-value--left {
  text-align: left;
}
.app-select__default-value--right {
  text-align: right;
}
.app-select__default-value--center {
  text-align: center;
}

.app-select__list-left {
  text-align: left;
}
.app-select__list-right {
  text-align: right;
}
.app-select__list-center {
  text-align: center;
}

</style>
