<template>
  <p class="title">{{ title }}</p>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      title: state => state.trainingDiary.trainingDiaryInfo.trainingProgram.title || 'нет данных'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.title {
  padding-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  // border-bottom: 1px dashed $blockBorder;
}

</style>
