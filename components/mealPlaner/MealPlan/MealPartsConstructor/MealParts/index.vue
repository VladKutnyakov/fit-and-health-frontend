<template>
  <div class="meal-parts">
    <div
      v-for="(item, index) in mealParts"
      :key="index"
      class="meal-part"
      :class="[{'meal-part--active' : index == selectedMealPart ? true : false}]"
      @click="changeSelectedMealPart(index)"
    >
      <p class="meal-part__title">{{ item.mealTime }} - {{ item.title }}</p>
    </div>
    <div class="meal-part">
      <i class="ti-plus"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selectedMealPart: 0,
    }
  },
  computed: {
    ...mapState({
      mealParts: state => state.mealPlaner.mealPlanerInfo.mealParts
    })
  },
  methods: {
    changeSelectedMealPart(index) {
      this.selectedMealPart = index
    }
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
    // flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    padding: 10px 20px;
    max-width: 200px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border: 1px solid $blockBorder;
    border-bottom: none;
    cursor: pointer;
    .meal-part__title {
      text-transform: uppercase;
      font-size: 14px;
      text-align: center;
      font-weight: 500;
    }
  }
  .meal-part:last-child {
    margin-left: auto;
    padding: 10px;
    margin-right: 0;
    background: $green;
    color: $white;
    border: $green;
  }
  .meal-part--active {
    background: $green;
    color: $white;
    border: $green;
    .meal-part__title {
      font-weight: 600;
    }
  }
}

</style>
