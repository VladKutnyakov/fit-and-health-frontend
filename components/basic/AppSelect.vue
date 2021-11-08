<template>
  <div class="app-select">
    <div class="app-select__default-value-wrapper">
      <p
        ref="defaultValue"
        class="app-select__default-value"
        :class="[
          {'app-select__default-value-left': alignSelectedValueLeft},
          {'app-select__default-value-right': alignSelectedValueRight},
          {'app-select__default-value-center': alignSelectedValueCenter},
        ]"
        @click="toggleVisibility($event)"
      >{{ typeof selectValue === 'string' ? selectValue : selectValue.title }}</p>
      <i class="app-select__icon ti-angle-double-down" @click="toggleVisibility($event)"></i>

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
          @click="toggleVisibility($event, item)"
        >{{ typeof item === 'string' ? item : item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    minWidth: String,
    value: [String, Object],
    selectOptionsList: Array,
    alignListLeft: Boolean,
    alignListRight: Boolean,
    alignListCenter: Boolean,
    alignSelectedValueLeft: Boolean,
    alignSelectedValueRight: Boolean,
    alignSelectedValueCenter: Boolean
  },
  data () {
    return {
      selectValue: this.value || '',
      listOpened: false
    }
  },
  watch: {
    value () {
      this.selectValue = this.value || ''
    }
  },
  methods: {
    toggleVisibility ($event, item) {
      if (!this.listOpened) {
        this.openSelect()
      } else {
        if ($event.target.classList.contains('app-select__list-item')) {
          this.$emit('select', item)
        }
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
    }
  },
  mounted: function () {
    // Задать минимальную ширину для элементов текущего значения и списка для выбора
    this.$refs.defaultValue.style.minWidth = this.minWidth
    this.$refs.listOptions.style.minWidth = this.minWidth
    // из-за шрифта неверно расчитывается ширина элемента. Возможно из-за того что шрифт не успевает скачаться или из-за того что стили обрабатывает браузер.
    // лучше устанавливать нужное значение максимальной ширины вручную через пропсы
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/vars.scss";

.app-select {
  // border: 1px solid red;
  position: relative;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: right;
  align-self: flex-start;
  z-index: 1000;
  .app-select__default-value-wrapper {
    // border: 1px solid red;
    position: relative;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    .app-select__default-value {
      position: relative;
      flex: 1 1 auto;
      padding: 10px 15px;
      background: $white;
      border: 1px solid $blockBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      user-select: none;
      z-index: 2;
      cursor: pointer;
    }
    .app-select__icon {
      // border: 1px solid red;
      padding: 12.5px 12px;
      background: $white;
      font-family: $fontThemify;
      font-size: 14px;
      border: 1px solid $blockBorder;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      cursor: pointer;
    }
    .app-select__list {
      // border: 1px solid red;
      position: absolute;
      top: 0px;
      right: 37px;
      width: calc(100% - 37px);
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      box-shadow: $boxShadow;
      opacity: 0;
      visibility: hidden;
      z-index: 1;
      transition: $tr-02;
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
}

.app-select__default-value-left {
  text-align: left;
}
.app-select__default-value-right {
  text-align: right;
}
.app-select__default-value-center {
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
