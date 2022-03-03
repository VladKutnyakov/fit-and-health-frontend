<template>
  <div class="search-results">
    <div class="search-training-programs">
      <app-search-block placeholder="Поиск тренировочной программы" />

      <div class="filter-by">
        <filter-radio-text-group
          :valueList="['Все', 'Фото', 'Видео']"
          :defaultValue="filters.media"
          uppercase
          size14px
          @inputGroupValueChanged="filters.media = $event"
        />
        <p class="filter-by__divider">|</p>
        <filter-radio-text-group
          :valueList="['Все', 'Домашние', 'Спортзал']"
          :defaultValue="filters.foodOrDrink"
          uppercase
          size14px
          @inputGroupValueChanged="filters.foodOrDrink = $event"
        />
        <p class="filter-by__divider">|</p>
        <filter-radio-text-group
          :valueList="['Все', 'Мои программы']"
          :defaultValue="filters.type"
          uppercase
          size14px
          @inputGroupValueChanged="filters.type = $event"
        />
      </div>
    </div>

    <div class="found-programs">
      <found-program
        v-for="(item, index) in trainingProgramsList"
        :key="index"
        :item="item"
      />
    </div>

    <app-pagination />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/basic/AppButton'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import FoundProgram from '@/components/trainingProgramsBook/FoundProgram/index'
import AppPagination from '@/components/basic/AppPagination'

export default {
  components: {
    AppButton,
    AppSearchBlock,
    FilterRadioTextGroup,
    FoundProgram,
    AppPagination
  },
  data () {
    return {
      filters: {
        media: 'Все',
        foodOrDrink: 'Все',
        type: 'Все'
      }
    }
  },
  computed: {
    ...mapState({
      trainingProgramsList: state => state.trainingPrograms.trainingProgramsList
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .search-training-programs {
    padding: 10px;
    background: $white;
    box-shadow: $cardShadow;
    border-radius: 6px;
    transition: $tr-02;
    overflow: hidden;
    .filter-by {
      display: flex;
      margin-top: 20px;
      margin-bottom: 5px;
      .filter-by__divider {
        margin: 0 20px;
        color: rgba(34,41,47,.1);
        user-select: none;
      }
    }
  }
  .found-programs {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}

body.dark {
  .search-results {
    .search-training-programs {
      background: $cardBackgroundDarkBG;
      .filter-by {
        .filter-by__divider {
          color: rgba(214,220,225,.2);
        }
      }
    }
  }
}

</style>