<template>
  <div class="sorting-filters">
    <filter-radio-group
      class="mb-20"
      :filterGroupOpened="true"
      headerTitle="Сортировать по ..."
      :valueList="sotringOptions"
      :defaultValue="sotringDefault"
      @inputGroupValueChanged="filters.sorting = $event"
    />

    <filter-checkbox-group
      :filterGroupOpened="true"
      headerTitle="Время приема пищи"
      :valueList="mealtimeOptions"
      :defaultValue="mealtimeOptions"
      @inputGroupValueChanged="filters.mealtime = $event"
    />
  </div>
</template>

<script>
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'

export default {
  components: {
    FilterRadioGroup,
    FilterCheckboxGroup
  },
  data () {
    return {
      filters: {
        sorting: '',
        mealtime: [],
        cookingTimeLimit: {},
        kkalLimit: {}
      },
      sotringOptions: ['Названию (от А до Я)', 'Названию (от Я до А)', 'Просмотрам', 'Времени приготовления', 'Лайкам', 'Калорийности'],
      sotringDefault: 'Названию (от А до Я)',
      mealtimeOptions: ['Завтрак', 'Обед', 'Ланч', 'Ужин', 'Перекус'],
      cookingDifficultyOptions: ['Легкая', 'Средняя', 'Высокая', 'Очень высокая'],
      preferenceOptions: ['Низкокалорийние', 'Веганские', 'Вегетариантские'],
      productsOptions: ['Рыба', 'Гречка', 'Курица', 'Яйцо', 'Свинина', 'Фрукты']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.sorting-filters {
  // border: 1px solid red;
  padding: 10px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
}

body.dark {
  .sorting-filters {
    background: $cardBackgroundDarkBG;
  }
}

</style>