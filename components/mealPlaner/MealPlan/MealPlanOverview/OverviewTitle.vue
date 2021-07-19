<template>
  <div class="overview-title">
    <p class="overview-title__text">Название рациона:</p>
    <app-input-text
      :value="title"
      class="title__input"
      placeholder="Укажите название рациона"
      @input="setMealPlanTitle($event)"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'

export default {
  components: {
    AppInputText,
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      title: state => state.mealPlaner.mealPlanerInfo.title
    })
  },
  methods: {
    ...mapMutations({
      setMealPlanTitle: 'mealPlaner/setMealPlanTitle'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.overview-title {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .overview-title__text {
    padding: 0 10px 5px 10px;
    font-weight: 500;
  }
}

</style>
