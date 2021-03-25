<template>
  <div class="filters-and-actions">
    <div class="filters">
      <i class="ti-view-list-alt filter-btn" title="Отобразить таблицей"></i>
      <i class="ti-view-grid filter-btn" title="Отобразить карточками"></i>
      <i class="ti-filter filter-btn" title="Настроить фильтры"></i>
    </div>
    <div class="actions">
      <i class="ti-bookmark action-btn action-btn--active" title="Добавить в избранное"></i>
      <i class="ti-direction-alt action-btn" title="Переместить"></i>
      <i class="ti-trash action-btn" title="Удалить"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.filters-and-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  .filters {
    .filter-btn {
      margin-right: 5px;
      padding: 5px;
      font-size: 20px;
      transition: $tr-02;
      cursor: pointer;
    }
    .filter-btn:hover {
      color: $green;
    }
  }
  .actions {
    .action-btn {
      margin-right: 5px;
      padding: 5px;
      color: $black40;
      font-size: 20px;
      transition: $tr-02;
      cursor: pointer;
    }
    .action-btn--active {
      color: $black;
    }
    .action-btn--active:hover {
      color: $green;
    }
  }
}

</style>
