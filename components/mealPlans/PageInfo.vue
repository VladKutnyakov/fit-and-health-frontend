<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить рацион"
      @btnAction="openModal()"
    />
  </div>
</template>

<script>
import AppPageInfo from "@/components/basic/AppPageInfo"


export default {
  components: {
    AppPageInfo,
  },
  data() {
    return {}
  },
  computed: {
    pageInfoElements () {
      return [
        {
          title: "Всего рационов",
          value: 14
        },
        {
          title: "Избранное",
          value: 0
        },
        {
          title: "Мои рационы",
          value: 0
        }
      ]
    }
  },
  methods: {
    openModal () {
      // console.log('Добавить рацион')
      this.$router.push('/meal-plans/meal-plan-editor')
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
