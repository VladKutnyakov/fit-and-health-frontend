<template>
  <li class="list__item">
    <app-accordion :isOpened="false">
      <template v-slot:accordionHeader>
        <div class="item__header" @click="muscleGroupIsOpened = !muscleGroupIsOpened">
          <div class="preview-image">
            <img src="" alt="img" class="image">
          </div>
          <div class="header__title">
            <p class="title__text">{{ muscleGroup.title }}</p>
            <p class="title__exercises-count">Кол-во упражнений {{ muscleGroup.exercises.length }}</p>
          </div>
          <i v-if="!muscleGroupIsOpened" class="ti-angle-double-down header__icon"></i>
          <i v-if="muscleGroupIsOpened" class="ti-angle-double-up header__icon"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <ul class="item__exercises-list">
          <li
            v-for="(exercise, index) in muscleGroup.exercises"
            :key="index"
            class="exercises-list__item"
            @click="fetchExerciseInfo(exercise.id)"
          >
            <div class="item__exercise-title-and-type">
              <p class="exercises-title">{{ exercise.title }}</p>
              <p class="exercise__target-muscles">{{ getMuscles(muscleGroup, exercise) }}</p>
            </div>
            <div class="item__actions">
              <i class="ti-pin-alt actions-btn"></i>
              <!-- <i class="ti-pin2 actions-btn"></i> -->
              <i class="ti-heart actions-btn"></i>
            </div>
          </li>
        </ul>
      </template>
    </app-accordion>
  </li>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'

export default {
  props: {
    muscleGroup: Object
  },
  components: {
    AppAccordion
  },
  data () {
    return {
      muscleGroupIsOpened: false
    }
  },
  methods: {
    getMuscles (muscleGroup, exercise) {
      const Muscles = [muscleGroup.title]

      for (let i = 0; i < exercise.additionalMuscles.length; i++) {
        Muscles.push(exercise.additionalMuscles[i].title)
      }

      return Muscles.join(', ')
    },
    fetchExerciseInfo (exercisesId) {
      this.$store.dispatch('exercises/fetchExerciseInfo', exercisesId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.list__item {
  // border: 1px solid red;
  margin-bottom: 10px;
  .item__header {
    display: flex;
    align-items: center;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .preview-image {
      border: 1px solid $blockBorder;
      border-radius: 6px;
      width: 60px;
      height: 60px;
    }
    .header__title {
      flex: 1 1 auto;
      margin-left: 10px;
      .title__text {
        font-size: 18px;
        font-weight: 500;
      }
      .title__exercises-count {
        font-size: 14px;
      }
    }
    .header__icon {
      margin-left: auto;
    }
  }
  .item__exercises-list {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
    margin: 0 5px;
    background: $black10;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .exercises-list__item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      padding: 10px;
      background: $white;
      border-radius: 6px;
      user-select: none;
      cursor: pointer;
      transition: $tr-02;
      .item__exercise-title-and-type {
        flex: 1 1 auto;
        margin-left: 5px;
        margin-right: 5px;
        .exercises-title {
          font-size: 14px;
          font-weight: 500;
          transition: $tr-02;
        }
        .exercise__target-muscles {
          margin-top: 5px;
          text-transform: uppercase;
          font-size: 10px;
        }
      }
      .item__actions {
        display: flex;
        align-self: stretch;
        align-items: center;
        padding-left: 10px;
        flex-direction: column;
        border-left: 1px dashed $blockBorder;
        .actions-btn {
          margin: 5px 0px;
          padding: 2.5px;
          color: $black30;
          transition: $tr-02;
        }
        .actions-btn:hover {
          color: $green;
        }
      }
    }
  }
}
.list__item:last-child {
  margin-bottom: 0;
}

</style>
