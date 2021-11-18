<template>
  <app-modal
    :isActive="exerciseFormModalActive"
    maxWidth="1200px"
    :headerTitle="headerTitle"
    :headerDescriptions="headerDescriptions"
    @close="toggleModalVisibility({modal: 'exerciseFormModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__add-exercise-form">
        <div class="add-exercise-form__fields-group">

          <div class="fields-group__section">
            <p class="section__title">Общая информация</p>

            <div class="fields-group__field">
              <p class="field__title">Название</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Группа мышц</p>
              <app-select
                :value="exerciseForm.fields.title"
                :selectOptionsList="[]"
                :error="exerciseForm.errors.title"
                alignListLeft
                alignSelectedValueLeft
                placeholder="Введите значение"
                @select="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Дополнительные мышцы</p>
              <app-select
                :value="exerciseForm.fields.title"
                :selectOptionsList="[]"
                :error="exerciseForm.errors.title"
                alignListLeft
                alignSelectedValueLeft
                placeholder="Введите значение"
                @select="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Тип упражнения</p>
              <app-select
                :value="exerciseForm.fields.title"
                :selectOptionsList="[]"
                :error="exerciseForm.errors.title"
                alignListLeft
                alignSelectedValueLeft
                placeholder="Введите значение"
                @select="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Вид упражнения</p>
              <app-select
                :value="exerciseForm.fields.title"
                :selectOptionsList="[]"
                :error="exerciseForm.errors.title"
                alignListLeft
                alignSelectedValueLeft
                placeholder="Введите значение"
                @select="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Усилие</p>
              <app-select
                :value="exerciseForm.fields.title"
                :selectOptionsList="[]"
                :error="exerciseForm.errors.title"
                alignListLeft
                alignSelectedValueLeft
                placeholder="Введите значение"
                @select="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Оборудование</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Сложность выполнения</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>
          </div>

          <div class="fields-group__section mt-10">
            <p class="section__title">Акцент упражнения</p>

            <div class="fields-group__field">
              <p class="field__title">Сила</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Выносливость</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Гибкость</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>

            <div class="fields-group__field">
              <p class="field__title">Кардио</p>
              <app-input-text
                :value="exerciseForm.fields.title"
                :error="exerciseForm.errors.title"
                placeholder="Введите значение"
                @input="
                  setExerciseFormFieldValue({field: 'title', newValue: $event}),
                  setExerciseFormFieldError({field: 'title', enabled: false, errorMessage: null})
                "
              />
            </div>
          </div>
        </div>

        <div class="add-exercise-form__fields-group">
          Видео инструкция <br>
          Описание <br>

          избранное <br>
          Закреплено <br>
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        uppercase
        size14px
        class="modal-action-btn mr-auto"
        @click="saveOrUpdateProduct()"
      >{{ modalCondition === 'create' ? 'Сохранить' : 'Редактировать' }}</app-button>

      <app-button
        uppercase
        size14px
        @click="toggleModalVisibility({modal: 'exerciseFormModalActive', condition: false})"
      >Отмена</app-button>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppPageInfo from "@/components/basic/AppPageInfo"
import AppModal from "@/components/basic/AppModal"
import AppInputText from "@/components/basic/AppInputText"
import AppInputCheckbox from "@/components/basic/AppInputCheckbox"
import AppSelect from "@/components/basic/AppSelect"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppPageInfo,
    AppModal,
    AppInputText,
    AppInputCheckbox,
    AppSelect,
    AppButton
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      exerciseForm: state => state.exercises.exerciseForm,
      modalCondition: state => state.exercises.modalCondition,
      exerciseFormModalActive: state => state.exercises.exerciseFormModalActive
    }),
    headerTitle () {
      if (this.modalCondition === 'create') {
        return 'Добавить упражнение'
      } else {
        return 'Редактировать упражнение'
      }
    },
    headerDescriptions () {
      if (this.modalCondition === 'create') {
        return ['Заполните форму и нажмите "Cохранить", чтобы добавить новое упражнение в общую базу.', 'Новое упражнение будет доступен только для вас.']
      } else {
        return ['Отредактируйте информацию и нажмите "Редактировать", чтобы обновить данные об упражнение.']
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'exercises/setModalVisibility',
      // setProductFormFieldValue: 'foodCalorieTable/setProductFormFieldValue',
      // setProductFormFieldError: 'foodCalorieTable/setProductFormFieldError'
    }),
    // saveOrUpdateProduct() {
    //   // $requiredFieldsValidation --> custom pluguin в папке pluguins
    //   const isValid = this.$requiredFieldsValidation(this.productForm, ['title', 'protein', 'fats', 'carb', 'kkal', 'category'], 'foodCalorieTable/setProductFormFieldError', null)

    //   if (isValid) {
    //     if (this.modalCondition === 'create') {
    //       this.$store.dispatch('foodCalorieTable/saveProduct')
    //     } else if (this.modalCondition === 'edit') {
    //       this.$store.dispatch('foodCalorieTable/updateProduct')
    //     }
    //   } else {
    //     const notice = {
    //       id: Date.now(),
    //       type: 'alert',
    //       message: 'Заполните обязательные поля.',
    //       timeToShow: 5000,
    //       active: true
    //     }
    //     this.$store.commit('notifications/addNewNotice', notice)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.content__add-exercise-form {
  display: flex;
  .add-exercise-form__fields-group {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: calc(50% - 10px);
    .fields-group__section {
      padding: 10px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .section__title {
        padding: 0 10px 10px 10px;
        font-weight: 500;
        border-bottom: 1px dashed $blockBorder;
      }
      .fields-group__field {
        .field__title {
          padding: 10px 10px 5px 10px;
        }
      }
    }
  }
  .add-exercise-form__fields-group:first-child {
    margin-right: 10px;
  }
  .add-exercise-form__fields-group:last-child {
    margin-left: 10px;
  }
}

</style>
