<template>
  <div class="main-info">
    <p class="title">{{ program.title }}</p>

    <div class="description">
      <p class="description__text">Короткое описание тренировочной программы</p>
    </div>

    <div class="added-marks">
      <div class="mark">
        <p class="mark__text">Низкоуглеводное</p>
      </div>
      <div class="mark">
        <p class="mark__text">Веганское</p>
      </div>
      <div class="mark">
        <p class="mark__text">Без ГМО</p>
      </div>
      <div class="mark">
        <p class="mark__text">Для набора массы</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    program: Object
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.main-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  .title {
    padding: 0 10px 5px 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }

  .description {
    flex: 1 1 auto;
    .description__title {
      text-align: center;
      font-weight: 500;
    }
    .description__text {
      padding: 0 10px;
    }
  }

  .added-marks {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-top: 10px;
    .mark {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      margin-right: 5px;
      padding: 5px 10px;
      background: $black05;
      border-radius: 6px;
      .mark__text {
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
}

.dark-theme {
  .main-info {
    .added-marks {
      .mark {
        background: $black10;
      }
    }
  }
}

</style>
