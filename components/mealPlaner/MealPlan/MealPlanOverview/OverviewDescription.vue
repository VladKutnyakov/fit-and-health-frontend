<template>
  <div class="overview-description">
    <p class="overview-description__text">Описание:</p>
    <app-textarea
      class="fill-area"
      :value="description"
      placeholder="Укажите описание рациона"
      @input="setMealPlanDescription($event)"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppTextarea
  },
  computed: {
    ...mapState({
      description: state => state.mealPlaner.mealPlanerInfo.description
    })
  },
  methods: {
    ...mapMutations({
      setMealPlanDescription: 'mealPlaner/setMealPlanDescription'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.overview-description {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .overview-description__text {
    padding: 0 10px 5px 10px;
    font-weight: 500;
  }
}

</style>
