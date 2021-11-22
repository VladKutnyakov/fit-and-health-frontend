<template>
  <div class="added-marks">
    <div class="mark">
      <p class="mark__text">Низкоуглеводное</p>
      <i class="ti-close mark__icon"></i>
    </div>
    <div class="mark">
      <p class="mark__text">Веганское</p>
      <i class="ti-close mark__icon"></i>
    </div>
    <div class="mark">
      <p class="mark__text">Без ГМО</p>
      <i class="ti-close mark__icon"></i>
    </div>
    <div class="mark">
      <p class="mark__text">Для набора массы</p>
      <i class="ti-close mark__icon"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.added-marks {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  // margin-bottom: 5px;
  // padding-top: 10px;
  // border-top: 1px solid $blockBorder;
  .mark {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 5px 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    .mark__text {
      font-size: 14px;
      white-space: nowrap;
    }
    .mark__icon {
      margin-left: 10px;
      font-size: 10px;
      cursor: pointer;
    }
  }
}

</style>
