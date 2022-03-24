<template>
  <div class="exercise">
    <div class="exercise__actions">
      <i
        class="actions-btn"
        :class="[
          { 'ti-pin-alt': !exercise.pinned },
          { 'ti-pin2': exercise.pinned },
          { 'actions-btn--active': exercise.pinned }
        ]"
        @click="changePinnedParam(exercise)"
      ></i>
      <i
        class="actions-btn"
        :class="[
          { 'ti-heart-broken': !exercise.favorite },
          { 'ti-heart': exercise.favorite },
          { 'actions-btn--active': exercise.favorite }
        ]"
        @click="changeFavoriteParam(exercise)"
      ></i>
    </div>

    <div class="exercise__preview-image mr-5"></div>
    <div class="exercise__preview-image"></div>

    <div class="exercise__overview">
      <p class="title">Тяга штанги узким хватом стоя</p>

      <div class="exercise-info">
        <div class="exercise-info__item">
          <p class="item__title">Группа мышц:</p>
          <p class="item__value">{{ exercise.muscleGroup }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Дополнительные мышцы:</p>
          <p class="item__value">{{ exercise.additionalMuscles }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Тип упражнения:</p>
          <p class="item__value">{{ exercise.type }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Вид упражнения:</p>
          <p class="item__value">{{ exercise.sort }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Усилие:</p>
          <p class="item__value">{{ exercise.exertion }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Оборудование:</p>
          <p class="item__value">{{ exercise.equipment }}</p>
        </div>
      </div>
    </div>

    <div class="exercise__training-accent">
      <div class="training-accent__info">
        <div class="info__element">
          <span class="element__text">Кардио:</span>
          <span class="element__value">30%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Сила:</span>
          <span class="element__value">20%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Выносливость:</span>
          <span class="element__value">38%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Гибкость:</span>
          <span class="element__value">12%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Сложность:</span>
          <span class="element__value">Выше среднего</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
  },
  methods: {
    // getMuscles (muscleGroup, item) {
    //   const Muscles = [muscleGroup.title]

    //   for (let i = 0; i < item.additionalMuscles.length; i++) {
    //     Muscles.push(item.additionalMuscles[i].title)
    //   }

    //   return Muscles.join(', ')
    // },
    // fetchExerciseInfo (exercisesId) {
    //   this.$store.dispatch('exercises/fetchExerciseInfo', exercisesId)
    // },
    changePinnedParam (exercise) {
      this.$store.dispatch('exercises/changePinnedParam', exercise.id)
    },
    changeFavoriteParam (exercise) {
      this.$store.dispatch('exercises/changeFavoriteParam', exercise.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise {
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  .exercise__actions {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    .actions-btn {
      margin: 5px 0px;
      padding: 2.5px;
      color: $black30;
      transition: $tr-02;
      cursor: pointer;
    }
    .actions-btn:hover {
      color: $primary;
    }
    .actions-btn--active {
      color: $primary;
    }
  }
  .exercise__preview-image {
    width: 120px;
    height: 160px;
    background: $black10;
    border-radius: 6px;
  }
  .exercise__overview {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .exercise-info {
      margin-top: auto;
      .exercise-info__item {
        display: flex;
        align-items: center;
        .item__title {
          font-size: 14px;
        }
        .item__value {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }
  }
  .exercise__training-accent {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    width: 100%;
    min-width: 240px;
    max-width: 240px;
    border-left: 1px solid $dividerBorder;
    .training-accent__chart {
      margin-bottom: auto;
    }
    .training-accent__info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .info__element {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        .element__text {
          font-size: 14px;
        }
        .element__value {
          margin-left: auto;
          color: $primary;
          font-size: 14px;
        }
      }
      .info__element:last-child {
        margin-top: auto;
        // margin-top: 5px;
        margin-bottom: 0;
        padding-top: 5px;
        // border-top: 1px solid $dividerBorder;
      }
    }
  }
}

body.dark {
  .exercise {
    background: $cardBackgroundDarkBG;
    .exercise__preview-image {
      background: $black20;
    }
    .exercise__training-accent {
      border-left: 1px solid $dividerBorderDarkBG;
      .training-accent__info {
        .info__element:last-child {
          border-top: 1px solid $dividerBorderDarkBG;
        }
      }
    }
  }
}

</style>
