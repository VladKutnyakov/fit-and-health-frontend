<template>
  <div class="additional-info">
    <div class="additional-info__content">
      <training-focus />

      <div class="actions">
        <app-button dangerBtn>
          <i class="ti-trash"></i>
        </app-button>

        <app-button class="ml-5" @click="openConfirmStartTrainingProcessModal()">
          <i class="ti-control-play"></i>
        </app-button>

        <app-button
          class="ml-5 fill-area"
          @click="editTrainingProgram()"
        >Редактировать</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import TrainingFocus from '@/components/trainingProgram/AdditionalInfo/TrainingFocus'

export default {
  components: {
    AppButton,
    TrainingFocus
  },
  methods: {
    editTrainingProgram () {
      this.$router.push(`/training-programs/training-program-editor?trainingProgram=${this.$route.params.program || ''}`)
    },
    openConfirmStartTrainingProcessModal () {
      this.$store.commit('trainingProgramEditor/toggleModalVisibility', {modal: 'confirmStartTrainingProcessModalActive', condition: true})
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

.dark-theme {
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