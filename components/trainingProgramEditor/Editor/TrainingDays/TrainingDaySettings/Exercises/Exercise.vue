<template>
  <li class="exercise">
    <div class="list-item__drag-drop-btn">
      <i class="ti-exchange-vertical"></i>
    </div>
    <p class="list-item__title">{{ item.exercise.title }}</p>
    <div class="list-item__parameter">
      <p class="parameter__text">подходы</p>
      <p class="parameter__value">{{ item.approaches }}</p>
    </div>
    <div class="list-item__parameter">
      <p class="parameter__text">повторений</p>
      <p class="parameter__value">{{ item.repeats }}</p>
    </div>
    <div class="list-item__parameter">
      <p class="parameter__text">Отягощение</p>
      <p class="parameter__value">{{ item.additionalWeight }} кг.</p>
    </div>
    <div class="list-item__edit-btn">
      <i class="ti-pencil"></i>
    </div>
    <div class="list-item__delete-btn">
      <i class="ti-close"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise {
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
.exercise:last-child {
  margin-bottom: 0;
}

</style>
