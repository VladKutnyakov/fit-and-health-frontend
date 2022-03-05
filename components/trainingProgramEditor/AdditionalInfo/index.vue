<template>
  <div class="additional-info">
    <div class="additional-info__content">
      <training-focus />

      <div class="actions">
        <app-button >
          <i class="ti-trash"></i>
        </app-button>

        <app-button class="ml-5" >
          <i class="ti-control-play"></i>
        </app-button>

        <app-button
          class="ml-5 fill-area"
          @click="saveTrainingProgram()"
        >Сохранить</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import TrainingFocus from '@/components/trainingProgramEditor/AdditionalInfo/TrainingFocus'

export default {
  components: {
    AppButton,
    TrainingFocus
  },
  methods: {
    saveTrainingProgram () {
      const payload = JSON.parse(JSON.stringify(this.$store.state.trainingProgramEditor.trainingProgram.fields))

      this.$store.dispatch('trainingProgramEditor/saveTrainingProgram', payload)
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
    box-shadow: $cardShadow;
    transition: $tr-02;
    overflow: hidden;
  }
  .actions {
    display: flex;
    padding: 10px;
    background: $black10;
  }
}

body.dark {
  .additional-info {
    .additional-info__content {
      background: $cardBackgroundDarkBG;
    }
    .actions {
      background: $black15;
    }
  }
}

</style>