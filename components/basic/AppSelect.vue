<template>
  <div
    class="app-select"
    :style="[
      { 'max-width': maxWidth },
      { 'min-width': minWidth },
    ]"
  >
    <div class="app-select__value" :class="[{ 'app-select__value--focus': listOpened }]">
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
         @click="toggleVisibility()"
      />
      <div class="app-select__action"  @click="toggleVisibility()">
        <i class="app-select__icon" :class="[{'ti-angle-down': selectOptionsList}]"></i>
      </div>
      <div class="app-select__action" @click="clearSelect()">
        <i class="ti-close app-select__icon"></i>
      </div>
    </div>

    <ul
      ref="listOptions"
      v-if="selectOptionsList"
      class="app-select__list"
      :class="[
        {'app-select__list-opened': listOpened},
        {'app-select__list-left': alignListLeft},
        {'app-select__list-right': alignListRight},
        {'app-select__list-center': alignListCenter}
      ]"
    >
      <li
        v-if="selectOptionsList.length == 0"
        class="app-select__list-item--empty"
      >Нет данных</li>
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
    value: [String, Number, Object, Array],
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
      }, 0)
    },
    closeSelect () {
      this.listOpened = false
      document.removeEventListener('click', this.closeSelect)
    },
    selectItem (item) {
      this.closeSelect()
      this.$emit('select', item)
    },
    clearSelect () {
      this.closeSelect()
      this.$emit('select', null)
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
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    transition: $tr-02;
    cursor: pointer;
    .app-select__selected-value {
      position: relative;
      flex: 1 1 auto;
      padding: 8px 15px;
      width: 100%;
      min-width: 50px;
      border: none;
      border-right: 1px solid $dividerBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .app-select__selected-value::placeholder {
      opacity: .6;
      transition: $tr-02;
    }
    .app-select__selected-value:focus::placeholder {
      opacity: 0;
    }
    .app-select__selected-value::selection {
      color: $white;
      background: $primary;
    }
    .app-select__action {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid $dividerBorder;
      .app-select__icon {
        // border: 1px solid red;
        padding: 0 10px;
        font-family: $fontThemify;
        font-size: 14px;
      }
    }
    .app-select__action:last-child {
      border-right: none;
    }
  }
  .app-select__value--focus {
    border: 1px solid $primary;
  }
  .app-select__list {
    // border: 1px solid red;
    position: absolute;
    top: 0px;
    width: 100%;
    max-height: 200px;
    background: $white;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    box-shadow: $boxShadow;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    transition: $tr-02;
    overflow: auto;
    .app-select__list-item {
      // border: 1px solid red;
      padding: 8px 15px;
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
    .app-select__list-item--empty {
      padding: 8px 15px;
      background: $gray-light;
      text-align: center;
      white-space: nowrap;
      user-select: none;
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

body.dark {
  .app-select {
    .app-select__value {
      background: $black20;
      .app-select__selected-value {
        background: transparent;
        border-right: 1px solid $dividerBorderDarkBG;
      }
      .app-select__action {
        border-right: 1px solid $dividerBorderDarkBG;
      }
      .app-select__action:last-child {
        border-right: none;
      }
    }
    .app-select__list {
      background: $cardBackgroundDarkBG;
      border: 1px solid $dividerBorderDarkBG;
      .app-select__list-item--empty {
        background: $cardBackgroundDarkBG;
      }
    }
    .app-select__list-opened {
      top: 45px;
      opacity: 1;
      visibility: visible;
      transition: $tr-02;
    }
  }
}

</style>
