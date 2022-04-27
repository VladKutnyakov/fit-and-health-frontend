<template>
  <div class="added-marks">
    <div class="added-marks__block-title">Добавленные отметки:</div>
    <div class="added-marks__marks">
      <div class="mark">mark 1</div>
      <div class="mark">mark 2</div>
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
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  max-width: 250px;
  .added-marks__block-title {
    padding: 0 20px;
    font-weight: 500;
    padding-bottom: 5px;
  }
  .added-marks__marks {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    background: $black05;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: $tr-02;
    .mark {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 5px 10px;
      background: $white50;
      border: 1px solid $dividerBorder;
      border-radius: 6px;
      transition: $tr-02;
    }
    .mark:last-child {
      margin-bottom: 0;
    }
  }
}

.dark-theme {
  .added-marks {
    .added-marks__marks {
      background: $white05;
      .mark {
        background: $black10;
        border: 1px solid $dividerBorderDarkBG;
      }
    }
  }
}

</style>
