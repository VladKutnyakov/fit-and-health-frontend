<template>
  <div class="comment">
    <!-- <p class="comment__title">Комментарий</p> -->
    <p class="comment__text">Комментарий к тренировочному дню в несколько строк. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit beatae, quas possimus officia hic minima iste magni nulla fuga quae deserunt, optio blanditiis, dolore quo quasi molestiae quam reiciendis accusantium quos. Incidunt libero corporis non doloribus debitis nihil eius!</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.comment {
  flex: 1 1 auto;
  margin-left: 5px;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  margin-top: 10px;
  // padding: 10px;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;
  // .comment__title {
  //   padding: 0 10px 10px 10px;
  //   text-align: center;
  //   font-weight: 500;
  //   border-bottom: 1px dashed $blockBorder;
  // }
  .comment__text {
    padding: 10px 10px 0 10px;
  }
}

</style>