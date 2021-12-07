<template>
  <li class="exercise">
    <app-accordion :isOpened="false">
      <template v-slot:accordionHeader>
        <div class="exercise__header">
          <div class="header__drag-drop-btn">
            <i class="ti-exchange-vertical"></i>
          </div>
          <p class="header__title">{{ item.exercise.title }}</p>
          <div class="header__parameter">
            <p class="parameter__text">Подходы</p>
            <p class="parameter__value">{{ item.approaches }}</p>
          </div>
          <div class="header__parameter">
            <p class="parameter__text">Повторений</p>
            <p class="parameter__value">{{ item.repeats }}</p>
          </div>
          <div class="header__parameter">
            <p class="parameter__text">Отягощение</p>
            <p class="parameter__value">{{ item.additionalWeight }} кг.</p>
          </div>
          <div class="header__accrodion-btn">
            <i class="ti-angle-double-down"></i>
          </div>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <ul class="exercise__steps">
          <li class="approach approach--not-active">
            <div class="approach__status">
              <div class="status"></div>
            </div>
            <div class="approach__number">
              <p class="number__title">Подход 0</p>
            </div>
            <div class="approach__element">
              <p class="element__text">Повторений</p>
              <p class="element__value">15</p>
            </div>
            <div class="approach__element">
              <p class="element__text">Отягощение</p>
              <p class="element__value">5 кг.</p>
            </div>
            <div class="approach__element">
              <p class="element__text">Время выполнения</p>
              <p class="element__value">00 : 02 : 32</p>
            </div>
            <div class="approach__element">
              <p class="element__text">Время отдыха</p>
              <p class="element__value">00 : 01 : 12</p>
            </div>
            <div class="approach__action-btn">
              <i class="ti-more"></i>
            </div>
          </li>
        </ul>
        <div class="exercise__control">
          <div class="control">
            <i class="ti-plus control__icon"></i>
          </div>
          <div class="control">
            <i class="ti-control-stop control__icon"></i>
          </div>
          <div class="control">
            <i class="ti-control-pause control__icon"></i>
          </div>
          <div class="control">
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

export default {
  props: {
    item: Object
  },
  components: {
    AppAccordion,
    AppButton
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
    // background: rgba(0,0,0,.025);
    border-top: 1px solid $blockBorder;
    .approach {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px dashed $blockBorder;
      .approach__status {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 50px;
        .status {
          width: 16px;
          height: 16px;
          background: $red;
          border-radius: 50%;
        }
      }
      .approach__number {
        margin-left: 10px;
        margin-right: auto;
        .number__title {
          font-weight: 500;
          white-space: nowrap;
        }
      }
      .approach__element {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 10px;
        width: 100%;
        max-width: 150px;
        .element__text {
          text-transform: uppercase;
          font-size: 10px;
        }
        .element__value {
          margin-top: 5px;
          font-weight: 500;
        }
      }
      .approach__action-btn {
        // border: 1px solid red;
        padding: 10px;
      }
    }
    .approach:last-child {
      border-bottom: none;
    }
    .approach--not-active {
      background: $black10;
    }
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
