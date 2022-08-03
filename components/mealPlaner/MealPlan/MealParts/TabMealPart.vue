<template>
  <div class="meal-part">
    <div class="settings-and-food">
      <div class="settings">
        <div class="settings__element">
          <p class="element__title">Время приема пищи:</p>
          <app-input-text
            :value="mealParts[selectedMealPart].mealTime"
            @input="setMealPlanerInfoFieldValue({ field: 'mealParts', subfield: 'mealTime', index: selectedMealPart, newValue: $event })"
          />
          <!-- <app-input-time
            :value="mealParts[selectedMealPart].mealTime"
            @input="setMealPartTime($event)"
          />
          {{ mealParts[selectedMealPart].mealTime }} -->
        </div>
        <div class="settings__element">
          <p class="element__title">Название приема пищи:</p>
          <app-input-text
            :value="mealParts[selectedMealPart].title"
            @input="setMealPlanerInfoFieldValue({ field: 'mealParts', subfield: 'title', index: selectedMealPart, newValue: $event })"
          />
        </div>
      </div>

      <div class="products-and-recipes">
        <p class="products-and-recipes__block-title">Добавленные продкты и рецепты:</p>
        <div class="products-and-recipes__content">
          <div class="table-headers">
            <div class="item__element">
              <i class="ti-exchange-vertical element__icon"></i>
            </div>
            <div class="item__element">
              <p class="element__title">Название</p>
            </div>
            <div class="item__element">
              <p class="element__title">Вес</p>
            </div>
            <div class="item__element">
              <p class="element__title">Белки</p>
            </div>
            <div class="item__element">
              <p class="element__title">Жиры</p>
            </div>
            <div class="item__element">
              <p class="element__title">Углеводы</p>
            </div>
            <div class="item__element">
              <p class="element__title">Ккал</p>
            </div>
            <div class="item__element">
              <i class="ti-pencil element__icon"></i>
            </div>
          </div>

          <added-product
            v-for="(item, index) in mealPartProducts"
            :key="index"
            :item="item"
          />
          <!-- <added-recipe /> -->
        </div>
      </div>
    </div>

    <div class="meal-part__actions">
      <app-button
        class="mr-10"
        @click="openSelectProductModal()"
      >Добавить продукт</app-button>
      <app-button
        @click="openSelectRecipeModal()"
      >Добавить рецепт</app-button>

      <app-button
        class="ml-auto"
        dangerBtn
        @click="removeSelectedMealPart()"
      >Удалить прием пищи</app-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'
import AppInputTime from '@/components/basic/AppInputTime'
import AddedProduct from '@/components/mealPlaner/MealPlan/MealParts/AddedProduct'
import AddedRecipe from '@/components/mealPlaner/MealPlan/MealParts/AddedRecipe'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppInputText,
    AppInputTime,
    AddedProduct,
    AddedRecipe,
    AppButton
  },
  computed: {
    ...mapState({
      mealParts: state => state.mealPlaner.mealPlanerInfo.fields.mealParts,
      selectedMealPart: state => state.mealPlaner.selectedMealPart,
    }),
    mealPartProducts () {
      return this.mealParts[this.selectedMealPart].mealPartProducts
    },
  },
  methods: {
    ...mapMutations({
      setMealPlanerInfoFieldValue: 'mealPlaner/setMealPlanerInfoFieldValue',
    }),
    openSelectProductModal () {
      this.$store.commit('mealPlaner/setModalVisibility', { modal: 'selectProductModalActive', condition: true })
    },
    openSelectRecipeModal () {
      this.$store.commit('mealPlaner/setModalVisibility', { modal: 'selectRecipeModalActive', condition: true })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.meal-part {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .settings-and-food {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    .settings {
      display: flex;
      .settings__element {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        .element__title {
          font-weight: 500;
          padding: 5px 10px 5px 10px;
        }
      }
      .settings__element:first-child {
        max-width: 300px;
      }
      .settings__element:last-child {
        margin-right: 0;
      }
    }
    .products-and-recipes {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .products-and-recipes__block-title {
        font-weight: 500;
        padding: 10px;
      }
      .products-and-recipes__content {
        // border: 1px solid red;
        position: relative;
        flex: 1 1 auto;
        padding: 10px;
        height: 600px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        overflow: hidden;
        .table-headers {
          display: flex;
          margin-bottom: 5px;
          padding: 10px 0px;
          background: $primary;
          border: 1px solid $primary;
          border-radius: 6px;
          .item__element {
            flex: 0 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 120px;
            text-align: center;
            border-right: 1px solid $dividerBorder;
            .element__title {
              text-transform: uppercase;
              color: $white;
              font-size: 12px;
              font-weight: 500;
            }
            .element__icon {
              color: $white;
              font-size: 14px;
            }
          }
          .item__element:nth-child(1) {
            max-width: 50px;
          }
          .item__element:nth-child(2) {
            flex: 1 1 auto;
            min-width: 200px;
          }
          .item__element:nth-child(3) {
            padding: 0 5px;
          }
          .item__element:nth-child(8) {
            width: 50px;
            min-width: 50px;
            max-width: 50px;
            border: none;
          }
        }
      }
    }
    .actions {
      display: flex;
      margin-top: 10px;
    }
  }
  .meal-part__actions {
    display: flex;
    margin-bottom: 10px;
  }
}

.dark-theme {
  .meal-part {
    .settings-and-food {
      .products-and-recipes {
        .products-and-recipes__content {
          background: $black15;
          .table-headers {
            .item__element {
              border-right: 1px solid $white;
            }
            .item__element:last-child {
              border-right: none;
            }
          }
        }
      }
    }
  }
}

</style>
