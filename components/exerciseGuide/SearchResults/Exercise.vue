<template>
  <div class="exercise">
    <div class="exercise__user-params">
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
      <p class="title" :title="exercise.title">{{ exercise.title }}</p>

      <div class="exercise-info">
        <div class="exercise-info__item">
          <p class="item__title">Мышечная группа:</p>
          <p class="item__value">{{ exercise.muscleGroup ? exercise.muscleGroup.title : 'нет данных' }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Дополнительные мышцы:</p>
          <p class="item__value">{{ exercise.additionalMuscles.map(item => item.title).join(', ') }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Оборудование:</p>
          <p class="item__value">{{ exercise.equipment ? exercise.equipment.title : 'нет данных' }}</p>
        </div>
        <div class="exercise-info__item">
          <p class="item__title">Подходит для занятий:</p>
          <p class="item__value">{{ exercise.trainingPlace ? exercise.trainingPlace.title : null }}</p>
        </div>
      </div>
    </div>

    <div class="exercise__training-accent">
      <div class="training-accent__info">
        <div class="info__element">
          <span class="element__text">Сила:</span>
          <span class="element__value">{{ exercise.power }}%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Выносливость:</span>
          <span class="element__value">{{ exercise.endurance }}%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Гибкость:</span>
          <span class="element__value">{{ exercise.flexibility }}%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Кардио:</span>
          <span class="element__value">{{ exercise.cardio }}%</span>
        </div>
        <div class="info__element">
          <span class="element__text">Сложность:</span>
          <span class="element__value">{{ exercise.skill ? exercise.skill.complexityTitle : 'Не указано' }}</span>
        </div>
      </div>
    </div>

    <div class="exercise__actions">
      <i
        class="ti-search action-btn"
        @click="openDetailingModal(exercise)"
      ></i>

      <i
        class="ti-trash action-btn"
        :class="[{ 'action-btn--disabled': !exercise.user }]"
        @click="removeExercise(exercise)"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    exercise: Object,
  },
  computed: {
    ...mapState({
      searchFilters: state => state.exercises.searchFilters,
    })
  },
  methods: {
    changePinnedParam (exercise) {
      this.$store.dispatch('exercises/changePinnedParam', exercise.id)
        .then(() => {
          this.updatePageContent()
        })
    },
    changeFavoriteParam (exercise) {
      this.$store.dispatch('exercises/changeFavoriteParam', exercise.id)
        .then(() => {
          this.updatePageContent()
        })
    },
    openDetailingModal (exercise) {
      // console.log('detainling', exercise.id)
      this.$store.commit('exercises/setModalCondition', 'edit')
      this.$store.commit('exercises/clearExerciseForm')

      this.$store.dispatch('exercises/fetchExerciseInfo', exercise.id)

      this.$store.commit('exercises/setModalVisibility', { modal: 'exerciseFormModalActive', condition: true })
    },
    removeExercise (exercise) {
      if (exercise.user) {
        // Снять активность для кнопок
        this.$store.commit('exercises/setWaiteExerciseListUpdate', true)

        // Удалить упражнение
        this.$store.dispatch('exercises/removeExercise', exercise.id)
          .then(() => {
            this.updatePageContent()
          })
          .finally(() => {
            // Вернуть активность для кнопок
            this.$store.commit('exercises/setWaiteExerciseListUpdate', false)
          })
      }
    },
    updatePageContent () {
      // Обновить общую информацио о разделе для старницы
      this.$store.dispatch('exercises/fetchPageInfo')

      // Обновить список упражнений
      const payload = {
        searchString: this.searchFilters.searchString,
        mediaType: this.searchFilters.mediaType?.id || null,
        trainingPlace: this.searchFilters.trainingPlace?.id || null,
        userType: this.searchFilters.userType?.id || null,

        orderBy: this.searchFilters.orderBy?.id || null,
        muscleGroup: [],
      }

      const muscleGroupIDs = []
      this.searchFilters.muscleGroup.forEach(element => {
        muscleGroupIDs.push(element.id)
      })

      payload.muscleGroup = muscleGroupIDs.join(', ')

      this.$store.dispatch('exercises/fetchExercisesList', payload)
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
  .exercise__user-params {
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
    min-width: 120px;
    max-width: 120px;
    height: 160px;
    background: $black10;
    border-radius: 6px;
  }
  .exercise__overview {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 10px;
    .title {
      // padding: 0 10px;
      // text-align: center;
      // font-size: 18px;
      font-weight: 500;
    }
    .description {
      margin-top: 10px;
      // padding: 0 10px;
      font-size: 14px;
    }
    .exercise-info {
      margin-top: auto;
      .exercise-info__item {
        display: flex;
        // align-items: center;
        .item__title {
          font-size: 14px;
          white-space: nowrap;
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
    padding: 10px;
    width: 100%;
    min-width: 240px;
    max-width: 240px;
    background: $black05;
    border-radius: 6px;
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
  .exercise__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid $dividerBorder;
    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding: 5px;
      width: 35px;
      height: 35px;
      background: $primary;
      color: $white;
      border-radius: 6px;
      cursor: pointer;
    }
    .action-btn:last-child {
      margin-top: auto;
      margin-bottom: 0;
      background: $danger;
    }
    .action-btn--disabled {
      opacity: .5;
      cursor: default;
    }
  }
}

.exercise:last-child {
  margin-bottom: 0;
}

body.dark {
  .exercise {
    background: $cardBackgroundDarkBG;
    .exercise__user-params {
      .actions-btn {
        color: $white30;
      }
      .actions-btn:hover {
        color: $primary;
      }
      .actions-btn--active {
        color: $primary;
      }
    }
    .exercise__preview-image {
      background: $black20;
    }
    .exercise__training-accent {
      background: $black10;
      .training-accent__info {
        .info__element:last-child {
          border-top: 1px solid $dividerBorderDarkBG;
        }
      }
    }
    .exercise__actions {
      border-left: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
