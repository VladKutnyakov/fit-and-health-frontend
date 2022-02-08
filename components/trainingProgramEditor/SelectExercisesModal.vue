<template>
  <app-modal
    :isActive="selectExercisesModalActive"
    headerTitle="Добавить упражнение"
    :headerDescriptions="['Нажмите добавить, чтобы выбранные упраженния добавились в список.']"
    @close="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__exercises-list">
        <div class="search">
          <app-search-block small />
        </div>

        <div class="categories">
          <ul class="categories__list">
            <li class="list__item" v-for="(item, index) in muscleGroups" :key="index">
              <app-accordion :isOpened="muscleGroupIsOpened">
                <template v-slot:accordionHeader>
                  <div class="item__header" @click="muscleGroupIsOpened = !muscleGroupIsOpened">
                    <div class="preview-image">
                      <img :src="item.previewImage" :alt="item.title" class="image">
                    </div>
                    <div class="header__title">
                      <p class="title__text">{{ item.title }}</p>
                      <p class="title__exercises-count">Кол-во упражнений {{ item.exercises.length }}</p>
                    </div>
                    <i v-if="!muscleGroupIsOpened" class="ti-angle-double-down header__icon"></i>
                    <i v-if="muscleGroupIsOpened" class="ti-angle-double-up header__icon"></i>
                  </div>
                </template>
                <template v-slot:accordionHiddenContent>
                  <ul class="item__exercises-list">
                    <!-- <exercise
                      v-for="(item, index) in muscleGroup.exercises"
                      :key="index"
                      :item="item"
                      :muscleGroup="muscleGroup"
                      class="exercises-list__item"
                    /> -->
                  </ul>
                </template>
              </app-accordion>
            </li>
          </ul>
        </div>
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
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppAccordion from '@/components/basic/AppAccordion'
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppModal,
    AppSearchBlock,
    AppAccordion,
    AppButton
  },
  data() {
    return {
      muscleGroupIsOpened: true,
      muscleGroups: [
        {
          title: '1',
          previewImage: null,
          exercises: []
        }
      ]
    }
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
