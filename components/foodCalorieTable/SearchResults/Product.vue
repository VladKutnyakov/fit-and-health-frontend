<template>
  <li class="product__item">
    <div class="item__element">
      <i
        v-if="!item.pinned"
        class="ti-pin-alt element__action-btn"
        :class="[{'element__action-btn--active': item.pinned}]"
        @click="changePinnedParam(item.id)"
      ></i>
      <i
        v-if="item.pinned"
        class="ti-pin2 element__action-btn"
        :class="[{'element__action-btn--active': item.pinned}]"
        @click="changePinnedParam(item.id)"
      ></i>
    </div>
    <div class="item__element">
      <i
        v-if="!item.favorite"
        class="ti-heart-broken element__action-btn"
        :class="[{'element__action-btn--active': item.favorite}]"
        @click="changeFavoriteParam(item.id)"
      ></i>
      <i
        v-if="item.favorite"
        class="ti-heart element__action-btn"
        :class="[{'element__action-btn--active': item.favorite}]"
        @click="changeFavoriteParam(item.id)"
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
        @input="changeProductWeight({item, newWeight: $event})"
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
        class="ti-pencil element__action-btn"
        :class="[
          { 'element__action-btn--active': item.user },
          { 'element__action-btn--disabled': !item.user },
        ]"
        @click="editProduct(item)"
      ></i>
    </div>
    <div class="item__element">
      <i
        class="ti-trash element__action-btn"
        :class="[
          { 'element__action-btn--active': item.user },
          { 'element__action-btn--remove': item.user },
          { 'element__action-btn--disabled': !item.user },
        ]"
        @click="removeProduct(item)"
      ></i>
    </div>
  </li>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'

export default {
  props: {
    item: Object
  },
  components: {
    AppInputText
  },
  computed: {
    ...mapState({
      searchFilters: state => state.foodCalorieTable.searchFilters,
    }),
  },
  methods: {
    ...mapMutations({
      changeProductWeight: 'foodCalorieTable/changeProductWeight'
    }),
    changePinnedParam (id) {
      this.$store.dispatch('foodCalorieTable/changePinnedParam', id).then(() => {
        this.$store.dispatch('foodCalorieTable/fetchPageInfo')
        this.fetchProductsList()
      })
    },
    changeFavoriteParam (id) {
      this.$store.dispatch('foodCalorieTable/changeFavoriteParam', id).then(() => {
        this.$store.dispatch('foodCalorieTable/fetchPageInfo')
        this.fetchProductsList()
      })
    },
    editProduct (item) {
      if (item.user) {
        this.$store.commit('foodCalorieTable/setModalCondition', 'edit')
        this.$store.commit('foodCalorieTable/clearProductForm')
        this.$store.commit('foodCalorieTable/setProductForm', JSON.parse(JSON.stringify(item)))
        this.$store.commit('foodCalorieTable/setModalVisibility', { modal: 'productModalActive', condition: true })
      }
    },
    removeProduct (item) {
      if (item.user) {
        this.$store.commit('foodCalorieTable/setProductToRemove', item)

        this.$store.commit('foodCalorieTable/setModalVisibility', { modal: 'confirmRemoveProductModalActive', condition: true })
      }
    },
    fetchProductsList () {
      const payload = {
        searchString: this.searchFilters.searchString,
        userType: this.searchFilters.userType?.id || null,
        userRelation: this.searchFilters.userRelation?.id || null,

        orderBy: this.searchFilters.orderBy?.id || null,
        categories: [],
      }

      const categoriesIDs = []
      this.searchFilters.categories.forEach(element => {
        categoriesIDs.push(element.id)
      })

      payload.categories = categoriesIDs.join(', ')

      this.$store.commit('foodCalorieTable/setWaiteProductsListUpdate', true)
      this.$store.dispatch('foodCalorieTable/fetchProductsList', payload).finally(() => {
        this.$store.commit('foodCalorieTable/setWaiteProductsListUpdate', false)
      })
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/vars.scss";

.product__item {
  display: flex;
  margin-bottom: 10px;
  padding: 5px 0px;
  background: $white;
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
    .element__action-btn--remove {
      color: $red;
    }
    .element__action-btn--disabled {
      color: $black30;
      cursor: default;
    }
    .element__action-btn--disabled:hover {
      color: $black30 !important;
      cursor: default;
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
    .element__action-btn:hover {
      color: $black;
    }
  }
  .item__element:nth-child(10) {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    border: none;
    .element__action-btn:hover {
      color: $red;
    }
  }
}

.dark-theme {
  .product__item {
    background: $cardBackgroundDarkBG;
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
      .element__action-btn--remove {
        color: $red;
      }
      .element__action-btn--disabled {
        color: $white20;
      }
      .element__action-btn--disabled:hover {
        color: $white20 !important;
      }
    }
  }
}

</style>