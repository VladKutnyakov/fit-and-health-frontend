<template>
  <div class="exercises-list">
    <app-block-title>База упражнений</app-block-title>

    <div class="exercises-list__content">
      <div class="search">
        <app-search-block small />
      </div>

      <div class="categories">
        <ul class="categories__list">
          <!-- <app-scroll-block> -->
            <li v-for="(element, index) in exercises" :key="index" class="list__item">
              <app-accordion :isOpened="true">
                <template v-slot:accordionHeader>
                  <div class="item__header">
                    <div class="preview-image">
                      <img src="" alt="img" class="image">
                    </div>
                    <div class="header__title">
                      <p class="title__text">{{ element.title }}</p>
                      <p class="title__exercises-count">Кол-во упражнений {{ element.exercises.length }}</p>
                    </div>
                    <i class="ti-angle-double-down header__icon"></i>
                  </div>
                </template>
                <template v-slot:accordionHiddenContent>
                  <ul class="item__exercises-list">
                    <li
                      v-for="(exercise, index) in element.exercises"
                      :key="index"
                      class="exercises-list__item"
                      @click="fetchExerciseInfo(exercise.id)"
                    >
                      <div class="item__exercise-title-and-type">
                        <p class="exercises-title">{{ exercise.title }}</p>
                        <p class="exercise__target-muscles">{{ getMuscles(element, exercise) }}</p>
                      </div>
                      <div class="item__actions">
                        <i class="ti-pin-alt actions-btn"></i>
                        <!-- <i class="ti-pin2 actions-btn"></i> -->
                        <i class="ti-heart actions-btn"></i>
                      </div>
                    </li>
                  </ul>
                </template>
              </app-accordion>
            </li>
          <!-- </app-scroll-block> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppScrollBlock from '@/components/basic/AppScrollBlock'
import AppAccordion from '@/components/basic/AppAccordion'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    AppScrollBlock,
    AppAccordion
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      exercises: state => state.exercises.exercisesList
    })
  },
  methods: {
    getMuscles (muscleGroup, exercise) {
      const Muscles = [muscleGroup.title]

      for (let i = 0; i < exercise.additionalMuscles.length; i++) {
        Muscles.push(exercise.additionalMuscles[i].title)
      }

      return Muscles.join(', ')
    },
    fetchExerciseInfo (exercisesId) {
      this.$store.dispatch('exercises/fetchExerciseInfo', exercisesId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises-list {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .exercises-list__content {
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
          // background: $white;
          // border: 1px solid $blockBorder;
          // border-radius: 6px;
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
            padding: 10px 10px 5px 10px;
            margin: 0 5px;
            background: $black10;
            // border-top: 1px solid $blockBorder;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            .exercises-list__item {
              display: flex;
              align-items: center;
              margin-bottom: 5px;
              padding: 10px;
              background: $white;
              // border-bottom: 1px dashed $blockBorder;
              border-radius: 6px;
              user-select: none;
              cursor: pointer;
              transition: $tr-02;
              .item__exercise-title-and-type {
                flex: 1 1 auto;
                margin-left: 5px;
                margin-right: 5px;
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
              .item__actions {
                display: flex;
                align-self: stretch;
                align-items: center;
                padding-left: 10px;
                flex-direction: column;
                border-left: 1px dashed $blockBorder;
                .actions-btn {
                  margin: 5px 0px;
                  padding: 2.5px;
                  color: $black30;
                  // font-size: 18px;
                  transition: $tr-02;
                }
                .actions-btn:hover {
                  color: $green;
                }
              }
            }
            // .exercises-list__item:first-child {
            //   border-top: 1px solid $blockBorder;
            // }
            // .exercises-list__item:last-child {
            //   border-bottom: none;
            // }
            // .exercises-list__item:hover {
            //   .exercises-title {
            //     color: $green;
            //   }
            // }
          }
        }
        .category__item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
