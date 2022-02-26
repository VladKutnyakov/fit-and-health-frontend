<template>
  <div class="user-activity">
    <div class="user-activity__news-visibility">
      <h2 class="news-visibility__block-title">Лента новостей</h2>
      <filter-radio-text-group
        class="news-visibility__filter"
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
    margin: 0 10px 10px 10px;
    .news-visibility__block-title {
      // border: 1px solid red;
      margin-right: auto;
      padding: 10px;
      font-size: 18px;
    }
    .news-visibility__filter {
      // border: 1px solid red;
      padding: 10px 0;
    }
  }
}

</style>