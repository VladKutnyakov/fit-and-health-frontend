<template>
  <div class="training-skill">
    <p class="training-skill__block-title">Сложность тренировочной программы:</p>
    <app-rating :rating="trainingSkill ? trainingSkill.value : null" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppRating from '@/components/basic/AppRating'

export default {
  components: {
    AppRating
  },
  computed: {
    ...mapState({
      trainingSkill: state => state.trainingDiary.trainingDiaryInfo.trainingProgram.skill
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  border-top: 1px dashed $blockBorder;
  .training-skill__block-title {
    font-size: 14px;
    font-weight: 500;
  }
  .training-skill__level-view {
    .level-view__icon {
      color: $gray;
      font-size: 14px;
    }
    .level-view__icon--active {
      color: $green;
    }
  }
}

</style>
