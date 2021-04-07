<template>
  <div class="user-best-result">
    <p class="text">Мой лучшый результат: </p>
    <p class="value">нет данных</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.user-best-result {
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 10px;
  border-top: 1px solid $blockBorder;
  .text {
    font-weight: 500;
  }
  .value {
    margin-left: 10px;
  }
}

</style>