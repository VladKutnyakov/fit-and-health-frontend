<template>
  <div class="training-days-list">
    <div
      class="day"
      :class="[{ 'day--active': index == 0 }]"
      v-for="(item, index) in 3"
      :key="index"
    >
      <p class="day__title">День {{ index + 1}}</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-days-list {
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
      padding: 10px 20px;
      font-weight: 500;
      transition: $tr-02;
    }
    .day__title:hover {
      color: $green;
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
  }
}

</style>