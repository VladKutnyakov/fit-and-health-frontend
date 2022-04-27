<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить программу"
      @btnAction="openModal()"
    />
  </div>
</template>

<script>
import AppPageInfo from '@/components/basic/AppPageInfo'

export default {
  components: {
    AppPageInfo
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: "Всего программ",
          value: this.$store.state.trainingPrograms.pageInfo.programs
        },
        {
          title: "Мои программы",
          value: this.$store.state.trainingPrograms.pageInfo.userPrograms
        },
        {
          title: "Закрепленные",
          value: this.$store.state.trainingPrograms.pageInfo.pinnedPrograms
        },
        {
          title: "Избранные",
          value: this.$store.state.trainingPrograms.pageInfo.favoritePrograms
        }
      ]
    }
  },
  methods: {
    openModal () {
      // console.log('Добавить программу тренировок')
      this.$router.push('/training-programs/training-program-editor')
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
