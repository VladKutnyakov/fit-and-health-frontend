<template>
  <div class="search-users">
    <app-block-title>Поиск людей</app-block-title>

    <app-search-block
      :filters="false"
      @searchStringChanged="searchString = $event"
    />

    <div class="filter-by">
      <filter-radio-text-group
        :valueList="['Все', 'Онлайн', 'Оффлайн']"
        :defaultValue="filters.status"
        uppercase
        size14px
        @inputGroupValueChanged="filters.media = $event"
      />

      <p class="filter-by__divider">|</p>
      <filter-radio-text-group
        :valueList="['Все', 'Подписки', 'Подписчики']"
        :defaultValue="filters.type"
        uppercase
        size14px
        @inputGroupValueChanged="filters.type = $event"
      />
    </div>

    <founding-users />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import FoundingUsers from '@/components/subscriptions/Search/FoundingUsers/index'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    FoundingUsers,
    FilterRadioTextGroup
  },
  data () {
    return {
      filters: {
        status: 'Все',
        type: 'Подписки'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.search-users {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .filter-by {
    // border: 1px solid red;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    .filter-by__divider {
      // border: 1px solid red;
      margin: 0 20px;
      color: rgba(0,0,0,.2);
      user-select: none;
    }
  }
}

</style>
