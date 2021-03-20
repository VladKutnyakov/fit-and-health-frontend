<template>
  <div class="social-btns">
    <div v-if="btnsInfo.like >= 0" class="btn" @click="likeHandler()">
      <i class="ti-heart btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.like }}</p>
    </div>
    <div v-if="btnsInfo.dislike >= 0" class="btn" @click="dislikeHandler()">
      <i class="ti-heart-broken btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.dislike }}</p>
    </div>
    <div v-if="btnsInfo.share >= 0" class="btn" @click="shareHandler()">
      <i class="ti-share btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.share }}</p>
    </div>
    <div v-if="btnsInfo.addToFavorite >= 0" class="btn" @click="favoriteHandler()">
      <i class="ti-flag-alt-2 btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.addToFavorite }}</p>
    </div>

    <div v-if="btnsInfo.comments >= 0" class="btn" @click="commentsHandler()">
      <i class="ti-comments btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.comments }}</p>
    </div>
    <div v-if="btnsInfo.views >= 0" class="btn">
      <i class="ti-eye btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.views }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnsInfo: Object
  },
  methods: {
    likeHandler () {
      this.$emit('like')
    },
    dislikeHandler () {
      this.$emit('dislike')
    },
    shareHandler () {
      this.$emit('share')
    },
    commentsHandler () {
      this.$emit('comments')
    },
    favoriteHandler () {
      this.$emit('favorite')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.social-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn {
    display: flex;
    padding: 10px;
    align-items: center;
    cursor: pointer;
    .btn__icon {
      transition: $tr-02;
    }
    .btn__value {
      margin-left: 10px;
      font-weight: 600;
      transition: $tr-02;
    }
  }
  .btn:last-child {
    margin-right: 0;
  }
  .btn:hover {
    color: $green;
  }
}

</style>