<template>
  <div class="app-input-text">
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
      :placeholder="placeholder"
      @input="changeInputValue()"
      v-model="inputValue"
    >

    <pre
      v-if="error && error.errorMessage"
      class="error-message"
    >{{ error.errorMessage }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: String,
    small: Boolean,
    textLeft: Boolean,
    textRight: Boolean,
    textCenter: Boolean,
    error: Object,
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
    padding: 10px;
    width: 100%;
    min-width: 50px;
    color: $black;
    font-family: $fontMontserrat;
    font-size: 16px;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    outline: none;
    transition: $tr-02;
  }
  .input:focus {
    border: 1px solid $green;
    transition: $tr-02;
  }
  .input::placeholder {
    opacity: .6;
    transition: $tr-02;
  }
  .input:focus::placeholder {
    opacity: 0;
  }

  .input--small {
    padding: 5px 10px;
    color: $black;
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
    border: 1px solid $red !important;
  }

  .error-message {
    // border: 1px solid red;
    position: absolute;
    top: calc(100% + 10px);
    padding: 5px 10px;
    background: $red;
    color: $white;
    border-radius: 6px;
    z-index: 2000;
  }
  .error-message::before {
    position: absolute;
    content: '';
    top: -2px;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    width: 10px;
    height: 10px;
    background: $red;
  }
}

</style>
