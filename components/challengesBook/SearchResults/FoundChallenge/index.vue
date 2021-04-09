<template>
  <div class="found-challenge">
    <div class="found-challenge__card">
      <preview-image />

      <div class="info">
        <challenge-title />
        <description />
        <stats />
      </div>

      <actions />
    </div>
  </div>
</template>

<script>
import PreviewImage from '@/components/challengesBook/SearchResults/FoundChallenge/PreviewImage'
import ChallengeTitle from '@/components/challengesBook/SearchResults/FoundChallenge/ChallengeTitle'
import Description from '@/components/challengesBook/SearchResults/FoundChallenge/Description'
import Stats from '@/components/challengesBook/SearchResults/FoundChallenge/Stats'
import Actions from '@/components/challengesBook/SearchResults/FoundChallenge/Actions'

export default {
  components: {
    PreviewImage,
    ChallengeTitle,
    Description,
    Stats,
    Actions
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.found-challenge {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .found-challenge__card {
    display: flex;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    // .preview-image-and-skill {
    //   display: flex;
    //   flex-direction: column;
    // }
    .info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
