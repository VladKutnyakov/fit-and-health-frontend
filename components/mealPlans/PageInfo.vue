<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить рацион"
      @btnAction="openProductModal()"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPageInfo from "@/components/basic/AppPageInfo"

export default {
  components: {
    AppPageInfo
  },
  computed: {
    ...mapState({
      pageInfo: state => state.foodCalorieTable.pageInfo,
    }),
    pageInfoElements () {
      return [
        {
          title: "Всего рационов",
          value: this.pageInfo.products || 0,
        },
        {
          title: "Мои рационы",
          value: this.pageInfo.userProducts || 0,
        },
        {
          title: "Закрепленные",
          value: this.pageInfo.pinned || 0,
        },
        {
          title: "Избранное",
          value: this.pageInfo.favorites || 0,
        },
      ]
    }
  },
  methods: {
    openProductModal () {
      this.$store.commit('foodCalorieTable/setModalCondition', 'create')
      this.$store.commit('foodCalorieTable/clearProductForm')
      this.$store.commit('foodCalorieTable/setModalVisibility', { modal: 'productModalActive', condition: true })
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
