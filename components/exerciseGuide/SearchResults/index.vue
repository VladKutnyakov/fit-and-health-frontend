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

    <div class="exercises-list">
      exercise
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FilterRadioTextGroup,
  },
  data () {
    return {
      searchString: '',
      filters: {
        media: 'Все',
        foodOrDrink: 'Все',
        type: 'Все'
      },
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
  .exercises-list {
    position: relative;
    margin-top: 20px;
    // .products-list__header {
    //   position: sticky;
    //   top: 0;
    //   display: flex;
    //   align-items: center;
    //   margin-bottom: 10px;
    //   padding: 5px 0;
    //   color: $white;
    //   background: $primary;
    //   border: 1px solid transparent;
    //   border-radius: 6px;
    //   .header__column-title {
    //     padding: 7px;
    //     width: 120px;
    //     text-transform: uppercase;
    //     text-align: center;
    //     font-size: 12px;
    //     font-weight: 500;
    //     border-right: 1px solid rgba(255,255,255,.4);
    //   }
    //   .header__column-title:nth-child(1) {
    //     width: 50px;
    //     min-width: 50px;
    //     max-width: 50px;
    //   }
    //   .header__column-title:nth-child(2) {
    //     width: 50px;
    //     min-width: 50px;
    //     max-width: 50px;
    //   }
    //   .header__column-title:nth-child(3) {
    //     flex: 1 1 auto;
    //     min-width: 200px;
    //   }
    //   .header__column-title:nth-child(9) {
    //     width: 50px;
    //     min-width: 50px;
    //     max-width: 50px;
    //   }
    //   .header__column-title:nth-child(10) {
    //     width: 50px;
    //     min-width: 50px;
    //     max-width: 50px;
    //     border: none;
    //   }
    // }
    // .pinned-products {
    //   margin: 20px 0;
    //   .pinned-products__block-title {
    //     padding: 10px 20px;
    //   }
    // }
    // .not-pinned-products {
    //   .not-pinned-products__block-title {
    //     padding: 10px 20px;
    //   }
    // }
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
