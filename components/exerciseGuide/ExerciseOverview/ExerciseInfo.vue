<template>
  <div class="exercise-info">
    <div class="exercise-info__item">
      <p class="item__title">Группа мышц:</p>
      <p class="item__value">{{ muscleGroup }}</p>
    </div>
    <div class="exercise-info__item">
      <p class="item__title">Дополнительные мышцы:</p>
      <p class="item__value">{{ additionalMuscles }}</p>
    </div>
    <div class="exercise-info__item">
      <p class="item__title">Тип упражнения:</p>
      <p class="item__value">{{ type }}</p>
    </div>
    <div class="exercise-info__item">
      <p class="item__title">Вид упражнения:</p>
      <p class="item__value">{{ sort }}</p>
    </div>
    <div class="exercise-info__item">
      <p class="item__title">Усилие:</p>
      <p class="item__value">{{ exertion }}</p>
    </div>
    <div class="exercise-info__item">
      <p class="item__title">Оборудование:</p>
      <p class="item__value">{{ equipment }}</p>
    </div>
    <div class="exercise-info__item">
      <p class="item__title mr-10">Сложность выполнения:</p>
      <app-rating :rating="skill" />
    </div>
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
      muscleGroup: state => state.exercises.exerciseInfo.muscleGroup.title,
      type: state => state.exercises.exerciseInfo.type?.title || 'нет данных',
      sort: state => state.exercises.exerciseInfo.sort?.title || 'нет данных',
      equipment: state => state.exercises.exerciseInfo.equipment?.title || 'нет данных',
      exertion: state => state.exercises.exerciseInfo.exertion?.title || 'нет данных',
      skill: state => state.exercises.exerciseInfo.skill?.value,
    }),
    additionalMuscles () {
      const additionalExerciseMuscles = this.$store.state.exercises.exerciseInfo.additionalMuscles
      const Muscles = []

      for (let i = 0; i < additionalExerciseMuscles.length; i++) {
        Muscles.push(additionalExerciseMuscles[i].title)
      }

      if (Muscles.length === 0) {
        Muscles.push('нет данных')
      }

      return Muscles.join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise-info {
  flex: 1 1 auto;
  margin: 10px;
  // padding: 0 10px;
  .exercise-info__item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 0 10px;
    .item__title {
      font-size: 14px;
      font-weight: 500;
    }
    .item__value {
      margin-left: 10px;
      padding: 5px 10px;
      background: $hiddenBlockBG;
      font-size: 14px;
      border-radius: 6px;
    }
  }
  .exercise-info__item:last-child {
    border-top: 1px dashed $blockBorder;
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 0;
  }
}

</style>
