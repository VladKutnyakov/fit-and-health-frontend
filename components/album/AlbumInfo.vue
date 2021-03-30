<template>
  <div class="album-info">
    <app-block-title>Общаяя информация</app-block-title>

    <div class="album-info__content">
      <div class="filling__album-info">
        <img
          src="https://media.gettyimages.com/photos/muscular-build-athlete-climbing-up-the-rope-in-a-gym-picture-id1093941786?s=2048x2048"
          class="album-info__preview-image"
        />
        <div class="album-info__description">
          <p class="description__title">Название альбома</p>
          <p class="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolor sunt unde rerum libero voluptatum nostrum vero autem voluptas,
            consectetur magni ea id! Doloribus illum dignissimos provident
            asperiores. Nam commodi, unde rem a id nesciunt dolorum tempora, ut
            praesentium voluptates quia? Nesciunt iusto velit vel ad molestiae
            temporibus id at.
          </p>
        </div>
      </div>

      <div class="filling__actions">
        <!-- <i class="ti-shift-left-alt"></i> -->
        <i class="ti-bookmark action-btn"></i>
        <i class="ti-direction-alt action-btn"></i>
        <i class="ti-trash action-btn"></i>
        <i class="ti-pencil action-btn"></i>
        <i class="ti-plus action-btn"></i>
        <!-- <i class="ti-shift-right-alt"></i> -->
      </div>
    </div>
  </div>
</template>


<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.album-info {
  margin-left: 40px;
  width: 100%;
  max-width: 400px;
  min-width: 400px;
  .album-info__content {
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .filling__album-info {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .album-info__preview-image {
      border-radius: 6px;
      border: 1px solid $blockBorder;
    }
    .album-info__description {
      padding: 10px;
      .description__title {
        font-size: 18px;
        font-weight: 500;
      }
      .description__text {
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }

  .filling__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    background: $black10;
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
}

</style>
