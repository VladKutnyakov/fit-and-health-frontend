<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить упражнение"
      @btnAction="openModal()"
    />
  </div>
</template>

<script>
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppPageInfo,
    AppButton,
  },
  computed: {
    pageInfoElements () {
      return [
        {
          title: "Всего упражнений",
          value: this.$store.state.exercises.pageInfo.exercises
        },
        {
          title: "Мои упражнения",
          value: this.$store.state.exercises.pageInfo.userExercises
        },
        {
          title: "Закрепленные",
          value: this.$store.state.exercises.pageInfo.pinnedExercises
        },
        {
          title: "Избранные",
          value: this.$store.state.exercises.pageInfo.favoriteExercises
        }
      ]
    }
  },
  methods: {
    openModal () {
      this.$store.commit('exercises/setModalCondition', 'create')
      this.$store.commit('exercises/clearExerciseForm')
      this.$store.commit('exercises/setModalVisibility', { modal: 'exerciseFormModalActive', condition: true })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.current-page-info {
  flex: 1 1 auto;
}

</style>
