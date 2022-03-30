<template>
  <li class="exercise">
    <app-accordion ref="exerciseAccordion" :isOpened="isOpened">
      <template v-slot:accordionHeader>
        <div class="exercise__header" @click="isOpened = !isOpened">
          <div class="header__drag-drop-btn">
            <i class="ti-exchange-vertical"></i>
          </div>
          <p class="header__title">{{ exercise.title ? exercise.title : '' }}</p>
          <div class="header__accrodion-btn">
            <i
              :class="[
                { 'ti-angle-down': isOpened },
                { 'ti-angle-right': !isOpened },
              ]"
            ></i>
          </div>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <ul class="exercise__steps">
          <approach
            v-for="(approach, index) in exercise.approaches"
            :key="index"
            :exercise="exercise"
            :approach="approach"
          />
        </ul>
        <div class="exercise__controls">
          <app-button
            v-if="!exercise.isStarted"
            size14px
            @click="startExercise(exercise)"
          >Начать выполнение упражнения</app-button>

          <app-button
            v-if="exercise.isStarted"
            size14px
            dangerBtn
            @click="stopExercise(exercise)"
          >Завершить выполнение упражнения</app-button>

          <app-button
            class="ml-auto"
            size14px
            @click="addAproach(exercise)"
          >Добавить подход</app-button>
        </div>
      </template>
    </app-accordion>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import AppAccordion from '@/components/basic/AppAccordion'
import AppButton from '@/components/basic/AppButton'
import Approach from '@/components/trainingProcess/TrainingProcess/Exercises/Approach'

export default {
  props: {
    exercise: Object,
  },
  components: {
    AppAccordion,
    AppButton,
    Approach
  },
  data () {
    return {
      isOpened: false,
    }
  },
  methods: {
    startExercise (exercise) {
      this.$store.commit('trainingProcess/startExercise', exercise.id)
    },
    stopExercise (exercise) {
      this.$store.commit('trainingProcess/stopExercise', exercise.id)
    },
    addAproach (exercise) {
      this.$store.commit('trainingProcess/addAproach', exercise.id)

      this.$nextTick(() => {
        this.$refs.exerciseAccordion.updateHeight()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise {
  margin-bottom: 10px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
  .exercise__header {
    display: flex;
    align-items: center;
    padding: 10px;
    .header__drag-drop-btn {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
    .header__title {
      flex: 1 1 auto;
      padding: 0 10px;
      font-weight: 600;
    }
    .header__accrodion-btn {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
  }
  .exercise__steps {
    display: flex;
    flex-direction: column;
    border-top: 1px solid $dividerBorder;
  }
  .exercise__controls {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid $dividerBorder;
  }
}

.exercise:last-child {
  margin-bottom: 0;
}

body.dark {
  .exercise {
    background: $cardBackgroundDarkBG;
    .exercise__steps {
      border-top: 1px solid $dividerBorderDarkBG;
    }
    .exercise__controls {
      border-top: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
