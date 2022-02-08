<template>
  <app-modal
    :isActive="selectExercisesModalActive"
    headerTitle="Добавить упражнение"
    :headerDescriptions="['Нажмите добавить, чтобы выбранные упраженния добавились в список.']"
    @close="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__exercises">
        exercises
      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        uppercase
        size14px
        class="modal-action-btn mr-auto"
        @click.native="saveOrUpdateProduct()"
      >{{ modalCondition === 'create' ? 'Сохранить' : 'Редактировать' }}</app-button>

      <app-button
        uppercase
        size14px
        @click.native="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: false})"
      >Отмена</app-button>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppModal from "@/components/basic/AppModal"
// import AppInputText from "@/components/basic/AppInputText"
// import AppInputCheckbox from "@/components/basic/AppInputCheckbox"
// import AppSelect from "@/components/basic/AppSelect"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppModal,
    // AppInputText,
    // AppInputCheckbox,
    // AppSelect,
    AppButton
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      modalCondition: state => state.trainingProgramEditor.modalCondition,
      selectExercisesModalActive: state => state.trainingProgramEditor.selectExercisesModalActive,
    }),
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    }),
  }
}
</script>
