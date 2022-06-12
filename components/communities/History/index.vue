<template>
  <div class="history">
    <p class="mb-20">Добавить запись</p>
    <community-post />
  </div>
</template>

<script>
import CommunityPost from '@/components/communities/History/CommunityPost'

export default {
  components: {
    CommunityPost,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.history {
  // border: 1px solid red;
  margin: 0 40px;
  width: 100%;
}

</style>
