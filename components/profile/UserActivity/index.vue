<template>
  <div class="user-activity">
    <div class="user-activity__news-visibility">
      <app-block-title>Лента новостей</app-block-title>
      <filter-radio-text-group
        :valueList="['Все записи', 'Только мои записи']"
        :defaultValue="feed"
        size18px
        @inputGroupValueChanged="feed = $event"
      />
    </div>
    <user-new-post />
    <user-stories />
    <user-post/>
    <user-post-image-slider/>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import UserNewPost from '@/components/profile/UserActivity/UserNewPost'
import UserStories from '@/components/profile/UserActivity/UserStories'
import UserPost from '@/components/profile/UserActivity/UserPost'
import UserPostImageSlider from '@/components/profile/UserActivity/UserPostImageSlider'

export default {
  components: {
    AppBlockTitle,
    FilterRadioTextGroup,
    UserNewPost,
    UserStories,
    UserPost,
    UserPostImageSlider,
  },
  data () {
    return {
      feed: 'Все записи'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.user-activity {
  flex: 1 1 auto;
  margin: 0 40px;
  .user-activity__news-visibility {
    display: flex;
    align-items: center;
    margin: 0 20px 10px 20px;
    .news-visibility__block-title {
      margin-right: auto;
      padding: 2px 5px;
      font-size: 18px;
      font-weight: 500;
      border-bottom: 2px solid transparent;
    }
  }
}

</style>