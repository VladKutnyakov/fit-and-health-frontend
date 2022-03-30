<template>
  <li class="exercise">
    <div class="exercise__element">
      <i
        class="ti-exchange-vertical element__action-btn"
      ></i>
    </div>
    <div class="exercise__element">
      <p class="element__value">{{ item.title }}</p>
    </div>
    <div class="exercise__element">
      <p class="element__value">{{ item.muscleGroup.title }}</p>
    </div>
    <div class="exercise__element">
      <input
        class="element__input"
        type="text"
        :value="item.approaches"
        @input="changeExerciseProperty({ item, newValue: $event.target.value })"
        @focus="setFocus($event)"
      >
    </div>
    <div class="exercise__element">
      <input
        class="element__input"
        type="text"
        :value="item.repeats"
        @input="changeExerciseProperty({ item, newValue: $event.target.value })"
        @focus="setFocus($event)"
      >
    </div>
    <div class="exercise__element">
      <input
        class="element__input"
        type="text"
        :value="item.additionalWeight"
        @input="changeExerciseProperty({ item, newValue: $event.target.value })"
        @focus="setFocus($event)"
      >
    </div>
    <div class="exercise__element">
      <i class="ti-close element__action-btn" @click="removeExerciseToTrainingDay(item)"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    setFocus ($event) {
      $event.target.select()
    },
    changePinnedParam (item) {
      console.log(item)
    },
    changeFavoriteParam (item) {
      console.log(item)
    },
    changeExerciseProperty (ctx) {
      console.log(ctx)
    },
    removeExerciseToTrainingDay (item) {
      this.$store.commit('trainingProgramEditor/removeExerciseForTrainingProgramDay', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercise {
  display: flex;
  margin-bottom: 5px;
  padding: 5px 0px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .exercise__element {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    width: 120px;
    text-align: center;
    border-right: 1px dashed $inputBorder;
    .element__action-btn {
      padding: 5px;
      color: $black30;
      border-radius: 50%;
      transition: $tr-02;
      cursor: pointer;
    }
    .element__action-btn:hover {
      color: $green;
    }
    .element__action-btn--active {
      color: $green;
    }
    .element__input {
      flex: 1 1 auto;
      padding: 10px 5px;
      width: 100%;
      outline: none;
      border: 1px solid $inputBorder;
      border-radius: 6px;
      text-align: center;
      color: $green;
      font-family: $fontMontserrat;
      font-weight: 500;
      transition: $tr-02;
    }
    .element__input:focus {
      border: 1px solid $green;
    }
    .element__input::selection {
      color: $white;
      background: $green;
    }
  }
  .exercise__element:nth-child(1) {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
  }
  .exercise__element:nth-child(2) {
    flex: 1 1 auto;
    min-width: 200px;
  }
  .exercise__element:nth-child(3) {
    padding: 0 5px;
    min-width: 150px;
  }
  .exercise__element:last-child {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    border: none;
    .element__action-btn:hover {
      color: $green;
    }
  }
}

</style>
