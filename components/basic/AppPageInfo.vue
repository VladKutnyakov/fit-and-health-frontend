<template>
  <div class="page-info">

    <ul class="page-info__elements">
      <li v-for="(element, index) in infoElements" :key="index" class="element">
        <p class="element__text">{{ element.title }}</p>
        <p class="element__value">{{ element.value === null ? 0 : element.value.toLocaleString() }}</p>
      </li>
    </ul>

    <app-button
      v-if="btnTitle"
      class="page-info__btn"
      @click="btnHandler()"
    >{{ btnTitle }}</app-button>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  props: {
    infoElements: Array,
    btnTitle: String
  },
  components: {
    AppButton
  },
  methods: {
    btnHandler () {
      this.$emit('btnAction')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.page-info {
  // border: 1px solid red;
  display: flex;
  flex: 1 1 auto;
  margin-bottom: 40px;
  .page-info__elements {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .element {
      // border: 1px solid red;
      padding: 0 40px;
      border-right: 1px solid $dividerBorder;
      .element__text {
        font-size: 18px;
      }
      .element__value {
        color: $primary;
        font-size: 30px;
        font-weight: 600;
      }
    }
    .element:first-child {
      padding-left: 0px;
    }
    .element:last-child {
      margin-right: auto;
      border-right: none;
    }
  }
  .page-info__btn {
    align-self: center;
    margin-left: auto;
  }
}

.dark-theme {
  .page-info {
    .page-info__elements {
      .element {
        border-right: 1px solid $dividerBorderDarkBG;
      }
      .element:last-child {
        margin-right: auto;
        border-right: none;
      }
    }
  }
}

</style>