<template>
  <app-modal
    :isActive="selectTrainingProgramModalActive"
    headerTitle="Выбор тренировочной программы"
    :headerDescriptions="['Поиск и выбор тренировочной программы']"
    @close="toggleModalVisibility({modal: 'selectTrainingProgramModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__select-training-program-modal">
        select-training-program-modal
      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        uppercase
        size14px
        class="modal-action-btn mr-auto"
        @click.native="selectTrainingProgram()"
      >Выбрать</app-button>

      <app-button
        uppercase
        size14px
        @click.native="toggleModalVisibility({modal: 'selectTrainingProgramModalActive', condition: false})"
      >Отмена</app-button>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppModal from "@/components/basic/AppModal"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppModal,
    AppButton
  },
  computed: {
    ...mapState({
      selectTrainingProgramModalActive: state => state.trainingProcess.selectTrainingProgramModalActive,
    })
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'trainingProcess/toggleModalVisibility',
    }),
    selectTrainingProgram () {
      console.log('selectTrainingProgram')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

// .content__select-training-program-modal {}

</style>
