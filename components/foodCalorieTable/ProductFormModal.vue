<template>
  <app-modal :isActive="productModalActive" @close="toggleModalVisibility({modal: 'productModalActive', condition: false})">
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
              :value="productForm.fields.title"
              :error="productForm.errors.title"
              placeholder="Введите значение"
              @input="
                setProductFormField({field: 'title', value: $event}),
                clearProductFormFieldError('title')
              "
            />
          </div>

          <div class="form-field">
            <p class="field__title">Категория</p>
            <app-select
              :defaultValue="productForm.fields.category"
              :selectOptionsList="productCategories"
              :error="productForm.errors.category"
              minWidth="236px"
              alignListLeft
              alignSelectedValueLeft
              placeholder="Введите значение"
              @select="
                setProductFormField({field: 'category', value: $event}),
                clearProductFormFieldError('category')
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
                  setProductFormField({field: 'favorite', value: $event}),
                  clearProductFormFieldError('favorite')
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
                  setProductFormField({field: 'pinned', value: $event}),
                  clearProductFormFieldError('pinned')
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
                setProductFormField({field: 'protein', value: $event}),
                clearProductFormFieldError('protein')
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
                setProductFormField({field: 'fats', value: $event}),
                clearProductFormFieldError('fats')
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
                setProductFormField({field: 'carb', value: $event}),
                clearProductFormFieldError('carb')
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
                setProductFormField({field: 'kkal', value: $event}),
                clearProductFormFieldError('kkal')
              "
            />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <app-button
        uppercase
        size14px
        @click.native="toggleModalVisibility({modal: 'productModalActive', condition: false})"
      >Отмена</app-button>

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
import { mapState, mapMutations } from 'vuex'
import { requiredFieldsValidation } from '@/utils/handlers'
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
      productModalActive: state => state.foodCalorieTable.productModalActive
    }),
  },
  methods: {
    ...mapMutations({
      toggleModalVisibility: 'foodCalorieTable/toggleModalVisibility',
      setProductFormField: 'foodCalorieTable/setProductFormField',
      clearProductFormFieldError: 'foodCalorieTable/clearProductFormFieldError'
    }),
    saveUserProduct() {
      const isValid = requiredFieldsValidation(this.productForm, ['title', 'weight', 'protein', 'fats', 'carb', 'kkal', 'category'], 'foodCalorieTable/setProductFormFieldError', null)

      if (isValid) {
        this.$store.dispatch('foodCalorieTable/saveProduct')
      } else {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Заполните обязательные поля.',
          timeToShow: 5000,
          active: true
        }
        this.$store.commit('notifications/addNewNotice', notice)
      }
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
