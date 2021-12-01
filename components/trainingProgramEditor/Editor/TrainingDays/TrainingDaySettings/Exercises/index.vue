<template>
  <div class="exercises">
    <p class="exercises__block-title">Упражнения</p>
    <ul class="exercises-list">
      <li v-for="(item, index) in 4" :key="index" class="exercises-list__list-item">
        <div class="list-item__drag-drop-btn">
          <i class="ti-exchange-vertical"></i>
        </div>
        <p class="list-item__title">Присядания со штангой в тренажере Смитта</p>
        <div class="list-item__parameter">
          <p class="parameter__text">подходы</p>
          <p class="parameter__value">4</p>
        </div>
        <div class="list-item__parameter">
          <p class="parameter__text">повторений</p>
          <p class="parameter__value">10 - 12</p>
        </div>
        <div class="list-item__parameter">
          <p class="parameter__text">Отягощение</p>
          <p class="parameter__value">45 кг.</p>
        </div>
        <div class="list-item__edit-btn">
          <i class="ti-pencil"></i>
        </div>
        <div class="list-item__delete-btn">
          <i class="ti-close"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises {
  flex: 1 1 auto;
  margin-top: 10px;
  .exercises__block-title {
    padding: 10px 20px;
    font-weight: 500;
  }
  .exercises-list {
    // border: 1px solid red;
    padding: 10px;
    min-height: 600px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    
    .exercises-list__list-item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .list-item__drag-drop-btn {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        transition: $tr-02;
      }
      .list-item__drag-drop-btn:hover {
        color: $green;
      }
      .list-item__title {
        // border: 1px solid red;
        // flex: 1 1 auto;
        margin-left: 10px;
        font-weight: 500;
        margin-right: 40px;
      }
      .list-item__parameter {
        // border: 1px solid red;
        flex: 1 1 auto;
        margin-left: 10px;
        text-align: center;
        min-width: 100px;
        .parameter__text {
          text-transform: uppercase;
          font-size: 8px;
        }
        .parameter__value {
          margin-top: 5px;
          font-weight: 500;
        }
      }
      .list-item__edit-btn {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        transition: $tr-02;
      }
      .list-item__edit-btn:hover {
        color: $green;
      }
      .list-item__delete-btn {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        transition: $tr-02;
      }
      .list-item__delete-btn:hover {
        color: $green;
      }
    }
    .exercises-list__list-item:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
