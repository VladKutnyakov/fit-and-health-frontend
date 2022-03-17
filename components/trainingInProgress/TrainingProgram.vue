<template>
  <div class="training-program">

    <div class="training-program__fields">
      <p class="field-title">Программа тренировок:</p>
      <app-picker
        :value="trainingProgram.fields.program"
        @openModal="openSelectTrainingProgramModal()"
        @clear="setTrainingProgramFormFieldValue({field: 'program', newValue: $event})"
      />

      <div class="preview-image-and-intensity">
        <img class="preview-image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg" alt="">
        <div class="training-day__accent">
          <div class="accent" title="Сила">10</div>
          <div class="accent" title="Выносливость">40</div>
          <div class="accent" title="Кардио">30</div>
          <div class="accent" title="Гибкость">20</div>
        </div>
      </div>

      <p class="field-title">Тренировочный день:</p>
      <app-select
        :value="trainingProgram.fields.day"
        :selectOptionsList="trainingProgram.fields.trainingProgramDays"
        @select="
          setTrainingProgramFormFieldValue({field: 'day', newValue: $event}),
          fetchTrainingDay($event)
        "
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
    ...mapMutations({
      setTrainingProgramFormFieldValue: 'trainingProcess/setTrainingProgramFormFieldValue',
    }),
    openSelectTrainingProgramModal () {
      // this.$store.commit('/toggleModalVisibility', 'selectTrainingProgramModalActive')
    },
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
  overflow: hidden;
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
          color: $white;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
        }
        .accent:nth-child(1) {
          width: 100%;
          height: 10%;
          background: $dangerLight1;
        }
        .accent:nth-child(2) {
          width: 100%;
          height: 40%;
          background: $warningLight1;
        }
        .accent:nth-child(3) {
          width: 100%;
          height: 30%;
          background: $successLight1;
        }
        .accent:nth-child(4) {
          width: 100%;
          height: 20%;
          background: $infoLight1;
        }
      }
    }
    
  }
  .training-program__actions {
    display: flex;
    padding: 10px;
    background: $hiddenBlockBG;
  }
}

body.dark {
  .training-program {
    background: $cardBackgroundDarkBG;
  }
}

</style>
