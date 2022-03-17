<template>
  <div class="app-picker">
    <div class="app-picker__value">
      <p
        class="app-picker__selected-value"
        :title="typeof value === 'object' && value !== null ? value.title : value"
        :placeholder="placeholder || 'Выберите значение'"
      >{{ typeof value === 'object' && value !== null ? value.title : value }}</p>

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
    placeholder: String
  },
  methods: {
    openModal () {
      this.$emit('openModal')
    },
    clearValue () {
      this.$emit('clear', null)
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
}

</style>
