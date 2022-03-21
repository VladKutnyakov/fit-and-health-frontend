<template>
  <div class="exercises">
    <ul class="exercises-list">
      <exercise
        v-for="(item, index) in exercisesList"
        :key="index"
        :exercise="item"
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
  .exercises-list {
    flex: 1 1 auto;
    margin: 0 10px 10px 10px;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    height: 600px;
    overflow-y: scroll;
  }
  .exercises-list::-webkit-scrollbar {
    width: 4px;
  }
  .exercises-list::-webkit-scrollbar-thumb {
    background: $primaryLight4;
    border-radius: 50px;
  }
  .exercises-list::-webkit-scrollbar-track {
    background: $black10;
  }
}

body.dark {
  .exercises {
    .exercises-list {
      background: $black20;
      border: 1px solid $dividerBorderDarkBG;
      .exercises-list::-webkit-scrollbar-thumb {
        background: $primary;
      }
      .exercises-list::-webkit-scrollbar-track {
        background: $black;
      }
    }
  }
}

</style>
