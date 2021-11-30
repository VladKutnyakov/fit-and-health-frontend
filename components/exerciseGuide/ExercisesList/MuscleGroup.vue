<template>
  <li class="list__item">
    <app-accordion :isOpened="muscleGroupIsOpened">
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
          <exercise
            v-for="(item, index) in muscleGroup.exercises"
            :key="index"
            :item="item"
            :muscleGroup="muscleGroup"
            class="exercises-list__item"
          />
        </ul>
      </template>
    </app-accordion>
  </li>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import Exercise from '@/components/exerciseGuide/ExercisesList/Exercise'

export default {
  props: {
    muscleGroup: Object
  },
  components: {
    AppAccordion,
    Exercise
  },
  data () {
    return {
      muscleGroupIsOpened: false
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
    margin: 0 5px;
    background: $black10;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
.list__item:last-child {
  margin-bottom: 0;
}

</style>
