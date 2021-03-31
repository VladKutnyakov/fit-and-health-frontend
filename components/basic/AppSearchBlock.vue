<template>
  <div ref="search" class="app-search-block">
    <input
      ref="searchInput"
      class="search__input"
      type="text"
      :placeholder="placeholder"
      v-model="searchString"
    >
    <div class="search__action-btn">
      <i class="search__action-btn-icon ti-close" @click="resetSearchInputValue()" />
      <i v-if="filters" class="search__action-btn-icon ti-panel" @click="openFilters()"></i>
    </div>
    <div class="search__btn" @click="searchProduct()">
      <i v-if="small" class="search__btn-text ti-search" />
      <p v-if="!small" class="search__btn-text">Найти</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    small: Boolean,
    filters: Boolean
  },
  data () {
    return {
      isVisible: false,
      searchString: ''
    }
  },
  watch: {
    searchString () {
      this.$emit('searchStringChanged', this.searchString)
    }
  },
  methods: {
    resetSearchInputValue () {
      this.searchString = ''
    },
    searchProduct () {
      this.$emit('search')
    },
    openFilters () {
      this.$emit('openFilters')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-search-block {
  // border: 1px solid red;
  display: flex;
  .search__input {
    padding: 10px 0px 10px 20px;
    width: 100%;
    font-family: $fontMontserrat;
    border: 1px solid $blockBorder;
    border-right: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    transition: $tr-02;
  }
  .search__action-btn {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    padding: 0 10px;
    color: $green;
    border-top: 1px solid $blockBorder;
    border-bottom: 1px solid $blockBorder;
    transition: $tr-02;
    .search__action-btn-icon {
      // border: 1px solid red;
      padding: 5px;
      color: $gray-dark;
      user-select: none;
      cursor: pointer;
    }
    .search__action-btn-icon:first-child {
      margin-right: 5px;
    }
  }
  .search__btn {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $green;
    border: 1px solid $green;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    user-select: none;
    cursor: pointer;
    transition: $tr-02;
    .search__btn-text {
      color: $white;
      transition: $tr-02;
    }
  }
}

</style>
