<template>
  <div class="media-file-overview">
    <div class="preview__actions">
      <!-- <i class="ti-shift-left-alt action-btn"></i> -->
      <i class="ti-bookmark action-btn"></i>
      <i class="ti-direction-alt action-btn"></i>
      <i class="ti-trash action-btn"></i>
      <i class="ti-pencil action-btn"></i>
      <!-- <i class="ti-shift-right-alt action-btn"></i> -->
    </div>

    <img
      src="http://rockout.pro/wp-content/uploads/2015/06/Rockout-gear.jpg"
      class="preview__image"
    />

    <!-- <social-btns
      :btnsInfo="{
        like: 12,
        dislike: 12,
        share: 12,
        addToFavorite: 12,
        comments: 12,
        views: 12,
      }"
    /> -->

    <div class="preview__comments">
      <ul class="comments">
        <li class="comment" v-for="(item, index) in 5" :key="index">
          <img
            src="https://pic.sport.ua/media/images/Foto%202.jpg"
            class="comment__autor-image"
          />
          <div class="comment__autor-post">
            <p class="autor-post__author-name">Дмитрий Коробов</p>
            <p class="autor-post__creating-date">21.04.2019 - 12:54</p>
            <p class="autor-post__text">
              Далеко-далеко за словесными горами в стране гласных, и согласных
              живут рыбные тексты. По всей рукописи до своих гор, домах деревни
              взобравшись дорогу собрал не которой безорфографичный? Однажды
              текста, взобравшись одна, власти безопасную сбить рукописи
              подпоясал сих ему до буквоград буквенных!
            </p>
            <p class="autor-post__add-subcomment">Комментировать</p>
          </div>
        </li>
      </ul>
      <div class="add-comment">
        <app-textarea placeholder="Комментировать" />
        <app-button class="mt-5 ml-auto" size14px>Отправить</app-button>
      </div>
    </div>
  </div>
</template>

<script>
// import SocialBtns from '@/components/basic/SocialBtns'
import AppTextarea from '@/components/basic/AppTextarea'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    // SocialBtns,
    AppTextarea,
    AppButton
  }
}
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
