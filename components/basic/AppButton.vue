<template>
  <button
    class="btn"
    :disabled="disabled"
    :class="[
      {'text-uppercase': uppercase},
      {'size12px': size12px},
      {'size14px': size14px},
      {'size16px': size16px},
      {'size18px': size18px},
      {'success-btn': successBtn},
      {'info-btn': infoBtn},
      {'warning-btn': warningBtn},
      {'danger-btn': dangerBtn},
      {'secondary-btn': secondaryBtn},
      {'disabled': disabled}
    ]"
    @click="clickHandler()"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    uppercase: Boolean,
    size12px: Boolean,
    size14px: Boolean,
    size16px: Boolean,
    size18px: Boolean,
    successBtn: Boolean,
    infoBtn: Boolean,
    warningBtn: Boolean,
    dangerBtn: Boolean,
    secondaryBtn: Boolean,
    disabled: Boolean
  },
  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.btn {
  padding: 10px 20px;
  background: $primary;
  color: $white;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: $tr-02;
}
.btn:hover {
  box-shadow: $btnHoverShadow;
}
.btn:active {
  box-shadow: $btnActiveShadow;
}

.text-uppercase {
  text-transform: uppercase;
}

.size12px {
  padding: 6px 10px;
  font-size: 12px;
}
.size14px {
  padding: 8px 14px;
  font-size: 14px;
}
.size16px {
  padding: 10px 20px;
  font-size: 16px;
}
.size18px {
  padding: 14px 24px;
  font-size: 18px;
}

.success-btn {
  background: $green;
}
.info-btn {
  background: $blue;
}
.warning-btn {
  color: $black;
  background: $yellow;
}
.danger-btn {
  background: $red;
}
.secondary-btn {
  background: $secondaryLight2;
}
.disabled {
  opacity: 0.5;
}
.disabled:hover {
  box-shadow: none;
  cursor: default;
}

</style>
