<template>
  <div class="sorting-filters">
    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__filters">
      <filter-radio-group
        :value="searchFilters.orderBy"
        :valueList="orderBy"
        :filterGroupOpened="orderByIsOpened"
        headerTitle="Сортировать по ..."
        @toggleOpened="orderByIsOpened = $event"
        @change="setSearchFiltersParam({ param: 'orderBy', newValue: $event })"
      />
    </div>

    <app-button
      class="mr-10 mb-10 ml-10"
      size14px
      fillArea
      :disabled="waiteExerciseListUpdate"
      @click="fetchTrainingProgramsList()"
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
    AppButton
  },
  data () {
    return {
      orderByIsOpened: true,
      orderBy: [
        {
          id: 'title',
          title: 'Названию'
        },
        {
          id: 'cardio',
          title: 'Кардио'
        },
        {
          id: 'power',
          title: 'Силе'
        },
        {
          id: 'endurance',
          title: 'Выносливости'
        },
        {
          id: 'flexibility',
          title: 'Гибкости'
        },
        {
          id: 'skill',
          title: 'Сложности'
        },
      ],
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.trainingPrograms.searchFilters,
      waiteExerciseListUpdate: state => state.trainingPrograms.waiteExerciseListUpdate,
    })
  },
  methods: {
    ...mapMutations({
      setSearchFiltersParam: 'trainingPrograms/setSearchFiltersParam',
    }),
    fetchTrainingProgramsList () {
      // const payload = {
      //   searchString: this.searchFilters.searchString,
      //   mediaType: this.searchFilters.mediaType?.id || null,
      //   trainingPlace: this.searchFilters.trainingPlace?.id || null,
      //   userType: this.searchFilters.userType?.id || null,

      //   orderBy: this.searchFilters.orderBy?.id || null,
      //   muscleGroup: [],
      // }

      // const muscleGroupIDs = []
      // this.searchFilters.muscleGroup.forEach(element => {
      //   muscleGroupIDs.push(element.id)
      // })

      // payload.muscleGroup = muscleGroupIDs.join(', ')

      // this.$store.commit('exercises/setWaiteExerciseListUpdate', true)
      // this.$store.dispatch('exercises/fetchExercisesList', payload).finally(() => {
      //   this.$store.commit('exercises/setWaiteExerciseListUpdate', false)
      // })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

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
  .sorting-filters__filters {
    padding: 10px;
  }
}

.dark-theme {
  .sorting-filters {
    background: $cardBackgroundDarkBG;
  }
}

</style>