<template>
  <div class="program-stats">
    Информация о проведенной тренировке
    <pre style="white-space: pre-wrap;">{{ trainingDiaryInfo }}</pre>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      trainingDiaryInfo: state => state.trainingDiary.trainingDiaryInfo
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.program-stats {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  height: 400px;
}

</style>
