<template>
  <div
    class="app-input-text"
    :class="[{ 'app-input-text--disabled': disabled }]"
  >
    <input
      class="input"
      :class="[
        { 'input--small': small },
        { 'input--text-left': textLeft },
        { 'input--text-right': textRight },
        { 'input--text-center': textCenter },
        { 'input--error': error && error.enabled }
      ]"
      v-model="inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      type="text"
      @input="changeInputValue()"
      @focus="onFocuse($event)"
      @keypress.enter="onKeypressEnter($event)"
    >

    <pre
      v-if="error && error.errorMessage"
      class="error-message"
      :class="[{ 'error-message--active': error && error.enabled }]"
    >{{ error.errorMessage }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    disabled: Boolean,
    placeholder: [String, Number],
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
    }
  },
  methods: {
    changeInputValue () {
      this.$emit('input', this.inputValue)
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

<style lang="scss">
@import "@/assets/styles/vars.scss";

.app-input-text {
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

.app-input-text--disabled {
  .input {
    background: $black05;
    border: 1px solid transparent;
    cursor: default;
  }
}

body.dark {
  .app-input-text {
    .input {
      background: $black20;
      color: $textLight;
    }
  }

  .app-input-text--disabled {
    .input {
      background: $white05;
      border: 1px solid transparent;
    }
  }
}

</style>
