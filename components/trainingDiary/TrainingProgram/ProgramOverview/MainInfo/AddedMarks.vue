<template>
  <div class="added-marks">
    <p
      v-for="(item, index) in marks"
      :key="index"
      class="mark"
    >{{ item.title }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      marks: state => state.trainingDiary.trainingDiaryInfo.trainingProgram.marks
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.added-marks {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  .mark {
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 5px 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
  }
}

</style>
