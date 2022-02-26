<template>
  <h2 class="block-title">
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.block-title {
  padding: 10px 20px;
  font-size: 18px;
  border-bottom: $dividerBorder;
}

</style>
