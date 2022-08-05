<template>
  <div class="search-results">

    <div class="search-results__search">
      <app-block-title>Поиск</app-block-title>

      <app-search-block
        class="mt-10 mr-10 mb-10 ml-10"
        :disabled="waiteProductsListUpdate"
        placeholder="Название рациона"
        @input="setSearchFiltersParam({ param: 'searchString', newValue: $event })"
        @clear="
          setSearchFiltersParam({ param: 'searchString', newValue: $event }),
          fetchExercisesList()
        "
        @search="fetchExercisesList()"
      />

      <div class="search__filters">
        <filter-radio-text-group
          :value="searchFilters.userType"
          :valueList="userTypesList"
          uppercase
          size14px
          @change="
            setSearchFiltersParam({ param: 'userType', newValue: $event }),
            fetchExercisesList()
          "
        />

        <p class="filters__divider">|</p>

        <filter-radio-text-group
          :value="searchFilters.userRelation"
          :valueList="userRelationsList"
          uppercase
          size14px
          @change="
            setSearchFiltersParam({ param: 'userRelation', newValue: $event }),
            fetchProductsList()
          "
        />
      </div>
    </div>

    <div class="search-results__exercises-list">
      <div v-if="pinnedProducts.length > 0" class="pinned-exercises">
        <p class="pinned-exercises__block-title">Закрепленные рационы</p>

        <ul class="exercises-list">
          <exercise
            v-for="(item, index) in pinnedProducts"
            :key="index"
            :exercise="item"
          />
        </ul>
      </div>

      <div v-if="notPinnedProducts.length > 0" class="not-pinned-exercises">
        <p class="not-pinned-exercises__block-title" v-if="pinnedProducts.length > 0">Не закрепленные рационы</p>

        <ul class="exercises-list" :class="[{ 'mt-20': pinnedProducts.length <= 0 }]">
          <exercise
            v-for="(item, index) in notPinnedProducts"
            :key="index"
            :exercise="item"
          />
        </ul>
      </div>

      <app-spinner
        v-if="waiteProductsListUpdate"
        donutDouble
        rounded
      />
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
      userTypesList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'MY',
          title: 'Мои рационы'
        },
      ],
      userRelationsList: [
        {
          id: 'ALL',
          title: 'Все'
        },
        {
          id: 'PINNED',
          title: 'Закрепленные'
        },
        {
          id: 'FAVORITE',
          title: 'Избранные'
        },
      ],
    }
  },
  computed: {
    ...mapState({
      searchFilters: state => state.foodCalorieTable.searchFilters,
      pinnedProducts: state => state.foodCalorieTable.pinnedProducts,
      notPinnedProducts: state => state.foodCalorieTable.notPinnedProducts,
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
        categories: [],
      }

      const categoriesIDs = []
      this.searchFilters.categories.forEach(element => {
        categoriesIDs.push(element.id)
      })

      payload.categories = categoriesIDs.join(', ')

      this.$store.commit('foodCalorieTable/setWaiteProductsListUpdate', true)
      this.$store.dispatch('foodCalorieTable/fetchProductsList', payload).finally(() => {
        this.$store.commit('foodCalorieTable/setWaiteProductsListUpdate', false)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

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
