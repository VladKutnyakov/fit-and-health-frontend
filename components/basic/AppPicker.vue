<template>
  <div
    class="app-picker"
    :class="[{ 'app-picker--disabled': disabled }]"
  >
    <div class="app-picker__value">
      <p
        class="app-picker__selected-value"
        :class="[{ 'app-picker__selected-value--placeholder': !selectedValue }]"
        :title="selectedValue"
      >{{ selectedValue ? selectedValue : placeholder || 'Выберите значение' }}</p>

      <div class="app-picker__action"  @click="openModal()">
        <i class="app-picker__icon ti-more"></i>
      </div>

      <div class="app-picker__action" @click="clearValue()">
        <i class="ti-close app-picker__icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [Object, String],
    disabled: Boolean,
    placeholder: String
  },
  computed: {
    selectedValue () {
      return typeof this.value === 'object' && this.value !== null ? this.value.title : this.value
    }
  },
  methods: {
    openModal () {
      if (!this.disabled) {
        this.$emit('openModal')
      }
    },
    clearValue () {
      if (!this.disabled) {
        this.$emit('clear', null)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-picker {
  // border: 1px solid red;
  flex: 1 1 auto;
  position: relative;
  display: flex;
  width: 100%;
  .app-picker__value {
    display: flex;
    flex: 1 1 auto;
    width: calc(100% - 70px);
    background: $white;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    transition: $tr-02;
    .app-picker__selected-value {
      position: relative;
      flex: 1 1 auto;
      padding: 8px 15px;
      width: 100%;
      min-width: 50px;
      height: 35px;
      border: none;
      border-right: 1px solid $dividerBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      word-wrap: normal;
      word-break: normal;
    }
    .app-picker__selected-value--placeholder {
      opacity: .6;
      user-select: none;
    }
    .app-picker__action {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid $dividerBorder;
      cursor: pointer;
      .app-picker__icon {
        // border: 1px solid red;
        padding: 0 10px;
        font-family: $fontThemify;
        font-size: 14px;
      }
    }
    .app-picker__action:last-child {
      border-right: none;
    }
  }
}

.app-picker--disabled {
  .app-picker__value {
    background: $black05;
    border: 1px solid transparent;
    cursor: default;
    .app-picker__action {
      cursor: default;
    }
  }
}

body.dark {
  .app-picker {
    .app-picker__value {
      background: $black20;
      .app-picker__selected-value {
        background: transparent;
        border-right: 1px solid $dividerBorderDarkBG;
      }
      .app-picker__action {
        border-right: 1px solid $dividerBorderDarkBG;
      }
      .app-picker__action:last-child {
        border-right: none;
      }
    }
  }

  .app-picker--disabled {
    .app-picker__value {
      background: $white05;
      border: 1px solid transparent;
      cursor: default;
      .app-picker__action {
        cursor: default;
      }
    }
  }
}

</style>
