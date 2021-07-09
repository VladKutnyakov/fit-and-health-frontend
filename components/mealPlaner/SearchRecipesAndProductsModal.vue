<template>
  <app-modal
    :isActive="searchRecipesAndProductsModalActive"
    headerTitle="Добавление продуктов или рецептов в рацион"
    :headerDescriptions="['Найдите и добавьте продукт или рецепт в выбранный прием пищи.']"
    @close="closeModal()"
  >
    <template v-slot:modalContent>
      <div class="search-recipes-and-products">
        <app-search-block placeholder="Поиск продуктов и рецептов" small />
        <div class="filters">
          <div class="filter__checbox">
            <app-input-checkbox
              small
              class="input-item"
              v-for="(item, index) in filterByType"
              :key="index"
              v-model="filterByTypeChecked"
              :label="item"
              :value="item"
            />
          </div>
          <div class="filter__radio">
            <app-input-radio
              small
              class="input-item"
              v-for="(item, index) in filterByMarks"
              :key="index"
              v-model="filterByMarksChecked"
              :label="item"
              :value="item"
            />
          </div>
        </div>

        <div class="founding__results">
          <found-product-or-recipe
            v-for="(item, index) in products"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <div class="footer__action-btns">
        <app-button
          @click.native="closeModal()"
        >Закрыть</app-button>
      </div>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppModal from '@/components/basic/AppModal'
import AppInputRadio from '@/components/basic/AppInputRadio'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FoundProductOrRecipe from '@/components/mealPlaner/FoundProductOrRecipe'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppModal,
    AppInputRadio,
    AppInputCheckbox,
    AppSearchBlock,
    FoundProductOrRecipe,
    AppButton,
  },
  data() {
    return {
      filterByMarks: ['Все совпадения', 'Добавленные мной', 'Избранное'],
      filterByMarksChecked: 'Все совпадения',
      filterByType: ['Продукты', 'Рецепты'],
      filterByTypeChecked: ['Продукты', 'Рецепты'],
    }
  },
  computed: {
    ...mapState({
      searchRecipesAndProductsModalActive: state => state.mealPlaner.searchRecipesAndProductsModalActive,
      products: state => state.mealPlaner.products,
    })
  },
  methods: {
    ...mapMutations({
      closeModal: 'mealPlaner/setSearchRecipesAndProductsModalActive'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.search-recipes-and-products {
  display: flex;
  flex-direction: column;
  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    .filter__radio {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .input-item {
        margin-right: 20px;
      }
      .input-item:last-child {
        margin-right: 0;
      }
    }
    .filter__checbox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .input-item {
        margin-right: 20px;
      }
      .input-item:last-child {
        margin-right: 0;
      }
    }
  }
  .founding__results {
    padding: 10px;
    max-height: 400px;
    background: $white;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0 0 0 / 25%);
    overflow: auto;
  }
}

.footer__action-btns {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

</style>
