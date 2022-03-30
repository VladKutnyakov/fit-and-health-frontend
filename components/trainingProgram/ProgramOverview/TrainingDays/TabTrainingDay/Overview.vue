<template>
  <div class="overview">
    <div class="overview__params">
      <div class="params__element">
        <p class="element__text">Тип тренировочного дня:</p>
        <app-select
          :value="trainingProgramDays[selectedTrainingDay].trainingType"
          :selectOptionsList="trainingTypesList"
          @select="setTrainingProgramFormFieldValue({field: 'trainingProgramDays', subfield: 'trainingType', index: selectedTrainingDay, newValue: $event})"
        />
      </div>

      <div class="params__element fill-area">
        <p class="element__text">Комментарий к тренеровочному дню:</p>
        <app-textarea
          class="fill-area"
          :value="trainingProgramDays[selectedTrainingDay].comment"
          placeholder="Комментарий"
          @input="setTrainingProgramFormFieldValue({field: 'trainingProgramDays', subfield: 'comment', index: selectedTrainingDay, newValue: $event})"
        />
      </div>
    </div>

    <div class="training-video">
      <p class="training-video__text">Видео тренировки:</p>
      <div class="video">video</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'
import AppSelect from '@/components/basic/AppSelect'

export default {
  components: {
    AppInputText,
    AppTextarea,
    AppSelect
  },
  computed: {
    ...mapState({
      trainingTypesList: state => state.trainingProgramEditor.trainingTypesList,
      selectedTrainingDay: state => state.trainingProgramEditor.selectedTrainingDay,
      trainingProgramDays: state => state.trainingProgramEditor.trainingProgram.fields.trainingProgramDays
    })
  },
  methods: {
    ...mapMutations({
      setTrainingProgramFormFieldValue: 'trainingProgramEditor/setTrainingProgramFormFieldValue'
    }),
    selectTrainingType ($event, index) {
      console.log($event, index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.overview {
  display: flex;
  .overview__params {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .params__element {
      // flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .element__text {
        padding: 10px;
        font-weight: 500;
      }
    }
  }
  .training-video {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .training-video__text {
      padding: 10px;
      font-weight: 500;
    }
    .video {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $black10;
      width: 100%;
      max-width: 600px;
      min-width: 600px;
      height: 350px;
      border-radius: 6px;
    }
  }
}

</style>
