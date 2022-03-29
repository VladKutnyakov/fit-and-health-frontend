<template>
  <div class="training-program">

    <div class="training-program__fields">
      <p class="field-title">Программа тренировок:</p>
      <app-picker
        :value="trainingProgramForm.fields.trainingProgram"
        @openModal="openSelectTrainingProgramModal()"
        @clear="setTrainingProgram($event)"
      />

      <div class="preview-image-and-intensity">
        <img
          v-if="trainingProgramForm.fields.previewImage"
          class="preview-image"
          :src="trainingProgramForm.fields.previewImage"
          alt=""
        >
        <div class="preview-image--empty">
          <i class="ti-image icon"></i>
        </div>

        <div class="training-day__accent">
          <div
            class="accent accent--power"
            :style="{ height: `${trainingProgramForm.fields.trainingProgramAccent.power}%`}"
            title="Сила"
          >{{ trainingProgramForm.fields.trainingProgramAccent.power }}</div>

          <div
            class="accent accent--endurance"
            :style="{ height: `${trainingProgramForm.fields.trainingProgramAccent.endurance}%`}"
            title="Выносливость"
          >{{ trainingProgramForm.fields.trainingProgramAccent.endurance }}</div>

          <div
            class="accent accent--flexibility"
            :style="{ height: `${trainingProgramForm.fields.trainingProgramAccent.flexibility}%`}"
            title="Кардио"
          >{{ trainingProgramForm.fields.trainingProgramAccent.flexibility }}</div>

          <div
            class="accent accent--cardio"
            :style="{ height: `${trainingProgramForm.fields.trainingProgramAccent.cardio}%`}"
            title="Гибкость"
          >{{ trainingProgramForm.fields.trainingProgramAccent.cardio }}</div>
        </div>
      </div>

      <p class="field-title">Тренировочный день:</p>
      <app-select
        :value="trainingProgramForm.fields.trainingDay"
        :selectOptionsList="trainingProgramForm.fields.trainingProgramDaysList"
        @select="setTrainingDay($event)"
        @clear="setTrainingDay($event)"
      />
    </div>

    <div class="training-program__actions">
      <app-button>
        <i class="ti-pencil"></i>
      </app-button>
      <app-button class="ml-10 fill-area">Начать тренироваку</app-button>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPicker from '@/components/basic/AppPicker'
import AppSelect from '@/components/basic/AppSelect'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppPicker,
    AppSelect,
    AppButton
  },
  computed: {
    ...mapState({
      trainingProgramForm: state => state.trainingProcess.trainingProgramForm,
      trainingDay: state => state.trainingProcess.trainingDay,
    })
  },
  methods: {
    ...mapMutations({
      setTrainingProgramFormFieldValue: 'trainingProcess/setTrainingProgramFormFieldValue',
      clearTrainingProgramForm: 'trainingProcess/clearTrainingProgramForm',
      clearTrainingDayForm: 'trainingProcess/clearTrainingDayForm',
    }),
    openSelectTrainingProgramModal () {
      this.$store.commit('trainingProcess/toggleModalVisibility', {modal: 'selectTrainingProgramModalActive', condition: true})
    },
    setTrainingProgram($event) {
      this.$router.push('/training-diary/training-process')

      this.clearTrainingProgramForm(this.trainingProgram)
      this.clearTrainingDayForm(this.trainingDay)
    },
    setTrainingDay($event) {
      if ($event) {
        this.setTrainingProgramFormFieldValue({field: 'trainingDay', newValue: $event})
        this.$router.push(`/training-diary/training-process?trainingProgram=${this.$route.query?.trainingProgram}&trainingDay=${$event?.id}`)
        this.$store.dispatch('trainingProcess/fetchTrainingDay', { trainingDay: $event.id })
      } else {
        this.setTrainingProgramFormFieldValue({field: 'trainingDay', newValue: $event})
        this.$router.push(`/training-diary/training-process?trainingProgram=${this.$route.query?.trainingProgram || ''}`)
        this.clearTrainingDayForm()
      }
    },
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
  .training-program__fields {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .field-title {
      margin-bottom: 5px;
      padding: 0 10px;
      font-weight: 500;
    }
    .preview-image-and-intensity {
      flex: 1 1 auto;
      display: flex;
      .preview-image {
        margin: 10px 10px 10px 0;
        width: 100%;
        border-radius: 6px;
      }
      .preview-image--empty {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 10px 10px 0;
        width: 100%;
        height: 450px;
        background: $black05;
        border-radius: 6px;
        .icon {
          color: $black20;
          font-size: 80px;
        }
      }
      .training-day__accent {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        width: 30px;
        border-radius: 6px;
        background: $black10;
        overflow: hidden;
        .accent {
          display: flex;
          align-items: center;
          justify-content: center;
          color: $black05;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
        }
        .accent--power {
          width: 100%;
          background: $danger;
        }
        .accent--endurance {
          width: 100%;
          background: $warning;
        }
        .accent--flexibility {
          width: 100%;
          background: $success;
        }
        .accent--cardio {
          width: 100%;
          background: $info;
        }
      }
    }
  }
  .training-program__actions {
    display: flex;
    padding: 10px;
    background: $black10;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}

body.dark {
  .training-program {
    background: $cardBackgroundDarkBG;
    .training-program__actions {
      background: $black20;
    }
  }
}

</style>
