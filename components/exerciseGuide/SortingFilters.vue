<template>
  <div class="sorting-filters">
    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__list">
      <filter-radio-group
        :value="searchFilters.sortingBy"
        :valueList="sortingBy"
        :filterGroupOpened="true"
        headerTitle="Сортировать по ..."
        @change="setSearchFiltersParam({ param: 'sortingBy', newValue: $event })"
      />

      <filter-checkbox-group
        :filterGroupOpened="true"
        headerTitle="Мышечные группы"
        :valueList="searchFilters.muscleGroupList"
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
        {
          id: 'TITLE',
          title: 'Названию'
        },
        {
          id: 'MUSCLE_GROUP',
          title: 'Мышечной группе'
        },
        {
          id: 'CARDIO',
          title: 'Кардио'
        },
        {
          id: 'POWER',
          title: 'Силе'
        },
        {
          id: 'ENDURANCE',
          title: 'Выносливости'
        },
        {
          id: 'FLEXIBILITY',
          title: 'Гибкости'
        },
        {
          id: 'SKILL',
          title: 'Сложности'
        },
      ],
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.exercises.searchFilters,
    })
  },
  methods: {
    ...mapMutations({
      setSearchFiltersParam: 'exercises/setSearchFiltersParam',
    }),
    fetchExercisesList () {
      const payload = {
        searchString: this.searchFilters.searchString,
        mediaType: this.searchFilters.mediaType?.id || null,
        trainingType: this.searchFilters.trainingType?.id || null,
        userType: this.searchFilters.userType?.id || null,

        sortingBy: this.searchFilters.sortingBy?.id || null,
        muscleGroup: [],
      }

      const muscleGroupIDs = []
      this.searchFilters.muscleGroup.forEach(element => {
        muscleGroupIDs.push(element.id)
      })

      payload.muscleGroup = muscleGroupIDs.join(', ')

      this.$store.commit('exercises/setWaiteExerciseListUpdate', true)
      this.$store.dispatch('exercises/fetchExercisesList', payload).finally(() => {
        this.$store.commit('exercises/setWaiteExerciseListUpdate', false)
      })
    }
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
