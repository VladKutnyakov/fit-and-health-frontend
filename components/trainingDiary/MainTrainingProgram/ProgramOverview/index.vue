<template>
  <div class="program-overview">

    <div class="image-and-socials">
      <img class="image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg" />
      <div class="socials">
        <i class="ti-more"></i>
        <i class="ti-more"></i>
        <i class="ti-more"></i>
      </div>
    </div>

    <div class="overview">
      <p class="title">Название тренировочной программы</p>

      <div class="main-info">
        <div class="params-and-description">
          <div class="params">4 дня / 27 упражнений</div>
          <div class="description">Короткое описание</div>
        </div>

        <div class="added-marks"> добавленные отметки</div>
      </div>

      <div class="charts"> графики</div>
    </div>

    <div class="actions">
      <i class="ti-trash action-btn" title="Убрать с основной страницы"></i>
      <i class="ti-pencil action-btn" title="Редактировать"></i>
      <i class="ti-search action-btn" title="Подробнее"></i>
      <i class="ti-control-play action-btn" title="Начать тренировку"></i>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.program-overview {
  flex: 1 1 auto;
  display: flex;
}

.image-and-socials {
  display: flex;
  flex-direction: column;
  // margin: 10px 0;
  padding: 10px;
  border-right: 1px solid $blockBorder;
  .image {
    width: 100%;
    min-width: 400px;
    max-width: 400px;
    object-fit: cover;
    object-position: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
  }
}

.overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title {
    padding-bottom: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid $blockBorder;
  }
  .main-info {}
  .charts {}
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // margin-bottom: 10px;
  padding: 0 10px;
  background: $hiddenBlockBG;
  .action-btn {
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
  }
}

</style>
