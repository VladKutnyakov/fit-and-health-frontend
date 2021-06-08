<template>
  <input
    class="input-text"
    :class="[
      { 'input-text--small': small },
      { 'input-text--text-left': textLeft },
      { 'input-text--text-right': textRight },
      { 'input-text--text-center': textCenter }
    ]"
    type="text"
    :placeholder="placeholder"
    @input="changeInputValue()"
    v-model="inputValue"
  >
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: String,
    small: Boolean,
    textLeft: Boolean,
    textRight: Boolean,
    textCenter: Boolean
  },
  data () {
    return {
      inputValue: this.value || ''
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

.input-text {
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
.input-text:focus {
  border: 1px solid $green;
  transition: $tr-02;
}
.input-text::placeholder {
  opacity: .6;
  transition: $tr-02;
}
.input-text:focus::placeholder {
  opacity: 0;
}

.input-text--small {
  padding: 5px 10px;
  color: $black;
  font-size: 14px;
}

.input-text--text-left {
  text-align: left;
}
.input-text--text-right {
  text-align: right;
}
.input-text--text-center {
  text-align: center;
}


</style>
