<template>
  <h1 class="page-title">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.page-title {
  margin-right: 15px;
  padding: 0 20px;
  font-size: 26px;
  border-right: $dividerBorder;
}

</style>
