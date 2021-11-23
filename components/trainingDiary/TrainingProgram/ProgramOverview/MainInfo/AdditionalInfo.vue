<template>
  <div class="additional-info">
    <div class="additional-info__element">
      <i class="ti-timer element__icon"></i>
      <p class="element__amount">{{ trainingProgramDays.length }}</p>
      <p class="element__text">тренировочных дня</p>
    </div>
    <div class="additional-info__element">
      <i class="ti-check-box element__icon"></i>
      <p class="element__amount">27</p>
      <p class="element__text">завершенных тренировок</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      trainingProgramDays: state => state.trainingDiary.trainingDiaryInfo.trainingProgram.trainingProgramDays
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.additional-info {
  display: flex;
  padding: 10px 0;
  background: $white;
  .additional-info__element {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    .element__icon {
      font-size: 16px;
    }

    .element__amount {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 600;
    }

    .element__text {
      margin-left: 5px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  .additional-info__element:last-child {
    border: none;
  }
}

</style>
