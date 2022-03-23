<template>
  <div class="search-results">

    <div class="search-results__search">
      <app-block-title>Поиск</app-block-title>

      <app-search-block
        class="mt-10 mr-10 mb-10 ml-10"
        :filters="false"
        placeholder="Название упражнения"
        @searchStringChanged="searchString = $event"
      />

      <div class="search__filters">
        <filter-radio-text-group
          :valueList="['Все', 'Фото', 'Видео']"
          :defaultValue="filters.media"
          uppercase
          size14px
          @inputGroupValueChanged="filters.media = $event"
        />
        <p class="filters__divider">|</p>
        <filter-radio-text-group
          :valueList="['Все', 'Домашние', 'Спортзал']"
          :defaultValue="filters.foodOrDrink"
          uppercase
          size14px
          @inputGroupValueChanged="filters.foodOrDrink = $event"
        />
        <p class="filters__divider">|</p>
        <filter-radio-text-group
          :valueList="['Все', 'Мои упражнения']"
          :defaultValue="filters.type"
          uppercase
          size14px
          @inputGroupValueChanged="filters.type = $event"
        />
      </div>
    </div>

    <div class="search-results__exercises-list">
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

        <ul class="exercises-list">
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
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import Exercise from '@/components/exerciseGuide/SearchResults/Exercise'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FilterRadioTextGroup,
    Exercise,
  },
  data () {
    return {
      searchString: '',
      filters: {
        media: 'Все',
        foodOrDrink: 'Все',
        type: 'Все'
      },
      pinnedExercises: [{}, {}],
      notPinnedExercises: [{}, {}, {}],
    }
  },
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
        margin: 0 20px;
        color: $dividerBorder;
        user-select: none;
      }
    }
  }
  .search-results__exercises-list {
    position: relative;
    .pinned-exercises {
      margin: 20px 0;
      .pinned-exercises__block-title {
        padding: 10px 20px;
      }
      .exercises-list {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .not-pinned-exercises {
      .not-pinned-exercises__block-title {
        padding: 10px 20px;
      }
      .exercises-list {
        display: flex;
        flex-wrap: wrap;
      }
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
