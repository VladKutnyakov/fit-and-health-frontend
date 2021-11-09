<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить упражнение"
      @btnAction="openModal()"
    />

    <app-modal :isActive="modalActive" @close="toggleModalVisibility()">
      <template v-slot:modalHeader>
        <p class="header__title">Добавить упражнение</p>
        <div class="header__description">
          <p class="description__text">Заполните форму и нажмите "сохранить продукт", что бы добавить новый продукт в общую базу.</p>
          <p class="description__text">Новый продукт будет доступен только для вас.</p>
        </div>
      </template>
      <template v-slot:modalContent>
        <div class="new-exercise-form">
          <input type="text" v-model="newExercise.title" placeholder="title">
          <input type="text" v-model="newExercise.techniqueDescription" placeholder="technique description">
          <input type="text" v-model="newExercise.category" placeholder="category">
        </div>
      </template>
      <template v-slot:modalButton>
        <app-button uppercase @click.native="toggleModalVisibility()">Отменить</app-button>
        <app-button uppercase class="ml-auto" @click.native="saveExercise()">Сохранить</app-button>
      </template>
    </app-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppModal from '@/components/basic/AppModal'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppPageInfo,
    AppModal,
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
      console.log('Добавить упражнение');
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
