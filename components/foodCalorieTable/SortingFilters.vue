<template>
  <div class="sorting-filters">
    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__list">
      <filter-radio-group
        :value="searchFilters.orderBy"
        :valueList="orderByList"
        :filterGroupOpened="orderByIsOpened"
        headerTitle="Сортировать по ..."
        @toggleOpened="orderByIsOpened = $event"
        @change="setSearchFiltersParam({ param: 'orderBy', newValue: $event })"
      />

      <filter-checkbox-group
        :value="searchFilters.categories"
        :valueList="searchFilters.categoriesList"
        :filterGroupOpened="cateroriesListIsOpened"
        headerTitle="Категории продуктов"
        @toggleOpened="cateroriesListIsOpened = $event"
        @change="setSearchFiltersParam({ param: 'categories', newValue: $event })"
      />
    </div>

    <app-button
      class="mr-10 mb-10 ml-10"
      size14px
      fillArea
      :disabled="waiteProductsListUpdate"
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
      orderByIsOpened: true,
      cateroriesListIsOpened: true,
      orderByList: [
        {
          id: 'title',
          title: 'Названию',
        },
        {
          id: 'protein',
          title: 'Белкам',
        },
        {
          id: 'fats',
          title: 'Жирам',
        },
        {
          id: 'carb',
          title: 'Углеводам',
        },
        {
          id: 'kkal',
          title: 'Калорийности',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.foodCalorieTable.searchFilters,
      waiteProductsListUpdate: state => state.foodCalorieTable.waiteProductsListUpdate,
    })
  },
  methods: {
    ...mapMutations({
      setSearchFiltersParam: 'foodCalorieTable/setSearchFiltersParam',
    }),
    fetchProductsList () {
      const payload = {
        searchString: this.searchFilters.searchString,
        userType: this.searchFilters.userType?.id || null,
        userRelation: this.searchFilters.userRelation?.id || null,

        orderBy: this.searchFilters.orderBy?.id || null,
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
    },
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

.dark-theme {
  .sorting-filters {
    background: $cardBackgroundDarkBG;
  }
}

</style>
