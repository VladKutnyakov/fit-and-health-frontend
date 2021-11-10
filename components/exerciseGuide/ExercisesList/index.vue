<template>
  <div class="exercises-list">
    <app-block-title>База упражнений</app-block-title>

    <div class="exercises-list__content">
      <div class="search">
        <app-search-block small />
      </div>

      <div class="categories">
        <ul class="categories__list">
          <muscle-group  v-for="(item, index) in muscleGroups" :key="index" :muscleGroup="item" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import MuscleGroup from '@/components/exerciseGuide/ExercisesList/MuscleGroup.vue'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    MuscleGroup
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      muscleGroups: state => state.exercises.exercisesList
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises-list {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .exercises-list__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    height: calc(100vh - 300px);

    .search {
      padding: 10px;
      background: $hiddenBlockBG;
    }

    .categories {
      position: relative;
      flex: 1 1 auto;
      margin: 10px;
      // background: $white;
      border: 1px solid $black10;
      border-radius: 6px;
      background: $insetBlockBG;
      box-shadow: $insetBoxShadow;
      overflow-y: scroll;
      .categories__list {
        // border: 1px solid red;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        padding: 10px;
      }
    }
  }
}
</style>
