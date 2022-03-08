<template>
  <div class="training-days-list">
    <div
      v-for="(item, index) in trainingProgramDays"
      :key="index"
      class="day"
      :class="[{ 'day--active': index == selectedTrainingDay ? true : false }]"
      @click="setSelectedTrainingDay(index)"
    >
      <p class="day__title">{{ item.title }}</p>
      <!-- <i class="ti-close day__action-btn" @click="removeTrainingProgramDay()"></i> -->
    </div>

    <div
      class="day"
      @click="addTrainingProgramDay()"
    >
      <p class="day__title"><i class="ti-plus"></i></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      trainingProgramDays: state => state.trainingProgramEditor.trainingProgram.fields.trainingProgramDays,
      selectedTrainingDay: state => state.trainingProgramEditor.selectedTrainingDay
    })
  },
  methods: {
    ...mapMutations({
      setSelectedTrainingDay: 'trainingProgramEditor/setSelectedTrainingDay',
      addTrainingProgramDay: 'trainingProgramEditor/addTrainingProgramDay',
      removeTrainingProgramDay: 'trainingProgramEditor/removeTrainingProgramDay',
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-days-list {
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid $dividerBorder;
  .day {
    display: flex;
    // align-items: center;
    margin-right: 5px;
    border: 1px solid $dividerBorder;
    border-bottom: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transition: $tr-02;
    cursor: pointer;
    .day__title {
      padding: 10px 15px;
      transition: $tr-02;
    }
    .day__title:hover {
      color: $primary;
    }
  }
  .day:hover {
    background: $primaryLight5;
    border: 1px solid $primaryLight5;
    border-bottom: none;
  }
  .day--active {
    background: $primary;
    border: 1px solid $primary;
    border-bottom: none;
    .day__title {
      color: $white;
    }
    .day__title:hover {
      color: $white;
    }
    // .day__action-btn {
    //   color: $white;
    // }
  }
  .day--active:hover {
    background: $primary;
    border: 1px solid $primary;
    border-bottom: none;
  }
}

body.dark {
  .training-days-list {
    border-bottom: 1px solid $dividerBorderDarkBG;
    .day {
      border: 1px solid $dividerBorderDarkBG;
      border-bottom: none;
    }
    .day:hover {
      background: $primaryDarkHover;
    }
    .day--active:hover {
      background: $primary;
      border: 1px solid $primary;
      border-bottom: none;
    }
  }
}

</style>