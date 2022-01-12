<template>
  <div class="training-program">
    <app-block-title>Тренировочная программа</app-block-title>

    <div class="training-program__content">
      <p class="title">{{ trainingProgram.title }}</p>

      <div class="training-day">
        <p class="select__title">Тренировочный день</p>
        <app-select
          :value="trainingProgramTargetDay"
          :selectOptionsList="trainingProgram.trainingProgramDays"
          @select="fetchTrainingDay($event)"
        />
      </div>

      <div v-if="trainingProgramTargetDay" class="chart-and-percents">
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

      <!-- <img class="preview" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"> -->

      <div v-if="trainingProgramTargetDay" class="actions">
        <!-- <div class="actions__select">
          <p class="select__title">Тренировочный день</p>
          <app-select
            :value="trainingProgramTargetDay"
            :selectOptionsList="trainingProgram.trainingProgramDays"
            @select="fetchTrainingDay($event)"
          />
        </div> -->
        
        <div class="actions__btns">
          <app-button>
            <i class="ti-pencil"></i>
          </app-button>
          <app-button class="ml-10 fill-area">Начать тренироваку</app-button>
        </div>
      </div>

     </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import AppSelect from '@/components/basic/AppSelect'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
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
  .training-program__content {
    display: flex;
    flex-direction: column;
    // padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .title {
      margin: 0 10px;
      padding: 10px;
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
      // border-bottom: 1px dashed $blockBorder;
    }
    .training-day {
      display: flex;
      flex-direction: column;
      // margin-top: 10px;
      padding: 10px;
      background: $hiddenBlockBG;
      // border: 1px solid $blockBorder;
      // border-radius: 6px;
      // border-bottom: 1px dashed $blockBorder;
      .select__title {
        margin-bottom: 5px;
        padding: 0 10px;
        font-weight: 500;
      }
    }
    .preview {
      margin: 10px;
      align-self: center;
      width: calc(100% - 20px);
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .actions {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background: $hiddenBlockBG;
      // .actions__select {
      //   display: flex;
      //   flex-direction: column;
      //   padding: 10px;
      //   background: $white;
      //   // border: 1px solid $blockBorder;
      //   border-radius: 6px;
      //   .select__title {
      //     margin-bottom: 5px;
      //     padding: 0 10px;
      //     font-weight: 500;
      //   }
      // }
      .actions__btns {
        display: flex;
        // margin-top: 10px;
      }
    }
  }
}

.chart-and-percents {
  display: flex;
  flex-direction: column;
  padding: 10px;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;

  .chart {
    // border: 1px solid red;
    height: 300px;
  }
  .percents {
    margin-top: auto;
    // padding-top: 10px;
    padding: 10px 10px 0px 10px;
    border-top: 1px dashed $blockBorder;
    .percents__element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      .element__title {
        // font-size: 18px;
        // font-weight: 500;
      }
      .element__value {
        color: $green;
        // font-size: 18px;
        font-weight: 600;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
