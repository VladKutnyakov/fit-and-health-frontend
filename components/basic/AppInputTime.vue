<template>
  <div class="app-input-time">
    <input
      class="input"
      :class="[
        { 'input--small': small },
        { 'input--text-left': textLeft },
        { 'input--text-right': textRight },
        { 'input--text-center': textCenter },
        { 'input--error': error && error.enabled }
      ]"
      type="text"
      :value="inputValue"
      :placeholder="placeholder || 'hh : mm : ss'"
      @input="changeInputValue($event)"
      @focus="onFocuse($event)"
      @keypress.enter="onKeypressEnter($event)"
    >
  </div>
</template>

<script>
import maskFormatter from '@/utils/maskFormatter'

export default {
  props: {
    value: [String, Number],
    placeholder: String,
    small: Boolean,
    textLeft: Boolean,
    textRight: Boolean,
    textCenter: Boolean,
    error: Object,
    selectOnFocus: Boolean
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value (newValue) {
      this.inputValue = newValue

      // if (!/^-?\d*\d*$/.test(newValue)) {
      //   this.InteralValue = prevValue
      //   return
      // }
      // if (prevValue) {
      //   this.InteralValue = newValue.toString().replace(/^0+/, '')
      // } else {
      //   this.InteralValue = newValue
      // }
    },
    inputValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    changeInputValue ($event) {
      // console.log($event.target.value)
      // console.log(maskFormatter('xx : xx : xx', 'x', $event.target.value))

      this.inputValue = $event.target.value
    },
    onFocuse ($event) {
      if (this.selectOnFocus) {
        $event.target.select()
      }
    },
    onKeypressEnter ($event) {
      $event.target.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-input-time {
  // border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .input {
    padding: 8px 15px;
    width: 100%;
    min-width: 50px;
    color: $text;
    font-family: $fontMontserrat;
    font-size: 16px;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    outline: none;
    transition: $tr-02;
  }
  .input:focus {
    border: 1px solid $primary;
    transition: $tr-02;
  }
  .input::placeholder {
    opacity: .6;
    transition: $tr-02;
  }
  .input:focus::placeholder {
    opacity: 0;
  }
  .input::selection {
    color: $white;
    background: $primary;
  }

  .input--small {
    padding: 5px 12px;
    font-size: 14px;
  }

  .input--text-left {
    text-align: left;
  }
  .input--text-right {
    text-align: right;
  }
  .input--text-center {
    text-align: center;
  }

  .input--error {
    border: 1px solid $danger !important;
  }

  .error-message {
    // border: 1px solid red;
    position: absolute;
    top: calc(100% + 5px);
    padding: 5px 10px;
    background: $danger;
    text-align: center;
    color: $white;
    font-size: 12px;
    border-radius: 6px;
    opacity: 0;
    visibility: hidden;
    z-index: 2000;
  }
  .error-message::before {
    position: absolute;
    content: '';
    top: -1px;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    width: 5px;
    height: 5px;
    background: $danger;
  }
  .error-message--active {
    opacity: 1;
    visibility: visible;
  }
}

body.dark .app-input-text {
  .input {
    background: $black20;
    color: $textLight;
  }
}

</style>
