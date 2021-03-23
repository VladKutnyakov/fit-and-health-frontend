<template>
  <div class="album-page">
    <app-page-title>Название альбома</app-page-title>
    <div class="album-page__content">
      <div class="preview">
        Превью
      </div>
      <div class="filling">
        <div class="filling__actions">
          <!-- <i class="ti-shift-left-alt"></i> -->
          <i class="ti-bookmark action-btn"></i>
          <i class="ti-direction-alt action-btn"></i>
          <i class="ti-trash action-btn"></i>
          <i class="ti-pencil action-btn"></i>
          <i class="ti-plus action-btn"></i>
          <!-- <i class="ti-shift-right-alt"></i> -->
        </div>

        <div class="filling__album-info">
          <img src="https://hardcrossfit.com/wp-content/uploads/2019/06/ffff.png" class="album-info__preview-image">
          <div class="album-info__description">
            <p class="description__title">Название альбома</p>
            <p class="description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor sunt unde rerum libero voluptatum nostrum vero autem voluptas, consectetur magni ea id! Doloribus illum dignissimos provident asperiores. Nam commodi, unde rem a id nesciunt dolorum tempora, ut praesentium voluptates quia? Nesciunt iusto velit vel ad molestiae temporibus id at.</p>
          </div>
        </div>

        <div class="filling__stats">
          <div class="stats__element">
            <p class="element__title">Фотографий</p>
            <p class="element__value">43</p>
          </div>
          <div class="stats__element">
            <p class="element__title">Видео</p>
            <p class="element__value">12</p>
          </div>
          <div class="stats__element">
            <p class="element__title">Документы</p>
            <p class="element__value">0</p>
          </div>
        </div>

        <div class="filling__album-folders-and-files">
          
          <div class="folders">
            <div class="folders__block-title">
              <i class="ti-folder block-title__icon"></i>
              <p class="block-title__text">Альбомы</p>
            </div>

            <ul class="folders__list">
              <li class="folder" v-for="(item, index) in 3" :key="index">
                <img class="folder__preview-image" src="https://hardcrossfit.com/wp-content/uploads/2019/06/ffff.png">
                <p class="folder__title">Название папки</p>
                <div class="folder__stats">
                  <div class="stats__element">
                    <i class="ti-gallery element__icon"></i>
                    <p class="element__value">15</p>
                  </div>
                  <div class="stats__element">
                    <i class="ti-video-clapper element__icon"></i>
                    <p class="element__value">2</p>
                  </div>
                  <div class="stats__element">
                    <i class="ti-files element__icon"></i>
                    <p class="element__value">0</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="files">
            <div class="files__block-title">
              <i class="ti-gallery block-title__icon"></i>
              <p class="block-title__text">Файлы</p>
            </div>

            <ul class="files__list">
              <li class="file" v-for="(item, index) in 5" :key="index">
                <img class="file__preview-image" src="https://hardcrossfit.com/wp-content/uploads/2019/06/ffff.png">
                <p class="file__create-date">21.03.2021</p>
                <p class="file__title">Название файла</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'

export default {
  name: 'AlbumPage',
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
    AppPageTitle
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.album-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  padding: 40px;
  .album-page__content {
    display: flex;
    width: 100%;
    max-width: 1700px;

    .preview {
      margin-right: 20px;
      padding: 10px;
      width: 60%;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }

    .filling {
      margin-left: 20px;
      width: 40%;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .filling__actions {
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

      .filling__album-info {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
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

      .filling__stats {
        display: flex;
        margin: 0 10px;
        padding: 10px 0;
        border-top: 1px solid $blockBorder;
        border-bottom: 1px solid $blockBorder;
        .stats__element {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px 0;
          border-right: 1px dashed $blockBorder;
          .element__title {
            text-align: center;
            font-size: 14px;
          }
          .element__value {
            margin-top: 5px;
            text-align: center;
            color: $green;
            font-size: 16px;
            font-weight: 500;
          }
        }
        .stats__element:last-child {
          border-right: none;
        }
      }

      .filling__album-folders-and-files {
        margin-top: 10px;
        .folders {
          display: flex;
          flex-direction: column;
          .folders__block-title {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            background: $hiddenBlockBG;
            .block-title__icon {
              margin-right: 10px;
            }
            .block-title__text {
              font-size: 14px;
              font-weight: 500;
            }
          }
          .folders__list {
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            .folder {
              margin-right: 10px;
              margin-bottom: 10px;
              width: calc(100% / 2 - 5px);
              border: 1px solid $blockBorder;
              border-radius: 6px;
              .folder__preview-image {
                margin: 5px;
                width: calc(100% - 10px);
                border-radius: 6px;
              }
              .folder__title {
                padding: 5px;
                text-align: center;
                font-weight: 500;
              }
              .folder__stats {
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
            .folder:nth-child(2n) {
              margin-right: 0;
            }
          }
        }

        .files {
          display: flex;
          flex-direction: column;
          // margin-top: 20px;
          .files__block-title {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            background: $hiddenBlockBG;
            .block-title__icon {
              margin-right: 10px;
            }
            .block-title__text {
              font-size: 14px;
              font-weight: 500;
            }
          }
          .files__list {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 10px 0 10px;
            .file {
              margin-right: 10px;
              margin-bottom: 10px;
              width: calc(100% / 3 - 7px);
              border: 1px solid $blockBorder;
              border-radius: 6px;
              overflow: hidden;
              .file__preview-image {
                width: 100%;
                height: 120px;
                object-fit: cover;
                object-position: center;
              }
              .file__create-date {
                padding: 5px 5px 0 5px;
                font-size: 10px;
              }
              .file__title {
                padding: 0 5px 5px 5px;
                font-size: 14px;
                font-weight: 500;
              }
            }
            .file:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

</style>
