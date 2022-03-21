<template>
  <app-modal
    :isActive="selectTrainingProgramModalActive"
    headerTitle="Выбор тренировочной программы"
    :headerDescriptions="['Поиск и выбор тренировочной программы']"
    @close="toggleModalVisibility({modal: 'selectTrainingProgramModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__select-training-program-modal">
        <div
          class="training-program"
          v-for="(item, index) in trainingProgramsList"
          :key="index"
          @click="selectTrainingProgram(item)"
        >
          <pre>{{ item }}</pre>
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        uppercase
        size14px
        class="modal-action-btn mr-auto"
        @click.native="selectTrainingProgram(null)"
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
      trainingProgramsList: state => state.trainingProcess.trainingProgramsList,
      selectTrainingProgramModalActive: state => state.trainingProcess.selectTrainingProgramModalActive,
    })
  },
  watch: {
    selectTrainingProgramModalActive (newValue) {
      if (newValue) {
        this.$store.commit('trainingProcess/setTrainingProgramsList', [])
        this.$store.dispatch('trainingProcess/fetchTrainingProgramsList')
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'trainingProcess/toggleModalVisibility',
    }),
    selectTrainingProgram ($event) {
      // console.log($event)
      this.$store.commit('trainingProcess/setTrainingProgramFormFieldValue', { field: 'program', newValue: {id: $event.id, title: $event.title} })
      this.$store.commit('trainingProcess/setTrainingProgramFormFieldValue', { field: 'day', newValue: null })

      this.$router.push(`/training-diary/training-in-progress?trainingProgram=${$event?.id || ''}`)

      const payload = {
        trainingProgram: $event.id,
        trainingDay: null,
      }
      this.$store.dispatch('trainingProcess/fetchTrainingProgram', payload)

      this.toggleModalVisibility({ modal: 'selectTrainingProgramModalActive', condition: false })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.content__select-training-program-modal {
  .training-program {
    border: 1px solid red;
    margin-bottom: 20px;
  }
}

</style>
