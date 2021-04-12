<template>
  <div class="days">
    <div class="day day--active">
      <p class="day__title">День 0. Спина и бицепсы</p>
      <i class="ti-close day__remove-btn"></i>
    </div>
    <div class="day" v-for="(item, index) in 3" :key="index">
      <p class="day__title">День {{ index + 1}}. Ноги и плечи</p>
      <i class="ti-close day__remove-btn"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.days {
  display: flex;
  padding: 0 10px;
  .day {
    display: flex;
    margin-right: 5px;
    background: $white;
    border: 1px solid $blockBorder;
    border-bottom: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transition: $tr-02;
    cursor: pointer;
    .day__title {
      padding: 10px 10px 10px 20px;
      font-weight: 500;
      transition: $tr-02;
    }
    .day__title:hover {
      color: $green;
    }
    .day__remove-btn {
      margin-top: 5px;
      margin-right: 5px;
      padding: 5px;
      font-size: 10px;
    }
  }
  .day--active {
    background: $green;
    border: 1px solid $green;
    border-bottom: none;
    .day__title {
      color: $white;
    }
    .day__title:hover {
      color: $white;
    }
    .day__remove-btn {
      color: $white;
    }
  }
}

</style>