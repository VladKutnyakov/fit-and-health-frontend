<template>
  <div class="exercises">
    <ul class="exercises-list">
      <exercise
        v-for="(item, index) in exercisesList"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import Exercise from '@/components/trainingInProgress/TrainingProcess/Exercises/Exercise'

export default {
  props: {
    exercisesList: Array
  },
  components: {
    Exercise
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  border-top: 1px solid $dividerBorder;
  .exercises-list {
    flex: 1 1 auto;
    margin: 10px;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    min-height: 600px;
    overflow-y: scroll;
  }
}

</style>
