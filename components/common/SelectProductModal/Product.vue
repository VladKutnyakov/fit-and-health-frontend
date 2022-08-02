<template>
  <li class="product__item">
    <div class="item__element">
      <i
        class="element__action-btn"
        :class="[
          { 'ti-pin-alt': item.pinned },
          { 'ti-pin2': !item.pinned },
          { 'element__action-btn--active': item.pinned },
        ]"
        @click="changePinnedParam(item)"
      ></i>
    </div>
    <div class="item__element">
      <i
        class="element__action-btn"
        :class="[
          { 'ti-heart': item.favorite },
          { 'ti-heart-broken': !item.favorite },
          { 'element__action-btn--active': item.favorite },
        ]"
        @click="changeFavoriteParam(item)"
      ></i>
    </div>
    <div class="item__element">
      <p class="element__value">{{ item.title }}</p>
    </div>
    <div class="item__element">
      <app-input-text
        :value="item.weight"
        textCenter
        selectOnFocus
        @input="item.weight = $event"
      />
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (item.protein / 100 * item.weight) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (item.fats / 100 * item.weight) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (item.carb / 100 * item.weight) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <p class="element__value">{{ Math.round( (item.kkal / 100 * item.weight) * 100) / 100 }}</p>
    </div>
    <div class="item__element">
      <i
        class="ti-plus element__action-btn"
        @click="selectProduct(item)"
      ></i>
    </div>
  </li>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'

export default {
  props: {
    item: Object,
  },
  components: {
    AppInputText,
  },
  methods: {
    changePinnedParam (item) {
      this.$emit('changePinnedParam', item)
    },
    changeFavoriteParam (item) {
      this.$emit('changeFavoriteParam', item)
    },
    selectProduct (item) {
      this.$emit('selectProduct', item)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.product__item {
  display: flex;
  margin-bottom: 10px;
  padding: 5px 0px;
  background: $white;
  border: 1px solid transparent;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  .item__element {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 120px;
    text-align: center;
    border-right: 1px solid $dividerBorder;
    .element__value {
      font-size: 16px;
    }
    .element__action-btn {
      padding: 8px;
      color: $black30;
      border-radius: 50%;
      transition: $tr-02;
      cursor: pointer;
    }
    .element__action-btn:hover {
      color: $primary;
    }
    .element__action-btn--active {
      color: $primary;
    }
    .element__weight-scale {
      margin-top: 5px;
      margin-left: 5px;
      font-size: 12px;
    }
  }
  .item__element:nth-child(1) {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
  }
  .item__element:nth-child(2) {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
  }
  .item__element:nth-child(3) {
    flex: 1 1 auto;
    min-width: 200px;
  }
  .item__element:nth-child(4) {
    padding: 0 5px;
  }
  .item__element:nth-child(9) {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    border: none;
  }
}

.dark-theme {
  .product__item {
    background: $cardBackgroundDarkBG;
    border: 1px solid $dividerBorderDarkBG;
    box-shadow: $boxShadow;
    .item__element {
      border-right: 1px solid $dividerBorderDarkBG;
      .element__action-btn {
        color: $white20;
      }
      .element__action-btn:hover {
        color: $primary;
      }
      .element__action-btn--active {
        color: $primary;
      }
    }
    .item__element:nth-child(9) {
      border: none;
    }
  }
}

</style>