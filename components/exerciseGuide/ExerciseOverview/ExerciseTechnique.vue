<template>
  <div class="exercise-technique">
    <p class="exercise-technique__block-title">Техника выполнения упражнения:</p>
    <div class="text">
      <pre class="exercise-technique__text">{{ techniqueDescription }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      techniqueDescription: state => state.exercises.exerciseInfo.techniqueDescription
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-technique {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .exercise-technique__block-title {
    padding: 10px;
    font-weight: 500;
    border-top: 1px dashed $blockBorder;
  }
  .text {
    // position: relative;
      flex: 1 1 auto;
      // margin: 10px;
      // background: $white;
      border: 1px solid $black10;
      border-radius: 6px;
      // background: $insetBlockBG;
      // box-shadow: $insetBoxShadow;
      overflow-y: scroll;
    .exercise-technique__text {
      padding: 10px;
      line-height: 25px;
    }
  }
}

</style>
