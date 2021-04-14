<template>
  <div class="actions">
    <nuxt-link class="action-btn" to="" title="Поиск продуктов и рецептов">
      <i class="ti-search"></i>
    </nuxt-link>

    <nuxt-link class="action-btn" to="" title="Удалить">
      <i class="ti-trash"></i>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: $hiddenBlockBG;
  .action-btn {
    margin-bottom: 10px;
    padding: 5px;
    font-size: 20px;
    transition: $tr-02;
    cursor: pointer;
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
  .action-btn:hover {
    color: $green;
  }
}

</style>
