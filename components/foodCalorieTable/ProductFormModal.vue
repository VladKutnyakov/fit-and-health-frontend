<template>
  <app-modal :isActive="modalActive" @close="closeModal()">
    <template v-slot:modalHeader>
      <p class="header__title">Добавить продукт</p>
      <div class="header__description">
        <p class="description__text">Заполните форму и нажмите "сохранить продукт", что бы добавить новый продукт в общую базу.</p>
        <p class="description__text">Новый продукт будет доступен только для вас.</p>
      </div>
    </template>
    <template v-slot:modalContent>
      <div class="content__add-product-form">
        <div class="form-group">
          <div class="form-field">
            <p class="field__title">Название</p>
            <app-input-text
              :value="newProduct.title"
              @input="setNewProductParams({field: 'title', value: $event})"
            />
          </div>

          <div class="form-field">
            <p class="field__title">Категория</p>
            <app-select
              minWidth="236px"
              :selectOptionsList="productCategories"
              defaultValue="Мясо"
              alignListLeft
              alignSelectedValueLeft
              @select="setNewProductParams({field: 'category', value: $event})"
            />
          </div>

          <div class="form-field">
            <div class="checkbox-group">
              <app-input-checkbox
                :value="newProduct.favorite"
                label="Добавить в избранное"
                @change="setNewProductParams({field: 'favorite', value: $event})"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-field">
            <p class="field__title">Белки</p>
            <app-input-text
              :value="newProduct.protein"
              @input="setNewProductParams({field: 'protein', value: $event})"
            />
          </div>

          <div class="form-field">
            <p class="field__title">Жиры</p>
            <app-input-text
              :value="newProduct.fats"
              @input="setNewProductParams({field: 'fats', value: $event})"
            />
          </div>

          <div class="form-field">
            <p class="field__title">Углеводы</p>
            <app-input-text
              :value="newProduct.carb"
              @input="setNewProductParams({field: 'carb', value: $event})"
            />
          </div>

          <div class="form-field">
            <p class="field__title">Калорийность</p>
            <app-input-text
              :value="newProduct.kkal"
              @input="setNewProductParams({field: 'kkal', value: $event})"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modalButton>
      <app-button uppercase size14px @click.native="closeModal()">Отмена</app-button>
      <app-button
        uppercase
        size14px
        class="modal-action-btn ml-auto"
        @click.native="saveUserProduct()"
      >Сохранить продукт</app-button>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import AppPageInfo from "@/components/basic/AppPageInfo"
import AppModal from "@/components/basic/AppModal"
import AppInputText from "@/components/basic/AppInputText"
import AppInputCheckbox from "@/components/basic/AppInputCheckbox"
import AppSelect from "@/components/basic/AppSelect"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppPageInfo,
    AppModal,
    AppInputText,
    AppInputCheckbox,
    AppSelect,
    AppButton
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      modalActive: state => state.foodCalorieTable.modalActive,
      newProduct: state => state.foodCalorieTable.newProduct,
      productCategories: state => state.foodCalorieTable.productCategories
    }),
  },
  methods: {
    ...mapMutations({
      closeModal: 'foodCalorieTable/closeModal',
      setNewProductParams: 'foodCalorieTable/setNewProductParams',
    }),
    ...mapActions({
      saveProduct: 'foodCalorieTable/saveProduct'
    }),
    saveUserProduct() {
      this.saveProduct()
      this.closeModal()
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.header__title {
  font-size: 18px;
  font-weight: 500;
}
.header__description {
  margin-top: 10px;
  .description__text {
    font-size: 14px;
  }
}

.content__add-product-form {
  display: flex;
  .form-group {
    flex: 1 1 auto;
    .form-field {
      .field__title {
        padding: 10px 10px 5px 10px;
      }
    }
    .checkbox-group {
      margin-top: 20px;
    }
  }
  .form-group:first-child {
    margin-right: 10px;
  }
  .form-group:last-child {
    margin-left: 10px;
  }
}

</style>
