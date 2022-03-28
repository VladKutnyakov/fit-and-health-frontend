<template>
  <div class="meal-planer-actions">
    <app-button
      dangerBtn
      @click="removeMealPlanerInfo()"
    >
      <i class="ti-trash"></i>
    </app-button>

    <app-button
      class="ml-10 fill-area"
    >Добавить в книгу рационов</app-button>

    <app-button
      class="mt-10 fill-area"
      @click="saveMealPlanerInfo()"
    >Сохранить рацион</app-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  },
  methods: {
    ...mapActions({
      saveMealPlanerInfo: 'mealPlaner/saveMealPlanerInfo',
      removeMealPlanerInfo: 'mealPlaner/removeMealPlanerInfo',
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.meal-planer-actions {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 10px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
}

body.dark {
  .meal-planer-actions {
    background: $cardBackgroundDarkBG;
  }
}

</style>
