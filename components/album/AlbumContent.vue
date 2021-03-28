<template>
  <div class="album-content">
    <p>album-content</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.album-content {
  flex: 1 1 auto;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .preview__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    .action-btn {
      margin-right: 5px;
      padding: 5px;
      font-size: 20px;
    }
    .action-btn:last-child {
      margin-left: auto;
      margin-right: 0;
    }
  }
  .preview__image {
    margin: 0 10px 10px 10px;
    width: calc(100% - 20px);
    border-radius: 6px;
  }
  .preview__comments {
    margin: 10px;
    padding-top: 20px;
    border-top: 1px dashed $blockBorder;
    .comments {
      display: flex;
      flex-direction: column;
      .comment {
        display: flex;
        margin-bottom: 20px;
        padding: 0 10px;
        .comment__autor-image {
          min-width: 40px;
          max-width: 40px;
          height: 40px;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          object-fit: cover;
          object-position: center;
        }
        .comment__autor-post {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .autor-post__author-name {
            font-size: 14px;
            font-weight: 500;
          }
          .autor-post__creating-date {
            color: $gray-dark;
            font-size: 12px;
            font-weight: 500;
          }
          .autor-post__text {
            margin-top: 10px;
            font-size: 14px;
          }
          .autor-post__add-subcomment {
            align-self: flex-start;
            margin-top: 5px;
            color: $black60;
            font-size: 12px;
            transition: $tr-02;
            cursor: pointer;
          }
          .autor-post__add-subcomment:hover {
            color: $green;
          }
        }
      }
    }
    .add-comment {
      display: flex;
      flex-direction: column;
      padding: 10px 10px 0 10px;
      border-top: 1px dashed $blockBorder;
    }
  }
}

</style>
