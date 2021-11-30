<template>
  <li class="exercises-list__item">
    <div class="item__exercise-title-and-type" @click="fetchExerciseInfo(item.id)">
      <p class="exercises-title">{{ item.title }}</p>
      <p class="exercise__target-muscles">{{ getMuscles(muscleGroup, item) }}</p>
    </div>
    <div class="item__actions">
      <i
        class="actions-btn"
        :class="[
          { 'ti-pin-alt': !item.pinned },
          { 'ti-pin2': item.pinned },
          { 'actions-btn--active': item.pinned }
        ]"
        @click="changePinnedParam(item)"
      ></i>
      <i
        class="actions-btn"
        :class="[
          { 'ti-heart-broken': !item.favorite },
          { 'ti-heart': item.favorite },
          { 'actions-btn--active': item.favorite }
        ]"
        @click="changeFavoriteParam(item)"
      ></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    muscleGroup: Object
  },
  methods: {
    getMuscles (muscleGroup, item) {
      const Muscles = [muscleGroup.title]

      for (let i = 0; i < item.additionalMuscles.length; i++) {
        Muscles.push(item.additionalMuscles[i].title)
      }

      return Muscles.join(', ')
    },
    fetchExerciseInfo (exercisesId) {
      this.$store.dispatch('exercises/fetchExerciseInfo', exercisesId)
    },
    changePinnedParam (item) {
      this.$store.dispatch('exercises/changePinnedParam', item.id)
    },
    changeFavoriteParam (item) {
      this.$store.dispatch('exercises/changeFavoriteParam', item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.exercises-list__item {
  // border: 1px solid red;
  display: flex;
  margin: 5px 10px 0px 10px;
  background: $white;
  border-radius: 6px;
  user-select: none;
  transition: $tr-02;
  .item__exercise-title-and-type {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5px 0 15px;
    padding: 10px 0;
    cursor: pointer;
    .exercises-title {
      font-size: 14px;
      font-weight: 500;
      transition: $tr-02;
    }
    .exercise__target-muscles {
      margin-top: 5px;
      text-transform: uppercase;
      font-size: 10px;
    }
  }
  .item__exercise-title-and-type:hover {
    .exercises-title {
      color: $green;
    }
  }
  .item__actions {
    // border: 1px solid red;
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 0 10px;
    flex-direction: column;
    border-left: 1px dashed $blockBorder;
    .actions-btn {
      margin: 5px 0px;
      padding: 2.5px;
      color: $black30;
      transition: $tr-02;
      cursor: pointer;
    }
    .actions-btn:hover {
      color: $green;
    }
    .actions-btn--active {
      color: $green;
    }
  }
}
.exercises-list__item:last-child {
  margin-bottom: 10px;
}

</style>
