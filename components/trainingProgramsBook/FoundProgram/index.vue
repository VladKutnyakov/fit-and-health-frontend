<template>
  <div class="found-program">
    <div class="found-program__actions">
      <i
        class="actions-btn"
        :class="[
          { 'ti-pin-alt': !true },
          { 'ti-pin2': true },
          { 'actions-btn--active': true }
        ]"
        @click="changePinnedParam(exercise)"
      ></i>
      <i
        class="actions-btn"
        :class="[
          { 'ti-heart-broken': !true },
          { 'ti-heart': true },
          { 'actions-btn--active': true }
        ]"
        @click="changeFavoriteParam(exercise)"
      ></i>
    </div>
    <preview-image />
    <main-info :program="item" />
    <training-accent />
    <actions :program="item" />
  </div>
</template>

<script>
import PreviewImage from '@/components/trainingProgramsBook/FoundProgram/PreviewImage'
import MainInfo from '@/components/trainingProgramsBook/FoundProgram/MainInfo'
import TrainingAccent from '@/components/trainingProgramsBook/FoundProgram/TrainingAccent'
import Actions from '@/components/trainingProgramsBook/FoundProgram/Actions'

export default {
  props: {
    item: Object
  },
  components: {
    PreviewImage,
    MainInfo,
    TrainingAccent,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.found-program {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  overflow: hidden;
  .found-program__actions {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    // padding-right: 10px;
    // border-right: 1px solid $dividerBorder;
    .actions-btn {
      margin: 5px 0px;
      padding: 2.5px;
      color: $black30;
      transition: $tr-02;
      cursor: pointer;
    }
    .actions-btn:hover {
      color: $primary;
    }
    .actions-btn--active {
      color: $primary;
    }
  }
}

.dark-theme {
  .found-program {
    background: $cardBackgroundDarkBG;
  }
}

</style>
