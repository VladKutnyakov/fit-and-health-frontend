<template>
  <div class="recipe-images">
    <img
      class="recipe-images__main"
      src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg"
    />
    <div class="recipe-images__additionals">
      <img class="additional__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" />
      <img class="additional__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" />
      <img class="additional__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      media: state => state.recipe.recipe.media
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.recipe-images {
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .recipe-images__main {
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .recipe-images__additionals {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .additional__img {
      width: 32%;
      border-radius: 6px;
    }
  }
}
</style>
