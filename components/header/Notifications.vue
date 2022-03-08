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
              <i v-if="notice.type === 'info'" class="ti-info"></i>
              <i v-if="notice.type === 'alert'" class="ti-alert"></i>
            </div>
            <p class="info__text">{{ notice.message }}</p>
          </div>

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
    background: $white;
    box-shadow: $cardShadow;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    transition: $tr-02;
    opacity: 0;
    visibility: hidden;
    cursor: initial;
    .notice-list__title-and-count {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      // .title {}
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
      min-width: 400px;
      border-top: 1px solid $dividerBorder;
      .notice {
        position: relative;
        .notice__info {
          display: flex;
          align-items: center;
          .info__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            i {
              padding: 10px;
              color: $white;
              font-size: 20px;
              border-radius: 50%;
            }
          }
          .info__text {
            margin: 10px 40px 12px 0;
          }
        }
        .notice__close-btn {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
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
        .notice__info {
          .info__icon {
            i {
              background: $successLight5;
            }
          }
        }
      }
      .notice-warning {
        .notice__info {
          .info__icon {
            i {
              background: $warningLight5;
            }
          }
        }
      }
      .notice-info {
        .notice__info {
          .info__icon {
            i {
              background: $infoLight5;
            }
          }
        }
      }
      .notice-alert {
        .notice__info {
          .info__icon {
            i {
              background: $dangerLight5;
            }
          }
        }
      }
    }
  }
  .notifications__notice-list--visible {
    opacity: 1;
    visibility: visible;
  }
}

body.dark {
  .notifications {
    .notifications__notice-list {
      border: 1px solid $dividerBorderDarkBG;
      background: $cardBackgroundDarkBG;
      .notice-list {
        border-top: 1px solid $dividerBorderDarkBG;
      }
    }
  }
}

</style>
