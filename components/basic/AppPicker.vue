<template>
  <div class="app-picker">
    <div class="app-picker__value">
      <p
        class="app-picker__selected-value"
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
    background: $white;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    transition: $tr-02;
    cursor: pointer;
    .app-picker__selected-value {
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

    .app-picker__action {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid $dividerBorder;
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

</style>
