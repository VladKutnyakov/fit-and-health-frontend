<template>
  <div class="description">
    <!-- <p class="description__title">Описание</p> -->
    <pre class="description__text">{{ description }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      description: state => state.trainingDiary.trainingDiaryInfo.trainingProgram.description
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.description {
  flex: 1 1 auto;
  // padding-top: 10px;
  // border-top: 1px dashed $blockBorder;
  // .description__title {
  //   text-align: center;
  //   font-weight: 500;
  // }
  .description__text {
    padding: 10px;
  }
}

</style>
