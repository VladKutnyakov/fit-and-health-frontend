<template>
  <div class="added-marks">
    <div class="added-marks__block-title">Добавленные отметки:</div>

    <div class="added-marks__marks">
      <div class="mark" v-for="(item, index) in marks" :key="index">
        <p class="mark__text" :title="item">{{ item.title }}</p>
        <i class="ti-close mark__icon" @click="removeMark(index)"></i>
      </div>
    </div>

    <div class="added-marks__input-wrapper">
      <input
        class="input"
        type="text"
        v-model="mark"
        placeholder="Добавьте отметку"
        @keypress.enter="addMark()"
      >
      <button class="action-btn" @click="addMark()">
        <i class="ti-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    marks: Array
  },
  data () {
    return {
      mark: null
    }
  },
  methods: {
    addMark () {
      // if (this.mark) {
      //   this.$emit('addMark', { index: null, value: this.mark })
      //   this.mark = null
      // }
    },
    removeMark (item, index) {
      // this.$emit('removeMark', { index: index, value: this.mark })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.added-marks {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100%;
  min-width: 250px;
  max-width: 250px;
  .added-marks__block-title {
    padding: 0 20px;
    font-weight: 500;
    padding-bottom: 5px;
  }
  .added-marks__marks {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    border: 1px solid $dividerBorder;
    border-radius: 6px;
    .mark {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 5px;
      background: $black10;
      border-radius: 6px;
      .mark__text {
        // border: 1px solid red;
        margin-left: 5px;
        width: calc(100% - 25px);
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .mark__icon {
        // border: 1px solid red;
        padding: 5px;
        font-size: 10px;
        transition: $tr-02;
        cursor: pointer;
      }
      .mark__icon:hover {
        color: $primary;
      }
    }
    .mark:last-child {
      margin-bottom: 0;
    }
  }
  .added-marks__input-wrapper {
    display: flex;
    margin-top: auto;
    padding-top: 10px;
    .input {
      padding: 8px 15px;
      width: calc(100% - 38px);
      border: 1px solid $dividerBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      transition: $tr-02;
    }
    .input::placeholder {
      opacity: .6;
      transition: $tr-02;
    }
    .input:focus {
      border: 1px solid $primary;
    }
    .input:focus::placeholder {
      opacity: 0;
    }
    .input::selection {
      color: $white;
      background: $primary;
    }
    .action-btn {
      flex: 1 1 auto;
      background: $primary;
      color: $white;
      border: none;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
}

.dark-theme {
  .added-marks {
    .added-marks__marks {
      background: $black20;
      .mark {
        background: $white15;
      }
    }
    .added-marks__input-wrapper {
      .input {
        background: $black20;
      }
    }
  }
}

</style>
