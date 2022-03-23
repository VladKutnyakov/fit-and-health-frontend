<template>
  <div class="exercise">
    {{ exercise }}
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
  margin-bottom: 10px;
  padding: 10px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
}

</style>
