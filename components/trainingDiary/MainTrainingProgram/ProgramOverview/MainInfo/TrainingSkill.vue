<template>
  <div class="training-skill">
    <p class="training-skill__block-title">Сложность тренировочной программы:</p>
    <div class="training-skill__level-view">
      <i class="ti-crown level-view__icon level-view__icon--active"></i>
      <i class="ti-crown level-view__icon level-view__icon--active"></i>
      <i class="ti-crown level-view__icon level-view__icon--active"></i>
      <i class="ti-crown level-view__icon"></i>
      <i class="ti-crown level-view__icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid $blockBorder;
  .training-skill__block-title {
    font-size: 14px;
    font-weight: 500;
  }
  .training-skill__level-view {
    .level-view__icon {
      color: $gray;
      font-size: 14px;
    }
    .level-view__icon--active {
      color: $green;
    }
  }
}

</style>
