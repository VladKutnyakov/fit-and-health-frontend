<template>
  <li class="approach" :class="[{ 'approach--not-active': !approach.isActive }]">
    <div class="approach__status">
      <div class="status"></div>
    </div>
    <div class="approach__number">
      <p class="number__title">{{ approach.title }}</p>
    </div>
    <div class="approach__element">
      <p class="element__text">Повторений</p>
      <app-input-text
        class="mt-5"
        :value="approach.repeats"
        small
        textCenter
        selectOnFocus
      />
    </div>
    <div class="approach__element">
      <p class="element__text">Отягощение, кг.</p>
      <app-input-text
        class="mt-5"
        :value="approach.additionalWeight"
        small
        textCenter
        selectOnFocus
      />
    </div>
    <div class="approach__element">
      <p class="element__text">Время выполнения</p>
      <app-input-text
        class="mt-5"
        :value="exercise.implementationTime ? exercise.implementationTime : null"
        small
        textCenter
        selectOnFocus
        placeholder="00 : 00 : 00"
      />
    </div>
    <div class="approach__element">
      <p class="element__text">Время отдыха</p>
      <app-input-text
        class="mt-5"
        :value="exercise.restTime ? exercise.restTime : null"
        small
        textCenter
        selectOnFocus
        placeholder="00 : 00 : 00"
      />
    </div>

    <div class="approach__actions">
      <div
        class="approach__action-btn"
        @click="switchApproachExecution({ exercise, approach })"
      >
        <i
          :class="[
            { 'ti-control-play': !approach.isStarted },
            { 'ti-control-pause': approach.isStarted },
          ]"
        ></i>
      </div>

      <div
        class="approach__action-btn"
        @click="completeApproach({ exercise, approach })"
      >
        <i class="ti-control-stop"></i>
      </div>

      <div
        class="approach__action-btn"
        @click="removeApproach({ exercise, approach} )"
      >
        <i class="ti-close"></i>
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'

export default {
  props: {
    exercise: Object,
    approach: [Object, Number]
  },
  components: {
    AppInputText
  },
  methods: {
    ...mapMutations({
      switchApproachExecution: 'trainingProcess/switchApproachExecution',
      completeApproach: 'trainingProcess/completeApproach',
      removeApproach: 'trainingProcess/removeApproach',
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.approach {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  border-bottom: 1px dashed $dividerBorder;
  .approach__status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
    .status {
      width: 16px;
      height: 16px;
      background: $success;
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
  .approach__actions {
    display: flex;
    margin-left: 10px;
    .approach__action-btn {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 35px;
      height: 35px;
      background: $primary;
      color: $white;
      border-radius: 50%;
      cursor: pointer;
    }
    .approach__action-btn:nth-child(2) {
      background: $warning;
    }
    .approach__action-btn:last-child {
      margin-left: 0;
      background: $danger;
    }
  }
}
.approach:last-child {
  border-bottom: none;
}

.approach--not-active {
  opacity: 0.8;
  .approach__status {
    .status {
      background: $black20;
    }
  }
  .approach__number {
    .number__title {
      opacity: .5;
    }
  }
  .approach__element {
    .element__text {
      opacity: .5;
    }
    .element__value {
      opacity: .5;
    }
  }
  .approach__action-btn {
    opacity: .5;
  }
}

body.dark {
  .approach {
    border-bottom: 1px dashed $dividerBorderDarkBG;
  }
  .approach:last-child {
    border-bottom: none;
  }
  .approach--not-active {
    .approach__status {
      .status {
        background: $white20;
      }
    }
  }
}

</style>
