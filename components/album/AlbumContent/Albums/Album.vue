<template>
  <nuxt-link to="media/1" class="album">
    <div class="album__preview-image">
      <img class="preview-image" src="https://media.gettyimages.com/photos/muscular-build-athlete-climbing-up-the-rope-in-a-gym-picture-id1093941786?s=2048x2048">

      <div class="favorite__icon">
        <i class="ti-bookmark"></i>
      </div>

      <div class="select-btn">
        <div class="select-btn__icon"></div>
      </div>
    </div>

    <p class="album__title">Название альбома</p>
    <p class="album__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate et, iure officiis quisquam voluptatibus temporibus debitis explicabo optio voluptatum, ut dicta labore nesciunt veniam. Dicta nobis repellat expedita hic vitae?</p>

    <div class="album__stats">
      <div class="stats__element">
        <i class="ti-gallery element__icon"></i>
        <p class="element__value">24</p>
      </div>
      <div class="stats__element">
        <i class="ti-video-clapper element__icon"></i>
        <p class="element__value">2</p>
      </div>
      <div class="stats__element">
        <i class="ti-files element__icon"></i>
        <p class="element__value">45</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.album {
  margin-right: 20px;
  margin-bottom: 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  width: calc(100% / 4 - 15px);
  transition: $tr-02;
  .album__preview-image {
    position: relative;
    width: 100%;
    .preview-image {
      margin: 10px;
      width: calc(100% - 20px);
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 6px;
    }
    .favorite__icon {
      position: absolute;
      top: 20px;
      left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: $black40;
      color: $white;
      font-size: 20px;
      border-radius: 50%;
      transition: $tr-02;
    }
    .select-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 10px;
      background: $black20;
      border-radius: 50%;
      transition: $tr-02;
      cursor: pointer;
      .select-btn__icon {
        width: 20px;
        height: 20px;
        border: 2px solid $white;
        border-radius: 50%;
        transition: $tr-02;
      }
    }
    .select-btn:hover {
      background: $black40;
      cursor: pointer;
      .select-btn__icon {
        background: $green;
      }
    }
    .select-btn--active {
      cursor: pointer;
      .select-btn__icon {
        background: $green;
      }
    }
  }
  .album__title {
    padding: 0 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
  .album__description {
    margin-top: 5px;
    padding: 0 20px;
    font-size: 14px;
  }
  .album__stats {
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 10px 0;
    background: $hiddenBlockBG;
    .stats__element {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px dashed $blockBorder;
      .element__icon {
        margin-right: 10px;
      }
      .element__value {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .stats__element:last-child {
      border-right: none;
    }
  }
}
.album:nth-child(4n) {
  margin-right: 0;
}
.album:hover {
  box-shadow: $boxShadow;
}

@include for (1000) {
  .album {
    width: calc(100% / 2 - 20px);
    .album__preview-image {}
    .album__title {}
    .album__description {}
    .album__stats {
      .stats__element {
        .element__title {}
        .element__value {}
      }
    }
    .album__actions {}
  }
}


</style>
