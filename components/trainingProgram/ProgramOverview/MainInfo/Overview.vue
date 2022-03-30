<template>
  <div class="overview">
    <div class="title">
      <p class="title__block-title">Название программы:</p>
      <app-input-text
        value="Тестовое название"
        disabled
      />
    </div>
    <div class="description">
      <p class="description__block-title">Описание программы:</p>
      <app-textarea
        class="fill-area"
        :value="null"
        disabled
      />
    </div>
    <div class="skill">
      <p class="skill__block-title">Сложность тренировочной программы:</p>
      <app-input-text
        :value="null"
        disabled
      />
    </div>
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppInputText,
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.overview {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
    .title__block-title {
      margin-bottom: 5px;
      padding: 0 20px;
      font-weight: 500;
    }
  }
  .description {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    .description__block-title {
      margin-bottom: 5px;
      padding: 0 20px;
      font-weight: 500;
    }
  }
  .skill {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0 10px;
    .skill__block-title {
      margin-bottom: 5px;
      padding: 0 20px;
      font-weight: 500;
    }
  }
}

</style>
