<template>
  <div class="exercise-technique">
    <p class="exercise-technique__block-title">Техника выполнения упражнения:</p>
    <p class="exercise-technique__text">{{ techniqueDescription }}</p>
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
  padding: 10px;
  .exercise-technique__block-title {
    padding: 0 10px;
    text-align: center;
    font-weight: 500;
  }
  .exercise-technique__text {
    padding: 0 10px 10px 10px;
  }
}

</style>