<template>
  <div class="main-info">
    <div class="main-info__preview-image">
      <img class="preview-image" src="/images/community-image.jpg" alt="user-avatar">

      <div class="preview-image__edit-btn">
        <i class="ti-marker-alt"></i>
      </div>
    </div>

    <div class="main-info__community">
      <p class="community__name">CrossFit World</p>
      <p class="community__followers">4 567 участников</p>
    </div>

    <pre class="main-info__overview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores cumque recusandae iure molestiae atque asperiores enim laboriosam natus id quisquam, quam repellat doloribus magni voluptatem cum ducimus, dolorem esse a amet? Quae placeat optio aliquam totam excepturi illo in quos reiciendis, pariatur suscipit rem commodi voluptatem consequatur, vero possimus!</pre>

    <div class="main-info__action-btns">
      <app-button size14px>Вступить</app-button>
      <app-button
        class="ml-10"
        size14px
        title="Пригласить друзей"
      >
        <!-- <i class="ti-share"></i> -->
        Пригласить друзей
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.main-info {
  // border: 1px solid red;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  border-radius: 6px;
  box-shadow: $btnShadow;
  transition: $tr-02;
  .main-info__preview-image {
    position: relative;
    padding: 10px;
    width: 100%;
    .preview-image {
      width: 100%;
      height: auto;
      border-radius: 6px;
      cursor: pointer;
    }
    .preview-image__edit-btn {
      // border: 1px solid red;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: $white60;
      border-radius: 50%;
      transition: $tr-02;
      opacity: 0;
      cursor: pointer;
      i {
        color: $black;
      }
    }
    .preview-image__edit-btn:hover {
      background: $white;
    }
  }
  .main-info__preview-image:hover {
    .preview-image__edit-btn {
      opacity: 1;
    }
  }

  .main-info__community {
    padding: 0 10px;
    .community__name {
      margin-top: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .community__followers {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .main-info__overview {
    margin-top: 20px;
    padding: 0 20px;
    font-size: 14px;
  }

  .main-info__action-btns {
    margin: 20px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
