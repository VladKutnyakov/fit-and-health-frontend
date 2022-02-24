<template>
  <div class="notifications">
    <i class="ti-bell notifications__icon" @click="toggleListVisibility()"></i>
    <div class="notifications__count" @click="toggleListVisibility()">
      <span class="count">5</span>
    </div>

    <div
      class="notifications__notice-list"
      :class="[{ 'notifications__notice-list--visible': listIsVisible }]"
      @click.stop
    >
      <div class="notice-list__title-and-count">
        <p class="title">Оповещения</p>
        <p class="count">Новых: 5</p> 
      </div>
      <ul class="notice-list">
        <li
          ref="notice"
          class="notice"
          :class="[
            { 'notice-success': notice.type === 'success' },
            { 'notice-warning': notice.type === 'warning' },
            { 'notice-info': notice.type === 'info' },
            { 'notice-alert': notice.type === 'alert' }
          ]"
        >
          <div class="notice__info">
            <div class="info__icon">
              <i v-if="notice.type === 'success'" class="ti-check-box"></i>
              <i v-if="notice.type === 'warning'" class="ti-na"></i>
              <i v-if="notice.type === 'info'" class="ti-alert"></i>
              <i v-if="notice.type === 'alert'" class="ti-info"></i>
            </div>
            <p class="info__text">{{ notice.message }}</p>
          </div>

          <div ref="timeIndicator" class="notice__time-indicator"></div>

          <button class="notice__close-btn" @click="closeNotice()">
            <i class="ti-close"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listIsVisible: false,
      notice: {
        type: 'success',
        message: 'Сообщение в оповещалке'
      }
    }
  },
  methods: {
    toggleListVisibility () {
      if (!this.listIsVisible) {
        this.openList()
      } else {
        this.closeList()
      }
    },
    openList () {
      this.listIsVisible = true
      setTimeout(() => {
        document.addEventListener('click', this.closeList)
      }, 0)
    },
    closeList () {
      this.listIsVisible = false
      document.removeEventListener('click', this.closeList)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.notifications {
  position: relative;
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
  .notifications__icon {
    padding: 5px;
    font-size: 20px;
    transition: $tr-02;
  }
  .notifications__icon:hover {
    color: $primary;
  }
  .notifications__count {
    position: absolute;
    top: -6px;
    right: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 23px;
    max-width: 23px;
    min-height: 23px;
    max-height: 23px;
    background: $danger;
    border-radius: 50%;
    .count {
      color: $white;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .notifications__notice-list {
    position: absolute;
    top: calc(100% + 20px);
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 5px;
    background: $white;
    border: 1px solid rgba(34,41,47,.1);
    box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
    border-radius: 6px;
    transition: $tr-02;
    opacity: 0;
    visibility: hidden;
    cursor: initial;
    .notice-list__title-and-count {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      .title {
        font-size: 18px;
        font-weight: 500;
      }
      .count {
        padding: 5px 10px;
        background: $primaryLight5;
        color: $primary;
        font-size: 12px;
        font-weight: 500;
        border-radius: 20px;
      }
    }
    .notice-list {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      min-width: 400px;
      border-top: 1px solid rgba(34,41,47,.1);;
      .notice {
        position: relative;
        margin-bottom: 5px;
        border-radius: 6px;
        .notice__info {
          display: flex;
          align-items: center;
          color: $white;
          .info__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            i {
              font-size: 20px;
            }
          }
          .info__text {
            // border: 1px solid red;
            margin: 10px 40px 12px 0;
          }
        }
        .notice__time-indicator {
          position: absolute;
          bottom: 2px;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
        }
        .notice__close-btn {
          // border: 1px solid red;
          position: absolute;
          top: 0;
          right: 0;
          // transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          color: $white;
          font-size: 12px;
          background: none;
          border: none;
          outline: none;
        }
      }
      .notice:last-child {
        margin-bottom: 0;
      }

      .notice-success {
        background: $successLight2;
      }
      .notice-warning {
        background: $warning;
        .notice__info {
          color: $black;
        }
        .notice__close-btn {
          color: $black;
        }
      }
      .notice-info {
        background: $info;
      }
      .notice-alert {
        background: $danger;
      }
    }
  }
  .notifications__notice-list--visible {
    opacity: 1;
    visibility: visible;
  }
}

</style>
