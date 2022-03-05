<template>
  <div class="user-post">

    <div class="user-post__info">
      <img class="user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar">

      <div class="info__data">
        <p class="info__user-name">Дмитрий Коробов</p>
        <p class="info__creating-date">21.04.2019 - 12:54</p>
      </div>
      <app-button-with-actions
        class="info__actions-btn"
        :actions="['Редактировать', 'Удалить']"
        :params="{postId: 1}"
      >
        <i class="ti-more"></i>
      </app-button-with-actions>
    </div>

    <div class="user-post__content">
      <div class="user-post__image-wrapper">
        <img class="image" src="https://cross.world/wp-content/uploads/2016/11/krossfit-uprazhneniya-na-vynoslivost-1.jpg">
      </div>
      <div class="message">
        <pre class="post__message-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Delectus, unde? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quam rerum, nemo similique cumque quia quas voluptates minima. Cumque aspernatur tempora assumenda libero voluptatibus esse, excepturi ea maiores magnam cupiditate sequi nostrum?
        Aliquam dicta iure temporibus repellat numquam tempora, unde velit reprehenderit minima voluptates amet vel repudiandae quos illum pariatur!</pre>
      </div>
    </div>

    <div class="user-post__social-bts">
      <social-btns
        class="main-social"
        :btnsInfo="{
          like: 1,
          dislike: 2,
          share: 0,
          comments: 43
        }"
      />
      <social-btns
        class="additional-social"
        :btnsInfo="{
          views: 1234,
        }"
      />
    </div>

    <div class="user-post__comments">
      <div class="comment" v-for="(item, index) in 5" :key="index">
        <img src="https://pic.sport.ua/media/images/Foto%202.jpg" class="comment__autor-image">
        <div class="comment__autor-post">
          <p class="autor-post__author-name">Дмитрий Коробов</p>
          <p class="autor-post__creating-date">21.04.2019 - 12:54</p>
          <p class="autor-post__text">Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. По всей рукописи до своих гор, домах деревни взобравшись дорогу собрал не которой безорфографичный? Однажды текста, взобравшись одна, власти безопасную сбить рукописи подпоясал сих ему до буквоград буквенных!</p>
          <p class="autor-post__add-subcomment">Комментировать</p>
        </div>
      </div>
      <div class="add-comment">
        <app-textarea placeholder="Комментировать" />
        <app-button class="mt-5" size14px right>Отправить</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButtonWithActions from '@/components/basic/AppButtonWithActions'
import SocialBtns from '@/components/basic/SocialBtns'
import AppTextarea from '@/components/basic/AppTextarea'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButtonWithActions,
    SocialBtns,
    AppTextarea,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.user-post {
  margin-bottom: 40px;
  width: 100%;
  background: $white;
  border-radius: 6px;
  box-shadow: $cardShadow;
  transition: $tr-02;
  .user-post__info {
    // border: 1px solid red;
    margin: 0 10px 10px 10px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    border-bottom: $dividerBorder;
    .user-avatar {
      min-width: 50px;
      max-width: 50px;
      height: 50px;
      border: 1px solid $blockBorder;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
    .info__data {
      margin-left: 10px;
      .info__user-name {
        font-weight: 500;
      }
      .info__creating-date {
        margin-top: 5px;
        color: $gray-dark;
        font-size: 12px;
        font-weight: 500;
      }
    }
    .info__actions-btn {
      align-self: flex-start;
      margin-left: auto;
      margin-right: 5px;
    }
  }

  .user-post__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    .user-post__image-wrapper {
      padding: 0 10px 10px 10px;
      width: 100%;
      .image {
        border: $dividerBorder;
        border-radius: 6px;
      }
    }
    .message {
      flex: 1 1 auto;
      display: flex;
      padding: 0 20px 0 20px;
    }
  }

  .user-post__social-bts {
    display: flex;
    margin: 10px;
    background: $primaryLight5;
    border-radius: 6px;
    .main-social {
      margin: 0 10px;
      width: 100%;
      max-width: 460px
    }
    .additional-social {
      margin-left: auto;
    }
  }

  .user-post__comments {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .comment {
      display: flex;
      margin-bottom: 20px;
      padding: 0 10px;
      .comment__autor-image {
        min-width: 50px;
        max-width: 50px;
        height: 50px;
        border: 1px solid $blockBorder;
        border-radius: 50%;
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
          // margin-top: 5px;
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
    .add-comment {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      border-top: $dividerBorder;
    }
  }
}

body.dark .user-post {
  background: $cardBackgroundDarkBG;
}

</style>
