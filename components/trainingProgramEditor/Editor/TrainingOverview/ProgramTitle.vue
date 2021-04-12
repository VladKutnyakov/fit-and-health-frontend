<template>
  <div class="program-title">
    <p class="program-title__text">Название программы:</p>

    <app-input-text
      placeholder="Название программы тренировок"
      @valueChanged="test = $event"
    />
  </div>
</template>

<script>
import AppInputText from "@/components/basic/AppInputText";

export default {
  components: {
    AppInputText
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.program-title {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .program-title__text {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>