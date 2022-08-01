<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить продукт"
      @btnAction="openProductModal()"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
      // productsAmount: state => state.foodCalorieTable.products.length,
      // categoriesAmount: state => state.foodCalorieTable.productCategories.length
    }),
    ...mapGetters({
      // favoriteAmount: 'foodCalorieTable/getFavoriteAmount',
      // userProductsAmount: 'foodCalorieTable/getUserProductsAmount'
    }),
    pageInfoElements () {
      return [
        {
          title: "Всего продуктов",
          value: 0
        },
        {
          title: "Категорий",
          value: 0
        },
        {
          title: "Избранное",
          value: 0
        },
        {
          title: "Мои продукты",
          value: 0
        }
      ]
    }
  },
  methods: {
    openProductModal () {
      this.$store.commit('foodCalorieTable/setModalCondition', 'create')
      this.$store.commit('foodCalorieTable/clearProductForm')
      this.$store.commit('foodCalorieTable/toggleModalVisibility', {modal: 'productModalActive', condition: true})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.current-page-info {
  flex: 1 1 auto;
}

</style>
