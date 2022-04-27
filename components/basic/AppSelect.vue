<template>
  <div
    class="app-select"
    :class="[{ 'app-select--disabled': disabled }]"
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
        :disabled="disabled"
        :placeholder="placeholder || 'Выберите значение'"
        @click="toggleVisibility()"
      />
      <div class="app-select__action" @click="toggleVisibility()">
        <i class="ti-angle-down app-select__icon"></i>
      </div>
      <div v-if="canBeClear" class="app-select__action" @click="clearSelect()">
        <i class="ti-close app-select__icon"></i>
      </div>
    </div>

    <ul
      ref="listOptions"
      v-if="selectOptionsList"
      class="app-select__list"
      :class="[
        { 'app-select__list-opened': listOpened },
        { 'app-select__list-left': alignListLeft },
        { 'app-select__list-right': alignListRight },
        { 'app-select__list-center': alignListCenter }
      ]"
    >
      <li
        v-if="optionsList.length == 0"
        class="app-select__list-item--empty"
      >Нет данных</li>
      <li
        v-for="(item, index) in optionsList"
        :key="index"
        class="app-select__list-item"
        @click.stop
      >
        <app-input-checkbox
          v-if="multiselect"
          class="list-item__checkbox fill-area"
          :value="item.active"
          :label="item.title"
          @change="selectItem(item)"
        />

        <p
          v-if="!multiselect"
          class="list-item__text"
          @click="selectItem(item)"
        >{{ typeof item === 'object' && item != null ? item.title : item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'

export default {
  props: {
    canBeClear: {
      type: Boolean,
      default: true,
    },
    minWidth: String,
    maxWidth: String,
    value: [String, Number, Object, Array],
    selectOptionsList: Array,
    multiselect: Boolean,
    disabled: Boolean,
    placeholder: String,
    alignListLeft: Boolean,
    alignListRight: Boolean,
    alignListCenter: Boolean,
    alignSelectedValueLeft: Boolean,
    alignSelectedValueRight: Boolean,
    alignSelectedValueCenter: Boolean
  },
  components: {
    AppInputCheckbox,
  },
  data () {
    return {
      selectValue: this.value,
      optionsList: [],
      listOpened: false
    }
  },
  watch: {
    value (newValue) {
      if (Array.isArray(newValue)) {
        // Сортировка по очередности в списке возможных значений
        const sortedNewValue = []

        if (this.selectOptionsList) {
          for (let i = 0; i < this.selectOptionsList.length; i++) {
            newValue.forEach(element => {
              if (this.selectOptionsList[i].id === element.id) {
                sortedNewValue.push(element)
              }
            })
          }
        } else {
          sortedNewValue = newValue
        }

        // Форматирование массива выбранных значений в строку
        this.selectValue = sortedNewValue.map(element => (element.title)).join(', ')
      } else if (typeof newValue === 'object' && newValue != null) {
        this.selectValue = newValue.title
      } else {
        this.selectValue = newValue
      }

      this.getOptionsList()
    }
  },
  methods: {
    getOptionsList () {
      if (this.multiselect) {
        const list = JSON.parse(JSON.stringify(this.selectOptionsList))

        const listWithSelectedElements = []

        for (let i = 0; i < list.length; i++) {
          const isSelect = false

          if (this.value) {
            this.value.forEach(element => {
              if (element.id === list[i].id) {
                isSelect = true
              }
            })
          }

          listWithSelectedElements.push({
            id: list[i].id,
            title: list[i].title,
            active: isSelect,
          })
        }

        this.optionsList = JSON.parse(JSON.stringify(listWithSelectedElements))
      } else {
        this.optionsList = JSON.parse(JSON.stringify(this.selectOptionsList))
      }
    },
    toggleVisibility () {
      if (!this.listOpened && !this.disabled) {
        this.getOptionsList()
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
      if (this.multiselect) {
        const newValue = this.value ? JSON.parse(JSON.stringify(this.value)) : []

        let mustPush = true

        for (let i = 0; i < newValue.length; i++) {
          if (newValue[i].id === item.id) {
            mustPush = false
            newValue.splice(i, 1)
            break
          }
        }

        if (mustPush) {
          newValue.push({
            id: item.id,
            title: item.title,
            active: true
          })
        }

        this.$emit('select', newValue)
      } else {
        this.closeSelect()
        this.$emit('select', item)
      }
    },
    clearSelect () {
      if (!this.disabled) {
        this.$emit('clear', null)
      }
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
      transition: $tr-02;
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
      display: flex;
      align-items: flex-start;
      margin: 0 5px;
      
      border-radius: 6px;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
      .list-item__text {
        flex: 1 1 auto;
        padding: 8px 10px;
      }
      .list-item__checkbox {
        padding: 8px 10px;
      }
    }
    .app-select__list-item:hover {
      background: $primaryLight5;
      color: $primary;
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

.app-select--disabled {
  .app-select__value {
    background: $black05;
    border: 1px solid transparent;
    cursor: default;
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

.dark-theme {
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
      .app-select__list-item:hover {
        background: $primaryDarkHover;
        color: $primary;
      }
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

  .app-select--disabled {
    .app-select__value {
      background: $white05;
      border: 1px solid transparent;
    }
  }
}

</style>
