<template>
  <div class="actions">
    <nuxt-link class="action-btn" to="" title="Приступить к выполнению">
      <i class="ti-control-play"></i>
    </nuxt-link>
    <nuxt-link class="action-btn" to="" title="Подробнее">
      <i class="ti-layout"></i>
    </nuxt-link>
    <nuxt-link class="action-btn" to="" title="Найти похожие">
      <i class="ti-search"></i>
    </nuxt-link>
    <nuxt-link class="action-btn" to="" title="Лучшие результаты">
      <i class="ti-cup"></i>
    </nuxt-link>
    <nuxt-link class="action-btn" to="" title="Не интересно">
      <i class="ti-reload"></i>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.actions {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: $hiddenBlockBG;
  .action-btn {
    margin-bottom: 10px;
    padding: 5px;
    i {
      font-size: 20px;
      transition: $tr-02;
    }
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
  .action-btn:hover {
    i {
      color: $green;
    }
  }
}

</style>
