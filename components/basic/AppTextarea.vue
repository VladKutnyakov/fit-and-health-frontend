<template>
  <textarea
    class="app-textarea"
    :class="[{ 'app-textarea--disabled': disabled }]"
    v-model="inputValue"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="changeTextareaValue"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: String,
    disabled: Boolean,
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
  padding: 8px 15px;
  width: 100%;
  min-height: 100px;
  border: 1px solid $dividerBorder;
  border-radius: 6px;
  color: $text;
  font-family: $fontMontserrat;
  font-size: 16px;
  resize: none;
  outline: none;
  transition: $tr-02;
}
.app-textarea:focus {
  border: 1px solid $primary;
}
.app-textarea::placeholder {
  opacity: .6;
  transition: $tr-02;
}
.app-textarea:focus::placeholder {
  opacity: 0;
}
.app-textarea::selection {
  color: $white;
  background: $primary;
}

.app-textarea--disabled {
  background: $black05;
  border: 1px solid transparent;
  cursor: default;
}

.dark-theme {
  .app-textarea {
    background: $black20;
    color: $textLight;
  }

  .app-textarea--disabled {
    background: $white05;
    border: 1px solid transparent;
  }
}

</style>
