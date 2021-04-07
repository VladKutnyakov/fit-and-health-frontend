<template>
  <p class="exercise-title">{{ title }}</p>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      title: state => state.exercises.exerciseInfo.title
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-title {
  margin: 0 10px;
  text-align: center;
  font-weight: 500;
  padding: 10px 20px;
  border-bottom: 1px solid $blockBorder;
}

</style>
