<template>
  <li class="approach" :class="[{ 'approach--not-active': false }]">
    <div class="approach__status">
      <div class="status"></div>
    </div>
    <div class="approach__number">
      <p class="number__title">Подход {{ approach }}</p>
    </div>
    <div class="approach__element">
      <p class="element__text">Повторений</p>
      <p class="element__value">--</p>
    </div>
    <div class="approach__element">
      <p class="element__text">Отягощение</p>
      <p class="element__value">-- кг.</p>
    </div>
    <div class="approach__element">
      <p class="element__text">Время выполнения</p>
      <p class="element__value">{{ item.implementationTime ? item.implementationTime : '00 : 00 : 00' }}</p>
    </div>
    <div class="approach__element">
      <p class="element__text">Время отдыха</p>
      <p class="element__value">{{ item.restTime ? item.restTime : '00 : 00 : 00' }}</p>
    </div>
    <div class="approach__action-btn">
      <i class="ti-trash"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    approach: Number
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.approach {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  background: $white;
  // border-bottom: 1px dashed $blockBorder;
  border-radius: 6px;
  .approach__status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
    .status {
      width: 16px;
      height: 16px;
      background: $red;
      border-radius: 50%;
    }
  }
  .approach__number {
    margin-left: 10px;
    margin-right: auto;
    .number__title {
      font-weight: 500;
      white-space: nowrap;
    }
  }
  .approach__element {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    max-width: 150px;
    .element__text {
      text-transform: uppercase;
      font-size: 10px;
    }
    .element__value {
      margin-top: 5px;
      font-weight: 500;
    }
  }
  .approach__action-btn {
    // border: 1px solid red;
    padding: 10px;
  }
}
.approach:last-child {
  border-bottom: none;
  margin-bottom: 5px;
}
.approach--not-active {
  opacity: 0.8;
  .approach__status {
    .status {
      background: $gray;
    }
  }
  .approach__number {
    .number__title {
      opacity: .5;
    }
  }
  .approach__element {
    .element__text {
      opacity: .5;
    }
    .element__value {
      opacity: .5;
    }
  }
  .approach__action-btn {
    opacity: .5;
  }
}
</style>
