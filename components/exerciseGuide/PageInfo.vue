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
import { mapState } from 'vuex'
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppPageInfo,
    AppButton,
  },
  data () {
    return {
      modalActive: false,
      newExercise: {
        title: '',
        techniqueDescription: '',
        category: ''
      }
    }
  },
  computed: {
    ...mapState({
      musclesGroupsCount: state => state.exercises.exercisesList.length
    }),
    pageInfoElements () {
      return [
        {
          title: "Всего упражнений",
          value: this.$store.getters['exercises/getExercisesCount']
        },
        {
          title: "Категорий",
          value: this.musclesGroupsCount
        },
        {
          title: "Мои упражнения",
          value: this.$store.getters['exercises/getUserExercisesCount']
        }
      ]
    }
  },
  methods: {
    openModal () {
      // console.log('Добавить упражнение');
      this.$store.commit('exercises/setModalVisibility', {modal: 'exerciseFormModalActive', condition: true})
    },
    // toggleModalVisibility () {
    //   console.log('Открыть модальное окно "Добавить упражнение"')
    //   // this.modalActive = !this.modalActive
    // },
    saveExercise () {
      // console.log('сохранить упражнение в БД', this.newExercise)
      this.$store.dispatch('exercises/saveNewExercises', this.newExercise)
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
