<template>
  <div class="training-program">
    <p class="title">{{ trainingProgram.title }}1234124</p>

    <div class="training-day">
      <p class="select__title">Тренировочный день</p>
      <app-select
        :value="trainingProgramTargetDay"
        :selectOptionsList="trainingProgram.trainingProgramDays"
        @select="fetchTrainingDay($event)"
      />
    </div>

    <div class="chart-and-percents">
      <div class="chart">
        <p>график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)</p>
      </div>
      <div class="percents">
        <div class="percents__element">
          <p class="element__title">Сила:</p>
          <div class="element__value">60%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Выносливость:</p>
          <div class="element__value">20%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Гибкость:</p>
          <div class="element__value">5%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Кардио:</p>
          <div class="element__value">5%</div>
        </div>
      </div>
    </div>

    <div class="actions">
      <app-button>
        <i class="ti-pencil"></i>
      </app-button>
      <app-button class="ml-10 fill-area">Начать тренироваку</app-button>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppSelect from '@/components/basic/AppSelect'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppSelect,
    AppButton
  },
  data () {
    return {
      trainingProgramTargetDay: null
    }
  },
  computed: {
    ...mapState({
      trainingProgram: state => state.trainingProcess.trainingProgram
    })
  },
  methods: {
    fetchTrainingDay ($event) {
      this.trainingProgramTargetDay = $event

      if ($event) {
        this.$store.dispatch('trainingProcess/fetchTrainingDay', {trainingDayId: $event.id})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-program {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
  .title {
    flex: 1 1 auto;
    // margin: 0 10px;
    padding: 15px 10px;
    // text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    // border-bottom: 1px dashed $blockBorder;
  }
  .overview {
    display: flex;
    padding: 10px;
    .preview-image {
      align-self: center;
      // width: 120px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }
  .training-day {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    .select__title {
      margin-bottom: 5px;
      padding: 0 10px;
      font-weight: 500;
    }
  }
  .actions {
    display: flex;
    padding: 10px;
    background: $hiddenBlockBG;
  }
}

.chart-and-percents {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .chart {
    height: 300px;
  }
  .percents {
    margin-top: auto;
    padding: 10px 10px 0px 10px;
    border-top: 1px dashed $blockBorder;
    .percents__element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      .element__value {
        color: $green;
        font-weight: 600;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

body.dark {
  .training-program {
    background: $cardBackgroundDarkBG;
  }
}

</style>
