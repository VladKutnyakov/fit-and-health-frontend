<template>
  <div
    v-show="isActive"
    class="modal__wrapper"
    @mousedown="closeModal()"
  >
    <div
      class="modal__content-wrapper"
      :style="[
        { 'width': width },
        { 'max-width': maxWidth },
      ]"
      @mousedown.stop
    >

      <div v-if="haveHeaderTemplate" class="modal__header">
        <slot name="modalHeader"></slot>
      </div>

      <div v-if="!haveHeaderTemplate && (headerTitle || headerDescriptions)" class="modal__header">
        <p class="header__title">{{ headerTitle }}</p>
        <div class="header__description" v-if="headerDescriptions">
          <p
            v-for="(item, index) in headerDescriptions"
            :key="index"
            class="description__text"
          >{{ item }}</p>
        </div>
      </div>

      <div v-if="haveContentTemplate" class="modal__content">
        <slot name="modalContent"></slot>
      </div>

      <div v-if="haveFooterTemplate" class="modal__footer">
        <slot name="modalFooter"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    width: String,
    maxWidth: String,
    headerTitle: String,
    headerDescriptions: Array,
  },
  computed: {
    haveHeaderTemplate () {
      if (this.$slots.modalHeader) {
        return true
      }
      return false
    },
    haveContentTemplate () {
      if (this.$slots.modalContent) {
        return true
      }
      return false
    },
    haveFooterTemplate () {
      if (this.$slots.modalFooter) {
        return true
      }
      return false
    }
  },
  watch: {
    isActive: {
      handler: function () {
        if (this.isActive) {
          document.querySelector('#__nuxt').style.marginTop = `-${document.body.scrollTop}px`
          document.querySelector('#__nuxt').style.overflowY = 'scroll'
          document.querySelector('body').classList.add('body-overflow')
        } else {
          document.querySelector('#__nuxt').style.marginTop = '0px'
          document.querySelector('#__nuxt').style.overflowY = ''
          document.querySelector('body').classList.remove('body-overflow')
        }
      },
      // Коллбэк (handler) будет вызываться каждый раз, когда изменяется любое из свойств наблюдаемого объекта, независимо от глубины их вложенности
      deep: true,
      // коллбэк (handler) будет вызван сразу же после начала наблюдения если свойство установленно true
      immediate: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    // onScroll ($event) {
    //   $event.preventDefault
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.modal__wrapper {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.4);
  z-index: 9999;
  .modal__content-wrapper {
    // border: 1px solid red;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    // width: 100%;
    max-width: 800px;
    max-height: calc(100vh - 80px);
    background: $white;
    border-radius: 6px;
    overflow: hidden;
    .modal__header {
      // border: 1px solid red;
      padding: 15px 20px;
      border-bottom: 1px solid $dividerBorder;
      .header__title {
        font-size: 20px;
        font-weight: 500;
      }
      .header__description {
        margin-top: 5px;
        .description__text {
          font-size: 14px;
        }
      }
    }
    .modal__content {
      // border: 1px solid red;
      padding: 20px 10px;
      overflow-y: auto;
    }
    .modal__content::-webkit-scrollbar {
      width: 4px;
    }
    .modal__content::-webkit-scrollbar-thumb {
      background: $primaryLight4;
      border-radius: 50px;
    }
    .modal__content::-webkit-scrollbar-track {
      background: $black10;
    }
    .modal__footer {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      padding: 15px 20px;
      border-top: 1px solid $dividerBorder;
    }
  }
}

.dark-theme {
  .modal__wrapper {
    background: $black60;
    .modal__content-wrapper {
      background: $cardBackgroundDarkBG;
      .modal__header {
        border-bottom: 1px solid $dividerBorderDarkBG;
      }
      .modal__content::-webkit-scrollbar-thumb {
        background: $primary;
      }
      .modal__content::-webkit-scrollbar-track {
        background: $black;
      }
      .modal__footer {
        border-top: 1px solid $dividerBorderDarkBG;
      }
    }
  }
}

</style>
