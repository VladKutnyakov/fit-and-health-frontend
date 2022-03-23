<template>
  <div class="exercise">
    <div class="exercise__preview-image"></div>
    <div class="exercise__overview">
      <p>title</p>
      <p>Шея</p>
      <p>Шея, трапеции</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise {
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: calc(50% - 5px);
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  .exercise__preview-image {
    width: 150px;
    height: 200px;
    background: $black10;
    border-radius: 6px;
  }
  .exercise__overview {
    margin-left: 10px;
  }
}
.exercise:nth-child(2n) {
  margin-right: 0;
}

</style>
