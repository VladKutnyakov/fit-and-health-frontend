<template>
  <div class="search-results">

    <div class="search-results__search">
      <app-block-title>Поиск</app-block-title>

      <app-search-block
        class="mt-10 mr-10 mb-10 ml-10"
        :filters="false"
        placeholder="Название упражнения"
        @input="setSearchFiltersParam({ param: 'searchString', newValue: $event })"
        @search="fetchExercisesList()"
      />

      <div class="search__filters">
        <filter-radio-text-group
          :value="searchFilters.mediaType"
          :valueList="mediaTypesList"
          uppercase
          size14px
          @change="setSearchFiltersParam({ param: 'mediaType', newValue: $event })"
        />
        <p class="filters__divider">|</p>
        <filter-radio-text-group
          :value="searchFilters.trainingType"
          :valueList="trainingTypesList"
          uppercase
          size14px
          @change="setSearchFiltersParam({ param: 'trainingType', newValue: $event })"
        />
        <p class="filters__divider">|</p>
        <filter-radio-text-group
          :value="searchFilters.userType"
          :valueList="userTypesList"
          uppercase
          size14px
          @change="setSearchFiltersParam({ param: 'userType', newValue: $event })"
        />
      </div>
    </div>

    <div class="search-results__exercises-list">

      <app-spinner
        v-if="waiteExerciseListUpdate"
        donutDouble
        rounded
      />

      <div v-if="pinnedExercises.length > 0" class="pinned-exercises">
        <p class="pinned-exercises__block-title">Закрепленные упражнения</p>

        <ul class="exercises-list">
          <exercise
            v-for="(item, index) in pinnedExercises"
            :key="index"
            :exercise="item"
          />
        </ul>
      </div>

      <div v-if="notPinnedExercises.length > 0" class="not-pinned-exercises">
        <p class="not-pinned-exercises__block-title" v-if="pinnedExercises.length > 0">Не закрепленные упражнения</p>

        <ul class="exercises-list" :class="[{ 'mt-20': pinnedExercises.length <= 0 }]">
          <exercise
            v-for="(item, index) in notPinnedExercises"
            :key="index"
            :exercise="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import Exercise from '@/components/exerciseGuide/SearchResults/Exercise'

import AppSpinner from '@/components/basic/AppSpinner'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FilterRadioTextGroup,
    Exercise,
    AppSpinner,
  },
  data () {
    return {
      mediaTypesList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'FOTO',
          title: 'Фото'
        },
        {
          id: 'VIDEO',
          title: 'Видео'
        },
      ],
      trainingTypesList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'HOME_WORKOUTS',
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
      ]
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.exercises.searchFilters,
      pinnedExercises: state => state.exercises.pinnedExercises,
      notPinnedExercises: state => state.exercises.notPinnedExercises,
      waiteExerciseListUpdate: state => state.exercises.waiteExerciseListUpdate,
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

        sortingBy: this.searchFilters.sortingBy,
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
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
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
  .search-results__exercises-list {
    position: relative;
    .pinned-exercises {
      display: flex;
      flex-direction:  column;
      margin-top: 20px;
      .pinned-exercises__block-title {
        padding: 0 20px 10px 20px;
      }
      // .exercises-list {
      //   display: flex;
      //   flex-wrap: wrap;
      // }
    }
    .not-pinned-exercises {
      display: flex;
      flex-direction:  column;
      margin-top: 20px;
      .not-pinned-exercises__block-title {
        padding: 0 20px 10px 20px;
      }
      // .exercises-list {
      //   display: flex;
      //   flex-wrap: wrap;
      // }
    }
  }
}

body.dark {
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
