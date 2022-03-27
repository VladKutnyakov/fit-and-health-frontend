<template>
  <div class="meal-parts">
    <div
      v-for="(item, index) in mealParts"
      :key="index"
      class="meal-part"
      :class="[{'meal-part--active' : index == selectedMealPart ? true : false}]"
      @click="setSelectedMealPart(index)"
    >
      <p class="meal-part__title">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      mealParts: state => state.mealPlaner.mealPlanerInfo.mealParts,
      selectedMealPart: state => state.mealPlaner.selectedMealPart
    })
  },
  methods: {
    ...mapMutations({
      setSelectedMealPart: 'mealPlaner/setSelectedMealPart'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-parts {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  padding: 0 10px;
  .meal-part {
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    padding: 10px 20px;
    min-height: 40px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border: 1px solid $dividerBorder;
    border-bottom: none;
    transition: $tr-02;
    cursor: pointer;
    .meal-part__title {
      font-size: 16px;
      text-align: center;
      font-weight: 500;
    }
  }
  .meal-part--active {
    background: $primary;
    border: 1px solid $primary;
    border-bottom: none;
    .meal-part__title {
      color: $white;
    }
  }
}

</style>
