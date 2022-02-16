<template>
  <div class="exercises">
    <p class="exercises__block-title">Упражнения</p>

    <div class="exercises__added-exercises">
      <div class="added-exercises__header">
        <p class="header__column"><i class="ti-exchange-vertical"></i></p>
        <p class="header__column">Название</p>
        <p class="header__column">Категория</p>
        <p class="header__column">Подходов</p>
        <p class="header__column">Повторений</p>
        <p class="header__column">Отягощение</p>
        <p class="header__column"><i class="ti-trash"></i></p>
      </div>

      <ul class="added-exercises__exercises-list">
        <exercise
          v-for="(item, index) in trainingDayExercies"
          :key="index"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Exercise from '@/components/trainingProgramEditor/Editor/TrainingDays/TrainingDaySettings/Settings/Exercises/Exercise'

export default {
  components: {
    Exercise
  },
  computed: {
    ...mapState({
      selectedTrainingDay: state => state.trainingProgramEditor.selectedTrainingDay,
      trainingProgram: state => state.trainingProgramEditor.trainingProgram,
    }),
    trainingDayExercies () {
      return this.trainingProgram.fields.trainingProgramDays[this.selectedTrainingDay].trainingProgramDayExercises
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises {
  flex: 1 1 auto;
  margin-top: 10px;
  .exercises__block-title {
    padding: 10px 20px;
    font-weight: 500;
  }
  .exercises__added-exercises {
    padding: 10px;
    height: 800px;
    background: $white;
    border: 1px solid $inputBorder;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0,0,0,.25);
    .added-exercises__header {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $green;
      border: 1px solid transparent;
      border-radius: 6px;
      .header__column {
        padding: 5px;
        width: 120px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column:nth-child(1) {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
      }
      .header__column:nth-child(2) {
        flex: 1 1 auto;
        min-width: 200px;
      }
      .header__column:nth-child(3) {
        min-width: 150px;
      }
      .header__column:last-child {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
        border: none;
      }
    }
  }
}

</style>
