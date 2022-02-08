<template>
  <div class="training-type">
    <p class="training-type__text">Тип тренировочного дня:</p>
    <app-select
      :value="null"
      :selectOptionsList="[]"
      @select="select($event)"
    />
  </div>
</template>

<script>
import AppSelect from '@/components/basic/AppSelect'

export default {
  components: {
    AppSelect
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-type {
  display: flex;
  flex-direction: column;
  .training-type__text {
    padding: 10px;
    font-weight: 500;
  }
}

</style>
