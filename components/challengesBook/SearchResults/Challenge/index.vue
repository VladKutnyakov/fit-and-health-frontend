<template>
  <div class="challenge">
    <div class="challenge__card">
      <div class="card__content">
        <div class="card__info">
          <preview-image />
          <challenge-title />
          <description />
          <stats />
          <actions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChallengeTitle from '@/components/challengesBook/SearchResults/Challenge/ChallengeTitle'
import PreviewImage from '@/components/challengesBook/SearchResults/Challenge/PreviewImage'
import Description from '@/components/challengesBook/SearchResults/Challenge/Description'
import Stats from '@/components/challengesBook/SearchResults/Challenge/Stats'
import Actions from '@/components/challengesBook/SearchResults/Challenge/Actions'

export default {
  components: {
    ChallengeTitle,
    PreviewImage,
    Description,
    Stats,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.challenge {
  // border: 1px solid red;
  margin-right: 20px;
  margin-bottom: 20px;
  width: calc(100% / 3 - 20px);
  .challenge__card {
    display: flex;
    flex-direction: column;
    .card__content {
      display: flex;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .card__info {
        display: flex;
        flex-direction: column;
      }
    }
  }
}

.challenge:first-child {
  margin-right: 20px;
}

.challenge:last-child {
  margin-left: 20px;
}

</style>
