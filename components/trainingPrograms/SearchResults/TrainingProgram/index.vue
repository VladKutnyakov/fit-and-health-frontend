<template>
  <div class="found-program">
    <div class="found-program__actions">
      <i
        class="actions-btn"
        :class="[
          { 'ti-pin-alt': !item.pinned },
          { 'ti-pin2': item.pinned },
          { 'actions-btn--active': item.pinned }
        ]"
        @click="changePinnedParam(exercise)"
      ></i>
      <i
        class="actions-btn"
        :class="[
          { 'ti-heart-broken': !item.favorite },
          { 'ti-heart': item.favorite },
          { 'actions-btn--active': item.favorite }
        ]"
        @click="changeFavoriteParam(exercise)"
      ></i>
    </div>
    <preview-image :program="item" />
    <main-info :program="item" />
    <training-accent :program="item" />
    <actions :program="item" />
  </div>
</template>

<script>
import PreviewImage from '@/components/trainingPrograms/SearchResults/TrainingProgram/PreviewImage'
import MainInfo from '@/components/trainingPrograms/SearchResults/TrainingProgram/MainInfo'
import TrainingAccent from '@/components/trainingPrograms/SearchResults/TrainingProgram/TrainingAccent'
import Actions from '@/components/trainingPrograms/SearchResults/TrainingProgram/Actions'

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
