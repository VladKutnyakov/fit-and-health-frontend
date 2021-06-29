<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить продукт"
      @btnAction="openModal()"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import AppPageInfo from "@/components/basic/AppPageInfo"

export default {
  components: {
    AppPageInfo
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      productsAmount: state => state.foodCalorieTable.products.length,
      categoriesAmount: state => state.foodCalorieTable.productCategories.length
    }),
    ...mapGetters({
      favoriteAmount: 'foodCalorieTable/getFavoriteAmount',
      userProductsAmount: 'foodCalorieTable/getUserProductsAmount'
    }),
    pageInfoElements () {
      return [
        {
          title: "Всего продуктов",
          value: this.productsAmount
        },
        {
          title: "Категорий",
          value: this.categoriesAmount
        },
        {
          title: "Избранное",
          value: this.favoriteAmount
        },
        {
          title: "Мои продукты",
          value: this.userProductsAmount
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      openModal: 'foodCalorieTable/openModal',
    }),
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.current-page-info {
  flex: 1 1 auto;
}

</style>
