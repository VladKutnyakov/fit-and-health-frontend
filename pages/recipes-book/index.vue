<template>
  <app-page pageTitle="Книга рецептов" :breadcrumbs="breadcrumbs">
    <div class="content">
      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить рецепт"
        @btnAction="toggleModal()"
      />
      <div class="filters-and-results">
        <sorting-filters />
        <search-results />
      </div>

      <app-modal :isActive="modalActive" @close="toggleModal()">
        <template v-slot:modalHeader>
          <p class="modal__title">Добавить рецепт</p>
          <p class="modal__description">Заполните форму и нажмите "сохранить рецепт", что бы добавить новый рецепт в общую базу.</p>
        </template>

        <template v-slot:modalContent>
          <div>
            <div class="item">
              <p>Title:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>Description:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>Products:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>CookingTime:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>CookingSkill:</p>
              <input type="text">
            </div>
          </div>
        </template>

        <template v-slot:modalButton>
          <div class="modal__action-btns">
            <app-button uppercase @click.native="toggleModal()" >Отмена</app-button>
            <app-button uppercase >Сохранить рецепт</app-button>
          </div>
        </template>
      </app-modal>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/basic/AppPage'
import AppPageInfo from '@/components/basic/AppPageInfo'
import SortingFilters from '@/components/recipesBook/SortingFilters/SortingFilters'
import SearchResults from '@/components/recipesBook/SearchResults/SearchResults'
import AppModal from '@/components/basic/AppModal'
import AppButton from '@/components/basic/AppButton'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  async asyncData ({ store }) {
    await store.dispatch('recipes/fetchRecipes')
  },
  components: {
    AppPage,
    AppPageInfo,
    SortingFilters,
    SearchResults,
    AppModal,
    AppButton
  },
  data () {
    return {
      breadcrumbs: [
        {
          title: 'Моя страница',
          icon: 'ti-home',
          link: '/profile',
          active: true,
        },
        {
          title: 'Книга рецептов',
          icon: 'ti-book',
          link: '/recipes-book',
          active: false,
        },
      ],
      pageInfoElements: [
        {
          title: 'Всего рецептов',
          value: 952
        },
        {
          title: 'Избранное',
          value: 2
        },
        {
          title: 'Мои рецепты',
          value: 14
        }
      ],
      modalActive: false
    }
  },
  methods: {
    toggleModal () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.content {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1700px;
  .filters-and-results {
    display: flex;
  }
  .modal__title {
    font-size: 20px;
    font-weight: 500;
  }
  .modal__description {
    margin-top: 5px;
    font-size: 14px;
  }
  .modal__action-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

</style>
