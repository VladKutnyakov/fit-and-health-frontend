<template>
  <div class="actions">
    <div
      class="action-btn"
      title="Сохранить рацион"
      @click='saveMealPlanerInfo()'
    >
      <i class="ti-save"></i>
    </div>

    <nuxt-link class="action-btn" to="" title="Найти похожие">
      <i class="ti-search"></i>
    </nuxt-link>
    <nuxt-link class="action-btn" to="" title="Поделиться">
      <i class="ti-share"></i>
    </nuxt-link>

    <div
      class="action-btn"
      title="Сохранить рацион как..."
    >
      <i class="ti-bookmark-alt"></i>
    </div>

    <nuxt-link class="action-btn" to="" title="Удалить данные">
      <i class="ti-trash"></i>
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      saveMealPlanerInfo: 'mealPlaner/saveMealPlanerInfo'
    })
  }
}
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
