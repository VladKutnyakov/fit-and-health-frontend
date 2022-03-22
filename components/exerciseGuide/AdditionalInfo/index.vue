<template>
  <div class="additional-info">
    <div class="additional-info__content">
      <div class="training-focus">
        <div class="chart-and-percents">
          <div class="chart">
            <p>график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)</p>
          </div>
          <div class="percents">
            <div class="percents__element">
              <p class="element__title">Сила:</p>
              <div class="element__value">{{ power }}%</div>
            </div>
            <div class="percents__element">
              <p class="element__title">Выносливость:</p>
              <div class="element__value">{{ endurance }}%</div>
            </div>
            <div class="percents__element">
              <p class="element__title">Гибкость:</p>
              <div class="element__value">{{ flexibility }}%</div>
            </div>
            <div class="percents__element">
              <p class="element__title">Кардио:</p>
              <div class="element__value">{{ cardio }}%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="actions">
        <app-button :disabled="!exerciseUser">
          <i class="ti-trash"></i>
        </app-button>

        <app-button
          class="ml-5 fill-area"
          :disabled="!exerciseUser"
          @click="openModal()"
        >Редактировать</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/basic/AppButton'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'

export default {
  components: {
    AppButton,
    AppInputCheckbox
  },
  data () {
    return {
      availability: false
    }
  },
  computed: {
    ...mapState({
      power: state => state.exercises.exerciseInfo.power || 0,
      endurance: state => state.exercises.exerciseInfo.endurance || 0,
      flexibility: state => state.exercises.exerciseInfo.flexibility || 0,
      cardio: state => state.exercises.exerciseInfo.cardio || 0,
      exerciseUser: state => state.exercises.exerciseInfo.user,
    })
  },
  methods: {
    openModal () {
      const exerciseInfo = JSON.parse(JSON.stringify(this.$store.state.exercises.exerciseInfo))
      this.$store.commit('exercises/setExerciseForm', exerciseInfo)

      this.$store.commit('exercises/setModalCondition', 'edit')
      this.$store.commit('exercises/setModalVisibility', { modal: 'exerciseFormModalActive', condition: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.additional-info {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .additional-info__content {
    background: $white;
    border-radius: 6px;
    box-shadow: $btnShadow;
    transition: $tr-02;
  }
  .actions {
    display: flex;
    padding: 10px;
    background: $black10;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}

.training-focus {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .chart {
    margin: 150px 0;
  }
  .percents {
    padding: 10px 10px 00px 10px;
    border-top: 1px dashed $blockBorder;
    .percents__element {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      .element__title {
        margin-right: auto;
      }
      .element__value {
        color: $green;
        font-weight: 500;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>