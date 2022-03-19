<template>
  <li class="exercise">
    <app-accordion :isOpened="isOpened" @click.native="isOpened = !isOpened">
      <template v-slot:accordionHeader>
        <div class="exercise__header">
          <div class="header__drag-drop-btn">
            <i class="ti-exchange-vertical"></i>
          </div>
          <p class="header__title">{{ item.exercise.title ? item.exercise.title : '' }}</p>
          <div class="header__parameter">
            <p class="parameter__text">Подходы</p>
            <p class="parameter__value">{{ item.approaches ? item.approaches : '--' }}</p>
          </div>
          <div class="header__parameter">
            <p class="parameter__text">Повторений</p>
            <p class="parameter__value">{{ item.repeats ? item.repeats : '--' }}</p>
          </div>
          <div class="header__parameter">
            <p class="parameter__text">Отягощение</p>
            <p class="parameter__value">{{ item.additionalWeight ? item.additionalWeight : 0 }} кг.</p>
          </div>
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
            v-for="(approach, index) in item.approaches"
            :key="index"
            :item="item"
            :approach="approach"
          />
        </ul>
        <div class="exercise__control">
          <div class="control" title="Добавить подход">
            <i class="ti-plus control__icon"></i>
          </div>
          <div class="control" title="Завершить подход">
            <i class="ti-control-stop control__icon"></i>
          </div>
          <div class="control" title="Приостановить выполнение подхода">
            <i class="ti-control-pause control__icon"></i>
          </div>
          <div class="control" title="Начать выполнение подхода">
            <i class="ti-control-play control__icon"></i>
          </div>
        </div>
      </template>
    </app-accordion>
  </li>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppButton from '@/components/basic/AppButton'
import Approach from '@/components/trainingInProgress/TrainingProcess/Exercises/Approach'

export default {
  props: {
    item: Object
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
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise {
  margin-bottom: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
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
    .header__parameter {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 200px;
      .parameter__text {
        text-transform: uppercase;
        font-size: 12px;
      }
      .parameter__value {
        margin-top: 5px;
        font-weight: 500;
      }
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
    padding: 10px 10px 5px 10px;
    background: $black10;
    border-top: 1px solid $blockBorder;
  }
  .exercise__control {
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-top: 1px solid $blockBorder;
    .control {
      // border: 1px solid red;
      margin-left: 10px;
      padding: 10px;
      cursor: pointer;
      .control__icon {
        font-size: 20px;
        transition: $tr-02;
      }
    }
    .control:first-child {
      margin-left: 0;
      margin-right: auto;
    }
    .control:hover {
      .control__icon {
        color: $green;
      }
    }
  }
}

.exercise:last-child {
  margin-bottom: 0;
}

</style>
