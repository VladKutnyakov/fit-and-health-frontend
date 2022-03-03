<template>
    <textarea
      class="app-textarea"
      :placeholder="placeholder"
      @input="changeTextareaValue"
      v-model="inputValue"
    ></textarea>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String
  },
  data () {
    return {
      inputValue: this.value || ''
    }
  },
  watch: {
    value () {
      this.inputValue = this.value
    }
  },
  methods: {
    changeTextareaValue () {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-textarea {
  padding: 10px;
  width: 100%;
  min-height: 100px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  color: $text;
  font-family: $fontMontserrat;
  font-size: 16px;
  resize: none;
  outline: none;
  transition: $tr-02;
}
.app-textarea:focus {
  border: 1px solid $green;
}
.app-textarea::placeholder {
  opacity: .6;
  transition: $tr-02;
}
.app-textarea:focus::placeholder {
  opacity: 0;
}

body.dark .app-textarea {
  background: $black20;
  color: $textLight;
}

</style>