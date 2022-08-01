<template>
  <app-modal
    :isActive="productModalActive"
    :headerTitle="headerTitle"
    :headerDescriptions="headerDescriptions"
    @close="toggleModalVisibility({modal: 'productModalActive', condition: false})"
  >
    <template v-slot:modalContent>
      <div class="content__add-product-form">
        <div class="form-group">
          <div class="form-field">
            <p class="field__title">Название</p>
            <app-input-text
              :value="productForm.fields.title"
              :error="productForm.errors.title"
              placeholder="Введите значение"
              @input="
                setProductFormFieldValue({field: 'title', newValue: $event}),
                setProductFormFieldError({field: 'title', enabled: false, errorMessage: null})
              "
            />
          </div>

          <div class="form-field">
            <p class="field__title">Категория</p>
            <app-select
              :value="productForm.fields.category"
              :selectOptionsList="productCategories"
              :error="productForm.errors.category"
              alignListLeft
              alignSelectedValueLeft
              placeholder="Введите значение"
              @select="
                setProductFormFieldValue({field: 'category', newValue: $event}),
                setProductFormFieldError({field: 'category', enabled: false, errorMessage: null})
              "
            />
          </div>

          <div class="form-field">
            <div class="checkbox-group">
              <app-input-checkbox
                :value="productForm.fields.favorite"
                :error="productForm.errors.favorite"
                label="Добавить в избранное"
                @change="
                  setProductFormFieldValue({field: 'favorite', newValue: $event}),
                  setProductFormFieldError({field: 'favorite', enabled: false, errorMessage: null})
                "
              />
            </div>
          </div>

          <div class="form-field">
            <div class="checkbox-group">
              <app-input-checkbox
                :value="productForm.fields.pinned"
                :error="productForm.errors.pinned"
                label="Закрепить"
                @change="
                  setProductFormFieldValue({field: 'pinned', newValue: $event}),
                  setProductFormFieldError({field: 'pinned', enabled: false, errorMessage: null})
                "
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-field">
            <p class="field__title">Белки</p>
            <app-input-text
              :value="productForm.fields.protein"
              :error="productForm.errors.protein"
              placeholder="Введите значение"
              @input="
                setProductFormFieldValue({field: 'protein', newValue: $event}),
                setProductFormFieldError({field: 'protein', enabled: false, errorMessage: null})
              "
            />
          </div>

          <div class="form-field">
            <p class="field__title">Жиры</p>
            <app-input-text
              :value="productForm.fields.fats"
              :error="productForm.errors.fats"
              placeholder="Введите значение"
              @input="
                setProductFormFieldValue({field: 'fats', newValue: $event}),
                setProductFormFieldError({field: 'fats', enabled: false, errorMessage: null})
              "
            />
          </div>

          <div class="form-field">
            <p class="field__title">Углеводы</p>
            <app-input-text
              :value="productForm.fields.carb"
              :error="productForm.errors.carb"
              placeholder="Введите значение"
              @input="
                setProductFormFieldValue({field: 'carb', newValue: $event}),
                setProductFormFieldError({field: 'carb', enabled: false, errorMessage: null})
              "
            />
          </div>

          <div class="form-field">
            <p class="field__title">Калорийность</p>
            <app-input-text
              :value="productForm.fields.kkal"
              :error="productForm.errors.kkal"
              placeholder="Введите значение"
              @input="
                setProductFormFieldValue({field: 'kkal', newValue: $event}),
                setProductFormFieldError({field: 'kkal', enabled: false, errorMessage: null})
              "
            />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        class="modal-action-btn mr-auto"
        successBtn
        uppercase
        size14px
        @click.native="saveOrUpdateProduct()"
      >{{ modalCondition === 'create' ? 'Сохранить' : 'Редактировать' }}</app-button>

      <app-button
      secondaryBtn
        uppercase
        size14px
        @click.native="toggleModalVisibility({modal: 'productModalActive', condition: false})"
      >Отмена</app-button>
    </template>
  </app-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
      productForm: state => state.foodCalorieTable.productForm,
      productCategories: state => state.foodCalorieTable.productCategories,
      modalCondition: state => state.foodCalorieTable.modalCondition,
      modalCondition: state => state.foodCalorieTable.modalCondition,
      productModalActive: state => state.foodCalorieTable.productModalActive
    }),
    headerTitle () {
      if (this.modalCondition === 'create') {
        return 'Добавить продукт'
      } else {
        return 'Редактировать продукт'
      }
    },
    headerDescriptions () {
      if (this.modalCondition === 'create') {
        return ['Заполните форму и нажмите "Cохранить", чтобы добавить новый продукт в общую базу.', 'Новый продукт будет доступен только для вас.']
      } else {
        return ['Отредактируйте информацию и нажмите "Редактировать", чтобы обновить данные о продукте.']
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'foodCalorieTable/toggleModalVisibility',
      setProductFormFieldValue: 'foodCalorieTable/setProductFormFieldValue',
      setProductFormFieldError: 'foodCalorieTable/setProductFormFieldError'
    }),
    saveOrUpdateProduct() {
      if (this.modalCondition === 'create') {
        this.$store.dispatch('foodCalorieTable/saveProduct', this.productForm.fields)
      } else if (this.modalCondition === 'edit') {
        this.$store.dispatch('foodCalorieTable/updateProduct', this.productForm.fields)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

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
