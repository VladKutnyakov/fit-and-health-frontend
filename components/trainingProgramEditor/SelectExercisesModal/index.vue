<template>
  <app-modal
    :isActive="selectExercisesModalActive"
    maxWidth="1200px"
    headerTitle="Добавить упражнение"
    :headerDescriptions="['Нажмите добавить, чтобы выбранные упраженния добавились в список.']"
    @close="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="search-recipes-and-products">
        <app-search-block
          small
          filters
          placeholder="Поиск упражнения"
          @openFilters="openFilters()"
        />

        <div v-if="filtersIsOpened" class="filters">
          <app-info
            small
            info
            text="Нажмите кнопку поиска, чтобы применить фильтры."
          />

          <div class="filters__groups">
            <div class="group">
              <p class="group__title">Категория</p>
              <app-input-checkbox
                small
                class="input-item"
                v-for="(item, index) in filterByCategories"
                :key="index"
                v-model="filterByCategoryChecked"
                :label="item"
                :value="item"
              />
            </div>

            <div class="group">
              <p class="group__title">Показывать</p>
              <app-input-radio
                small
                class="input-item"
                v-for="(item, index) in filterByUserImportances"
                :key="index"
                v-model="filterByUserImportanceChecked"
                :label="item"
                :value="item"
              />
            </div>
          </div>
        </div>

        <div class="founding__results">
          <div class="results__header">
            <p class="header__column"><i class="ti-pin-alt"></i></p>
            <p class="header__column"><i class="ti-heart"></i></p>
            <p class="header__column">Название</p>
            <p class="header__column">Категория</p>
            <p class="header__column">Подходов</p>
            <p class="header__column">Повторений</p>
            <p class="header__column">Отягощение</p>
            <p class="header__column"><i class="ti-trash"></i></p>
          </div>

          <div v-if="pinnedExercises.length > 0" class="pinned-exercises">
            <p class="pinned-exercises__title">Закрепленные упражнения</p>

            <ul class="exercises-list">
              <exercise
                v-for="(item, index) in pinnedExercises"
                :key="index"
                :item="item"
              />
            </ul>
          </div>

          <div v-if="notPinnedExercises.length > 0" class="not-pinned-exercises">
            <p v-if="pinnedExercises.length > 0" class="not-pinned-exercises__title">Не закрепленные упражнения</p>

            <ul class="exercises-list">
              <exercise
                v-for="(item, index) in notPinnedExercises"
                :key="index"
                :item="item"
              />
            </ul>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <div class="action-btns">
        <app-button
          uppercase
          size14px
          @click.native="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: false})"
        >Закрыть</app-button>
      </div>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppModal from "@/components/basic/AppModal"
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppInfo from '@/components/basic/AppInfo'
import AppInputRadio from '@/components/basic/AppInputRadio'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import Exercise from '@/components/trainingProgramEditor/SelectExercisesModal/Exercise'
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppModal,
    AppSearchBlock,
    AppInfo,
    AppInputRadio,
    AppInputCheckbox,
    Exercise,
    AppButton
  },
  data () {
    return {
      filtersIsOpened: false,
      filterByCategories: ['Шея', 'Широчайшие', 'Грудь'],
      filterByCategoryChecked: ['Шея', 'Широчайшие', 'Грудь'],
      filterByUserImportances: ['Все доступные', 'Добавленные мной', 'Закрепленные', 'Избранные'],
      filterByUserImportanceChecked: 'Все доступные',
    }
  },
  computed: {
    ...mapState({
      pinnedExercises: state => state.trainingProgramEditor.pinnedExercises,
      notPinnedExercises: state => state.trainingProgramEditor.notPinnedExercises,
      selectExercisesModalActive: state => state.trainingProgramEditor.selectExercisesModalActive,
    }),
  },
  watch: {
    selectExercisesModalActive (newValue) {
      if (newValue) {
        this.$store.dispatch('trainingProgramEditor/fetchExercisesList')
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    }),
    openFilters () {
      this.filtersIsOpened = !this.filtersIsOpened
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.search-recipes-and-products {
  display: flex;
  flex-direction: column;
  .filters {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .filters__groups {
      display: flex;
      margin-top: 10px;
      .group {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .group__title {
          margin-bottom: 10px;
          padding-bottom: 10px;
          font-size: 14px;
          font-weight: 500;
          border-bottom: 1px dashed $blockBorder;
        }
        .input-item {
          margin-bottom: 5px;
        }
      }
      .group:last-child {
        margin-right: 0;
      }
    }
  }
  .founding__results {
    margin-top: 20px;
    padding: 10px;
    height: 800px;
    background: $white;
    border: 1px solid $inputBorder;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0,0,0,.25);
    .results__header {
      position: sticky;
      top: -20px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $primary;
      border: 1px solid transparent;
      border-radius: 6px;
      .header__column {
        padding: 5px;
        width: 120px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column:nth-child(1) {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
      }
      .header__column:nth-child(2) {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
      }
      .header__column:nth-child(3) {
        flex: 1 1 auto;
        min-width: 200px;
      }
      .header__column:nth-child(4) {
        min-width: 150px;
      }
      .header__column:last-child {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
        border: none;
      }
    }
    .pinned-exercises {
      margin-bottom: 10px;
      .pinned-exercises__title {
        padding: 0 0 10px 10px;
      }
    }
    .not-pinned-exercises {
      .not-pinned-exercises__title {
        padding: 0 0 10px 10px;
      }
    }
  }
}

.action-btns {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

.dark-theme {
  .search-recipes-and-products {
    .filters {}
    .founding__results {
      background: $black20;
    }
  }
}

</style>
