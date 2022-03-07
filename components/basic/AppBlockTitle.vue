<template>
  <h2 class="block-title">
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.block-title {
  padding: 10px 20px;
  // font-size: 18px;
  border-bottom: 1px solid $dividerBorder;
}

body.dark .block-title {
  border-bottom: 1px solid $dividerBorderDarkBG;
}

</style>
