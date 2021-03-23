<template>
  <div class="media-page">
    <app-page-title>Фото и видео</app-page-title>
    <div class="media-page__content">
      <app-page-info
        :infoElements="[
          {
            title: 'Всего альбомов',
            value: 10
          },
          {
            title: 'Избранные альбомы',
            value: 0
          }
        ]"
        btnTitle="Создать альбом"
      />
      <app-search-block class="search-media-album" small placeholder="Поиск по названи альбома"/>

      <div class="fiters-and-actions">
        <div class="filters">
          <i class="ti-view-list-alt filter-btn" title="Отобразить таблицей"></i>
          <i class="ti-view-grid filter-btn" title="Отобразить карточками"></i>
          <i class="ti-filter filter-btn" title="Настроить фильтры"></i>
        </div>
        <div class="actions">
          <i class="ti-bookmark action-btn action-btn--active" title="Добавить в избранное"></i>
          <i class="ti-direction-alt action-btn" title="Переместить"></i>
          <i class="ti-trash action-btn" title="Удалить"></i>
        </div>
      </div>

      <div class="albums">
        <nuxt-link to="media/1" class="album" v-for="(item, index) in 10" :key="index">
          <div class="album__preview-image">
            <img class="preview-image" src="https://hardcrossfit.com/wp-content/uploads/2019/06/ffff.png">

            <div class="favorite__icon">
              <i class="ti-bookmark"></i>
            </div>

            <div class="select-btn">
              <div class="select-btn__icon"></div>
            </div>
          </div>

          <p class="album__title">Название альбома</p>
          <p class="album__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam corrupti quibusdam nihil optio praesentium, eum culpa veritatis, ipsa sit ducimus.</p>
          <div class="album__stats">
            
            <div class="stats__element">
              <p class="element__title">Фотографии</p>
              <p class="element__value">63</p>
            </div>
            <div class="stats__element">
              <p class="element__title">Видео</p>
              <p class="element__value">12</p>
            </div>
            <div class="stats__element">
              <p class="element__title">Документы</p>
              <p class="element__value">5</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppButton from '@/components/basic/AppButton'

export default {
  name: 'MediaPage',
  layout: 'default',
  head () {
    return {
      title: 'Fit and Health - Медиа',
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { // МИКРОРАЗМЕТКА
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://website.com",
            "name": "Website",
            "description": "This website is awesome.",
            "publisher": {
              "@type": "Organization",
              "name": "Website",
              "alternateName": "SiteWeb",
              "logo": {
                "@type": "ImageObject",
                "url": "https://someimage.com/image"
              }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  // middleware: ['userAuth'],
  components: {
    AppPageTitle,
    AppPageInfo,
    AppSearchBlock,
    AppButton
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.media-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  padding: 40px;
  .media-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;

    .fiters-and-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      .filters {
        .filter-btn {
          margin-right: 5px;
          padding: 5px;
          font-size: 20px;
          transition: $tr-02;
          cursor: pointer;
        }
        .filter-btn:hover {
          color: $green;
        }
      }
      .actions {
        .action-btn {
          margin-right: 5px;
          padding: 5px;
          color: $black40;
          font-size: 20px;
          transition: $tr-02;
          cursor: pointer;
        }
        .action-btn--active {
          color: $black;
        }
        .action-btn--active:hover {
          color: $green;
        }
      }
    }

    .albums {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      .album {
        margin-right: 20px;
        margin-bottom: 20px;
        // padding: 10px;
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
            height: 250px;
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
          margin: 10px;
          padding: 10px;
          // border-top: 1px dashed $blockBorder;
          background: $hiddenBlockBG;
          .stats__element {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid $blockBorder;
            .element__title {
              font-size: 12px;
            }
            .element__value {
              margin-top: 5px;
              // color: $green;
              font-size: 14px;
              font-weight: 500;
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
    }

    @include for (1000) {
      .albums {
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
    }
  }
}

</style>
