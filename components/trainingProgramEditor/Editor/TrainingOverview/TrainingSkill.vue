<template>
  <div class="training-skill">
    <p class="training-skill__block-title">Сложность тренировочной программы:</p>

    <app-select
      :value="null"
      :selectOptionsList="[]"
      
    />
  </div>
</template>

<script>
import AppSelect from "@/components/basic/AppSelect"

export default {
  components: {
    AppSelect
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-skill {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .training-skill__block-title {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>