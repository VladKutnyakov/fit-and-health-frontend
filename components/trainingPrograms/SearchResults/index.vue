<template>
  <div class="search-results">

    <div class="search-results__search">
      <app-block-title>Поиск</app-block-title>

      <app-search-block
        class="mt-10 mr-10 mb-10 ml-10"
        :filters="false"
        :disabled="waiteTrainingProgramsListUpdate"
        placeholder="Название тренировочной программы"
        @input="setSearchFiltersParam({ param: 'searchString', newValue: $event })"
        @clear="
          setSearchFiltersParam({ param: 'searchString', newValue: $event }),
          fetchTrainingProgramsList()
        "
        @search="fetchTrainingProgramsList()"
      />

      <div class="search__filters">
        <filter-radio-text-group
          :value="searchFilters.trainingPlace"
          :valueList="trainingPlacesList"
          uppercase
          size14px
          @change="
            setSearchFiltersParam({ param: 'trainingPlace', newValue: $event }),
            fetchTrainingProgramsList()
          "
        />
        <p class="filters__divider">|</p>
        <filter-radio-text-group
          :value="searchFilters.userType"
          :valueList="userTypesList"
          uppercase
          size14px
          @change="
            setSearchFiltersParam({ param: 'userType', newValue: $event }),
            fetchTrainingProgramsList()
          "
        />
      </div>
    </div>

    <div class="search-results__training-programs-list">

      <app-spinner
        v-if="waiteTrainingProgramsListUpdate"
        donutDouble
        rounded
      />

      <div v-if="pinnedTrainingPrograms.length > 0" class="pinned-training-programs">
        <p class="pinned-training-programs__block-title">Закрепленные тренировочные программы</p>

        <ul class="training-programs-list">
          <found-program
            v-for="(item, index) in pinnedTrainingPrograms"
            :key="index"
            :item="item"
          />
        </ul>
      </div>

      <div v-if="notPinnedTrainingPrograms.length > 0" class="not-pinned-training-programs">
        <p class="not-pinned-training-programs__block-title" v-if="pinnedTrainingPrograms.length > 0">Не закрепленные тренировочные программы</p>

        <ul class="training-programs-list" :class="[{ 'mt-20': pinnedTrainingPrograms.length <= 0 }]">
          <found-program
            v-for="(item, index) in notPinnedTrainingPrograms"
            :key="index"
            :item="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import FoundProgram from '@/components/trainingPrograms/FoundProgram/index'
// import AppSpinner from '@/components/basic/AppSpinner'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    AppSearchBlock,
    FilterRadioTextGroup,
    FoundProgram,
    // AppSpinner,
  },
  data () {
    return {
      trainingPlacesList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'HOME',
          title: 'Домашние'
        },
        {
          id: 'GYM',
          title: 'Спортзал'
        },
      ],
      userTypesList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'MY',
          title: 'Мои упражнения'
        },
      ],
      pinnedTrainingPrograms: [{}],
      notPinnedTrainingPrograms: [{}],
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.trainingPrograms.searchFilters,
      trainingProgramsList: state => state.trainingPrograms.trainingProgramsList,
      waiteTrainingProgramsListUpdate: state => state.trainingPrograms.waiteTrainingProgramsListUpdate,
    })
  },
  methods: {
    ...mapMutations({
      setSearchFiltersParam: 'trainingPrograms/setSearchFiltersParam',
    }),
    fetchTrainingProgramsList () {
      console.log('fetchTrainingProgramsList')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  margin-bottom: 80px;
  .search-results__search {
    display: flex;
    flex-direction: column;
    background: $white;
    box-shadow: $cardShadow;
    border-radius: 6px;
    transition: $tr-02;
    .search__filters {
      display: flex;
      margin: 10px 10px 15px 10px;
      .filters__divider {
        margin: 0 10px;
        color: $black20;
        user-select: none;
      }
    }
  }
  .search-results__training-programs-list {
    position: relative;
    .pinned-training-programs {
      display: flex;
      flex-direction:  column;
      margin-top: 20px;
      .pinned-training-programs__block-title {
        padding: 0 20px 10px 20px;
      }
      // .training-programs-list {
      //   display: flex;
      //   flex-wrap: wrap;
      // }
    }
    .not-pinned-training-programs {
      display: flex;
      flex-direction:  column;
      margin-top: 20px;
      .not-pinned-training-programs__block-title {
        padding: 0 20px 10px 20px;
      }
      // .training-programs-list {
      //   display: flex;
      //   flex-wrap: wrap;
      // }
    }
  }
}

.dark-theme {
  .search-results {
    .search-results__search {
      background: $cardBackgroundDarkBG;
      .search__filters {
        .filters__divider {
          color: $dividerBorderDarkBG;
        }
      }
    }
  }
}

</style>
