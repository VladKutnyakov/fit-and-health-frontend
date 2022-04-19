<template>
  <app-modal
    :isActive="exerciseFormModalActive"
    maxWidth="1000px"
    :headerTitle="headerTitle"
    :headerDescriptions="headerDescriptions"
    @close="toggleModalVisibility({modal: 'exerciseFormModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__add-exercise-form">
        <div class="add-exercise-form__fields-group">

          <div class="fields-group__section">
            <p class="section__title">Общая информация</p>

            <div class="section__fields">
              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.title }]">Название</p>
                <app-input-text
                  :value="exerciseForm.fields.title"
                  :error="exerciseForm.errors.title"
                  placeholder="Введите значение"
                  @input="setExerciseFormFieldValue({field: 'title', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.muscleGroup }]">Группа мышц</p>
                <app-select
                  :value="exerciseForm.fields.muscleGroup"
                  :selectOptionsList="exerciseMusclesList"
                  :error="exerciseForm.errors.muscleGroup"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'muscleGroup', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'muscleGroup', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.additionalMuscles }]">Дополнительные мышцы</p>
                <app-select
                  :value="exerciseForm.fields.additionalMuscles"
                  :selectOptionsList="exerciseMusclesList"
                  :error="exerciseForm.errors.additionalMuscles"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'additionalMuscles', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'additionalMuscles', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.type }]">Тип упражнения</p>
                <app-select
                  :value="exerciseForm.fields.type"
                  :selectOptionsList="exerciseTypesList"
                  :error="exerciseForm.errors.type"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'type', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'type', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.sort }]">Вид упражнения</p>
                <app-select
                  :value="exerciseForm.fields.sort"
                  :selectOptionsList="exerciseSortsList"
                  :error="exerciseForm.errors.sort"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'sort', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'sort', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.exertion }]">Усилие</p>
                <app-select
                  :value="exerciseForm.fields.exertion"
                  :selectOptionsList="exerciseExertionsList"
                  :error="exerciseForm.errors.exertion"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'exertion', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'exertion', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.equipment }]">Оборудование</p>
                <app-select
                  :value="exerciseForm.fields.equipment"
                  :selectOptionsList="exerciseEquipmentsList"
                  :error="exerciseForm.errors.equipment"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'equipment', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'equipment', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.skill }]">Сложность выполнения</p>
                <app-select
                  :value="exerciseForm.fields.skill"
                  :selectOptionsList="skillsList"
                  :error="exerciseForm.errors.skill"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'skill', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'skill', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.trainingPlace }]">Предпочительное место выполнения</p>
                <app-select
                  :value="exerciseForm.fields.trainingPlace"
                  :selectOptionsList="trainingPlacesList"
                  :error="exerciseForm.errors.trainingPlace"
                  alignListLeft
                  alignSelectedValueLeft
                  placeholder="Введите значение"
                  @select="setExerciseFormFieldValue({field: 'trainingPlace', newValue: $event})"
                  @clear="setExerciseFormFieldValue({field: 'trainingPlace', newValue: $event})"
                />
              </div>
            </div>
          </div>

          <div class="fields-group__section">
            <p class="section__title">Акцент упражнения</p>

            <div class="section__fields">
              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.power }]">Сила</p>
                <app-input-text
                  :value="exerciseForm.fields.power"
                  :error="exerciseForm.errors.power"
                  placeholder="Введите значение"
                  @input="setExerciseFormFieldValue({field: 'power', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.endurance }]">Выносливость</p>
                <app-input-text
                  :value="exerciseForm.fields.endurance"
                  :error="exerciseForm.errors.endurance"
                  placeholder="Введите значение"
                  @input="setExerciseFormFieldValue({field: 'endurance', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.flexibility }]">Гибкость</p>
                <app-input-text
                  :value="exerciseForm.fields.flexibility"
                  :error="exerciseForm.errors.flexibility"
                  placeholder="Введите значение"
                  @input="setExerciseFormFieldValue({field: 'flexibility', newValue: $event})"
                />
              </div>

              <div class="field">
                <p class="field__title" :class="[{ 'field__title--active': exerciseForm.fields.cardio }]">Кардио</p>
                <app-input-text
                  :value="exerciseForm.fields.cardio"
                  :error="exerciseForm.errors.cardio"
                  placeholder="Введите значение"
                  @input="setExerciseFormFieldValue({field: 'cardio', newValue: $event})"
                />
              </div>
            </div>
          </div>

          <div class="fields-group__section">
            <p class="section__title">Техника выполнения</p>

            <div class="section__fields">
              <div class="video">video</div>
              <app-textarea
                class="description"
                :value="exerciseForm.fields.techniqueDescription"
                placeholder="Описнаие техники выполнения упражнения"
                @input="setExerciseFormFieldValue({field: 'techniqueDescription', newValue: $event})"
              />
            </div>
          </div>

          <div class="fields-group__section">
            <p class="section__title mb-10">Пользовательские параметры</p>

            <div class="section__fields">
              <div class="field">
                <app-input-checkbox
                  :value="exerciseForm.fields.favorite"
                  :error="exerciseForm.errors.favorite"
                  label="Добавить в избранное"
                  @change="setExerciseFormFieldValue({field: 'favorite', newValue: $event})"
                />
              </div>
            </div>

            <div class="section__fields">
              <div class="field">
                <app-input-checkbox
                  :value="exerciseForm.fields.pinned"
                  :error="exerciseForm.errors.pinned"
                  label="Добавить в закрепленное"
                  @change="setExerciseFormFieldValue({field: 'pinned', newValue: $event})"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        uppercase
        size14px
        class="modal-action-btn mr-auto"
        @click="confirmAction()"
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
import AppTextarea from '@/components/basic/AppTextarea'
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppPageInfo,
    AppModal,
    AppInputText,
    AppInputCheckbox,
    AppSelect,
    AppTextarea,
    AppButton
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      exerciseForm: state => state.exercises.exerciseForm,
      exerciseMusclesList: state => state.exercises.exerciseMusclesList,
      exerciseTypesList: state => state.exercises.exerciseTypesList,
      exerciseSortsList: state => state.exercises.exerciseSortsList,
      exerciseExertionsList: state => state.exercises.exerciseExertionsList,
      exerciseEquipmentsList: state => state.exercises.exerciseEquipmentsList,
      skillsList: state => state.exercises.skillsList,
      trainingPlacesList: state => state.exercises.trainingPlacesList,
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
  watch: {
    async exerciseFormModalActive (newValue) {
      if (newValue) {
        await this.$store.dispatch('exercises/fetchMuscles')
        await this.$store.dispatch('exercises/fethExerciseTypes')
        await this.$store.dispatch('exercises/fethExerciseSorts')
        await this.$store.dispatch('exercises/fethExerciseEquipments')
        await this.$store.dispatch('exercises/fethExerciseExertions')
        await this.$store.dispatch('exercises/fethSkills')
        await this.$store.dispatch('exercises/fethTrainingPlaces')
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'exercises/setModalVisibility',
      setExerciseFormFieldValue: 'exercises/setExerciseFormFieldValue',
      setExerciseFormFieldError: 'exercises/setExerciseFormFieldError'
    }),
    confirmAction () {
      const payload = JSON.parse(JSON.stringify(this.exerciseForm.fields))

      if (this.modalCondition === 'create') {
        this.$store.dispatch('exercises/saveNewExercise', payload)
      } else if (this.modalCondition === 'edit') {
        this.$store.dispatch('exercises/updateExercise', payload)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.content__add-exercise-form {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  .add-exercise-form__fields-group {
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    .fields-group__section {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      padding: 0 10px 10px 10px;
      border-bottom: 1px solid $dividerBorder;
      .section__title {
        padding: 0 20px;
        font-weight: 500;
      }
      .section__fields {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .field {
          // border: 1px solid red;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 100%;
          max-width: calc(100% / 2 - 5px);
          .field__title {
            padding: 0 10px 5px 10px;
            transition: $tr-02;
          }
          .field__title--active {
            color: $primary;
          }
        }
        .field:nth-child(2n) {
          margin-right: 0;
        }
        .video {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          width: 100%;
          height: 500px;
          background: $black05;
          border-radius: 6px;
        }
        .description {
          margin-bottom: 10px;
          width: 100%;
          height: 300px;
        }
      }
    }
    .fields-group__section:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
}

</style>
