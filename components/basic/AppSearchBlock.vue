<template>
  <div class="app-search-block" :class="[{ 'app-search-block--disabled': disabled }]">
    <input
      v-model="searchString"
      class="search__input"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder"
      @keypress.enter="search()"
    >
    <div class="search__action-btns">
      <i class="search__action-btn-icon ti-close" @click="clearSearch()" />
      <i v-if="filters" class="search__action-btn-icon ti-panel" @click="openFilters()"></i>
    </div>
    <div class="search__btn" @click="search()">
      <p v-if="!small" class="search__btn-text">Найти</p>
      <i v-if="small" class="search__small-btn-text ti-search" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    small: Boolean,
    filters: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      searchString: null,
    }
  },
  watch: {
    searchString (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    clearSearch () {
      if (!this.disabled) {
        this.searchString = null
        this.$emit('clear', null)
      }
    },
    search () {
      if (!this.disabled) {
        this.$emit('search', this.searchString)
      }
    },
    openFilters () {
      if (!this.disabled) {
        this.$emit('openFilters')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-search-block {
  // border: 1px solid red;
  display: flex;
  border-radius: 6px;
  .search__input {
    padding: 10px 0px 10px 20px;
    width: 100%;
    font-family: $fontMontserrat;
    border: 1px solid $dividerBorder;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    transition: $tr-02;
  }
  .search__input:focus {
    border: 1px solid $primary;
    border-right: 1px solid $dividerBorder;
  }
  .search__input:focus + .search__action-btns {
    border-top: 1px solid $primary;
    border-bottom: 1px solid $primary;
  }
  .search__action-btns {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    padding: 5px;
    color: $primary;
    border-top: 1px solid $dividerBorder;
    border-bottom: 1px solid $dividerBorder;
    transition: $tr-02;
    .search__action-btn-icon {
      // border: 1px solid red;
      padding: 5px;
      color: $text;
      user-select: none;
      transition: $tr-02;
      cursor: pointer;
    }
    .search__action-btn-icon:hover {
      color: $primary;
    }
  }
  .search__btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $primary;
    border: 1px solid $primary;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    user-select: none;
    transition: $tr-02;
    cursor: pointer;
    overflow: hidden;
    .search__btn-text {
      padding: 0 20px;
      color: $white;
    }
    .search__small-btn-text {
      padding: 0 15px;
      color: $white;
    }
  }
}

.app-search-block--disabled {
  .search__btn {
    opacity: 0.5;
  }
}

body.dark {
  .app-search-block {
    .search__input {
      background: $black20;
      color: $textLight;
      border: 1px solid $dividerBorderDarkBG;
    }
    .search__input:focus {
      border: 1px solid $primary;
      border-right: 1px solid $dividerBorderDarkBG;
    }
    .search__action-btns {
      background: $black20;
      color: $textLight;
      border-top: 1px solid $dividerBorderDarkBG;
      border-bottom: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
