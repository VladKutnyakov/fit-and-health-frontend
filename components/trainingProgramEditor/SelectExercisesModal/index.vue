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
                    <li class="exercises-list__item" v-for="(exercise, index) in item.exercises" :key="index">
                      <div class="item__exercise-title-and-type" @click="fetchExerciseInfo(exercise.id)">
                        <p class="exercises-title">{{ exercise.title }}</p>
                        <p class="exercise__target-muscles">{{ getMuscles(item, exercise) }}</p>
                      </div>
                      <div class="item__actions">
                        <i
                          class="actions-btn"
                          :class="[
                            { 'ti-pin-alt': !exercise.pinned },
                            { 'ti-pin2': exercise.pinned },
                            { 'actions-btn--active': exercise.pinned }
                          ]"
                          @click="changePinnedParam(exercise)"
                        ></i>
                        <i
                          class="actions-btn"
                          :class="[
                            { 'ti-heart-broken': !exercise.favorite },
                            { 'ti-heart': exercise.favorite },
                            { 'actions-btn--active': exercise.favorite }
                          ]"
                          @click="changeFavoriteParam(exercise)"
                        ></i>
                      </div>
                    </li>
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
      muscleGroupIsOpened: false,
      muscleGroups: [
        {
          title: 'Категория 1',
          previewImage: null,
          exercises: [
            {
              title: 'Упражнение 1',
              additionalMuscles: [],
            },
          ]
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
    getMuscles (muscleGroup, item) {
      const Muscles = [muscleGroup.title]

      for (let i = 0; i < item.additionalMuscles.length; i++) {
        Muscles.push(item.additionalMuscles[i].title)
      }

      return Muscles.join(', ')
    },
    fetchExerciseInfo (exercisesId) {
      this.$store.dispatch('exercises/fetchExerciseInfo', exercisesId)
    },
    changePinnedParam (item) {
      this.$store.dispatch('exercises/changePinnedParam', item.id)
    },
    changeFavoriteParam (item) {
      this.$store.dispatch('exercises/changeFavoriteParam', item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.content__exercises-list {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    height: calc(100vh - 300px);

    .search {
      padding: 10px;
      background: $hiddenBlockBG;
    }

    .categories {
      position: relative;
      flex: 1 1 auto;
      margin: 10px;
      // background: $white;
      border: 1px solid $black10;
      border-radius: 6px;
      background: $insetBlockBG;
      box-shadow: $insetBoxShadow;
      overflow-y: scroll;
      .categories__list {
        // border: 1px solid red;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        padding: 10px;
        .list__item {
          // border: 1px solid red;
          margin-bottom: 10px;
          .item__header {
            display: flex;
            align-items: center;
            padding: 10px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            .preview-image {
              border: 1px solid $blockBorder;
              border-radius: 6px;
              width: 60px;
              height: 60px;
            }
            .header__title {
              flex: 1 1 auto;
              margin-left: 10px;
              .title__text {
                font-size: 18px;
                font-weight: 500;
              }
              .title__exercises-count {
                font-size: 14px;
              }
            }
            .header__icon {
              margin-left: auto;
            }
          }
          .item__exercises-list {
            display: flex;
            flex-direction: column;
            margin: 0 5px;
            background: $black10;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            .exercises-list__item {
              // border: 1px solid red;
              display: flex;
              margin: 5px 10px 0px 10px;
              background: $white;
              border-radius: 6px;
              user-select: none;
              transition: $tr-02;
              .item__exercise-title-and-type {
                // border: 1px solid red;
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 5px 0 15px;
                padding: 10px 0;
                cursor: pointer;
                .exercises-title {
                  font-size: 14px;
                  font-weight: 500;
                  transition: $tr-02;
                }
                .exercise__target-muscles {
                  margin-top: 5px;
                  text-transform: uppercase;
                  font-size: 10px;
                }
              }
              .item__exercise-title-and-type:hover {
                .exercises-title {
                  color: $green;
                }
              }
              .item__actions {
                // border: 1px solid red;
                display: flex;
                align-self: stretch;
                align-items: center;
                justify-content: center;
                margin: 10px 0;
                padding: 0 10px;
                flex-direction: column;
                border-left: 1px dashed $blockBorder;
                .actions-btn {
                  margin: 5px 0px;
                  padding: 2.5px;
                  color: $black30;
                  transition: $tr-02;
                  cursor: pointer;
                }
                .actions-btn:hover {
                  color: $green;
                }
                .actions-btn--active {
                  color: $green;
                }
              }
            }
            .exercises-list__item:last-child {
              margin-bottom: 10px;
            }
          }
        }
        .list__item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }



</style>
