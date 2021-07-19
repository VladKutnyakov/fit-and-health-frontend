<template>
  <div class="added-marks-form">
    <div class="added-marks-form__block-title">Добавленные отметки</div>

    <div class="added-marks-form__marks">
      <div class="mark" v-for="(item, index) in marks" :key="index">
        <p class="mark__text" :title="item">{{ item.tag }}</p>
        <i class="ti-close mark__icon" @click="remove(index)"></i>
      </div>
    </div>

    <div class="added-marks-form__input-wrapper">
      <input
        class="input"
        type="text"
        v-model="mark"
        placeholder="Добавьте отметку"
        @keypress.enter="add()"
      >
      <button class="action-btn" @click="add()">
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
      mark: ''
    }
  },
  methods: {
    add () {
      this.$emit('addMark', this.mark)
      this.mark = ''
    },
    remove (index) {
      this.$emit('removeMark', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.added-marks-form {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;
  width: 100%;
  min-width: 250px;
  max-width: 250px;
  border-left: 1px solid $blockBorder;
  .added-marks-form__block-title {
    text-align: center;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px dashed $blockBorder;
  }
  .added-marks-form__marks {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    .mark {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 5px;
      background: $hiddenBlockBG;
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
        color: $green;
      }
    }
    .mark:last-child {
      margin-bottom: 0;
    }
  }
  .added-marks-form__input-wrapper {
    display: flex;
    align-items: center;
    margin-top: auto;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .input {
      padding: 5px 10px;
      width: calc(100% - 38px);
      font-size: 14px;
      border: 1px solid $blockBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      transition: $tr-02;
    }
    .input::placeholder {
      font-size: 14px;
      opacity: .6;
      transition: $tr-02;
    }
    .input:focus {
      border: 1px solid $green;
    }
    .input:focus::placeholder {
      opacity: 0;
    }
    .action-btn {
      padding: 5px 10px;
      background: $green;
      color: $white;
      border: 1px solid $green;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
}

</style>
