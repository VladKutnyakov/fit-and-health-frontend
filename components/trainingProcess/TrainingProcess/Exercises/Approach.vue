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
        :value="approach.repeats ? approach.repeats.value : null"
        :disabled="!approach.isActive"
        small
        textCenter
        selectOnFocus
        :placeholder="approach.repeats.target ? approach.repeats.target : '0'"
      />
    </div>
    <div class="approach__element">
      <p class="element__text">Отягощение, кг.</p>
      <app-input-text
        class="mt-5"
        :value="approach.additionalWeight ? approach.additionalWeight.value : null"
        :disabled="!approach.isActive"
        small
        textCenter
        selectOnFocus
        :placeholder="approach.additionalWeight.target ? approach.additionalWeight.target : '0'"
      />
    </div>
    <div class="approach__element">
      <p class="element__text">Время выполнения</p>
      <app-input-text
        class="mt-5"
        :value="approach.implementationTime.value ? approach.implementationTime.value : null"
        :disabled="!approach.isActive"
        small
        textCenter
        selectOnFocus
        :placeholder="approach.implementationTime.target ? approach.implementationTime.target : '00 : 00 : 00'"
      />
    </div>
    <div class="approach__element">
      <p class="element__text">Время отдыха</p>
      <app-input-text
        class="mt-5"
        :value="approach.restTime.value ? approach.restTime.value : null"
        :disabled="!approach.isActive"
        small
        textCenter
        selectOnFocus
        :placeholder="approach.restTime.target ? approach.restTime.target : '00 : 00 : 00'"
      />
    </div>

    <div class="approach__actions">
      <button
        v-if="!approach.isStarted"
        class="approach__action-btn"
        :class="[{ 'approach__action-btn--disabled': !approach.isActive }]"
        :disabled="!approach.isActive"
        @click="
          switchApproachExecution(approach),
          startImplementationTimer(approach)
        "
      >
        <i class="ti-control-play"></i>
      </button>

      <button
        v-if="approach.isStarted"
        class="approach__action-btn"
        :class="[{ 'approach__action-btn--disabled': !approach.isActive }]"
        :disabled="!approach.isActive"
        @click="
          switchApproachExecution(approach),
          stopImplementationTimer()
        "
      >
        <i class="ti-control-pause"></i>
      </button>

      <button
        class="approach__action-btn"
        :class="[{ 'approach__action-btn--disabled': !approach.isStarted }]"
        :disabled="!approach.isStarted"
        @click="completeApproach(approach)"
      >
        <i class="ti-control-stop"></i>
      </button>

      <button
        class="approach__action-btn"
        :class="[{ 'approach__action-btn--disabled': approach.isStarted || !trainingProgramForm.fields.isStarted }]"
        :disabled="approach.isStarted || !trainingProgramForm.fields.isStarted"
        @click="remove({ exercise, approach })"
      >
        <i class="ti-close"></i>
      </button>
    </div>
  </li>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'

export default {
  props: {
    exercise: Object,
    approach: [Object, Number]
  },
  data () {
    return {
      implementationTime: {
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      approachImplementationTimer: null,
      restTime: {
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      approachRestTimer: null,
    }
  },
  components: {
    AppInputText
  },
  computed: {
    ...mapState({
      trainingProgramForm: state => state.trainingProcess.trainingProgramForm,
    })
  },
  methods: {
    ...mapMutations({
      switchApproachExecution: 'trainingProcess/switchApproachExecution',
      completeApproach: 'trainingProcess/completeApproach',
      removeApproach: 'trainingProcess/removeApproach',
    }),
    startImplementationTimer (approach) {
      this.approachImplementationTimer = setInterval(() => {
        if (this.implementationTime.seconds < 59) {
          this.implementationTime.seconds += 1
        } else if (this.implementationTime.minutes < 59) {
          this.implementationTime.seconds = 0
          this.implementationTime.minutes += 1
        } else {
          this.implementationTime.seconds = 0
          this.implementationTime.minutes = 0
          this.implementationTime.hours += 1
        }

        const time = (this.implementationTime.hours <= 9 ? `0${this.implementationTime.hours}` : this.implementationTime.hours) + ' : ' + (this.implementationTime.minutes <= 9 ? `0${this.implementationTime.minutes}` : this.implementationTime.minutes) + ' : ' + (this.implementationTime.seconds <= 9 ? `0${this.implementationTime.seconds}` : this.implementationTime.seconds)
        // console.log(time)

        this.$store.commit('trainingProcess/updateApproachImplementationTime', { approach, time })
      }, 1000)
    },
    stopImplementationTimer () {
      clearInterval(this.approachImplementationTimer)
    },
    remove ({ exercise, approach }) {
      this.removeApproach({ exercise, approach })

      this.$emit('updateHeight')
    }
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
      background: $info;
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
      border: none;
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
    .approach__action-btn:hover {
      box-shadow: $btnHoverShadow;
    }
    .approach__action-btn:active {
      box-shadow: $btnActiveShadow;
    }
    .approach__action-btn--disabled {
      opacity: .5;
      box-shadow: none;
      cursor: default;
    }
  }
}
.approach:last-child {
  border-bottom: none;
}

.approach--not-active {
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
