<template>
  <div class="sorting-filters">
    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__list">
      <filter-radio-group
        :filterGroupOpened="true"
        headerTitle="Сортировать по ..."
        :valueList="sortingBy"
        :defaultValue="searchFilters.sortingBy"
        @change="setSearchFiltersParam({ param: 'sortingBy', newValue: $event })"
      />

      <filter-checkbox-group
        :filterGroupOpened="true"
        headerTitle="Мышечные группы"
        :valueList="exerciseMusclesList"
        :defaultValue="searchFilters.muscleGroup"
        @change="setSearchFiltersParam({ param: 'muscleGroup', newValue: $event })"
      >
        <template v-slot:btnWrapper>
          <app-button size14px uppercase>Очистить</app-button>
          <app-button size14px uppercase>Выбрать все</app-button>
        </template>
      </filter-checkbox-group>
    </div>

    <app-button
      class="mr-10 mb-10 ml-10"
      size14px
      fillArea
      @click="fetchExercisesList()"
    >Применить фильтры</app-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    FilterRadioGroup,
    FilterCheckboxGroup,
    AppButton,
  },
  data () {
    return {
      sortingBy: [
        'Названию',
        'Белкам',
        'Жирам',
        'Углеводам',
        'Калорийности'
      ],
    }
  },
  computed: {
    ...mapState({
      exerciseMusclesList: state => state.exercises.exerciseMusclesList,
      searchFilters: state => state.exercises.searchFilters,
    })
  },
  methods: {
    ...mapMutations({
      setSearchFiltersParam: 'exercises/setSearchFiltersParam',
    }),
    fetchExercisesList () {
      const payload = this.searchFilters

      this.$store.commit('exercises/cleanExercisesList')
      this.$store.dispatch('exercises/fetchExercisesList', payload)
    }
  },
  created () {
    this.$store.commit('exercises/setSearchFiltersParam', { param: 'muscleGroup', newValue: this.exerciseMusclesList })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.sorting-filters {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  .sorting-filters__list {
    margin: 10px;
  }
}

body.dark {
  .sorting-filters {
    background: $cardBackgroundDarkBG;
  }
}

</style>
