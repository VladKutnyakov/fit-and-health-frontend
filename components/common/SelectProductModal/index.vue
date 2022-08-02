<template>
  <app-modal
    :isActive="active"
    maxWidth="1800px"
    headerTitle="Список продуктов"
    @close="closeModal()"
  >
    <template v-slot:modalContent>
      <div class="select-product-content">
        <app-search-block
          :value="searchFilters.searchString"
          :disabled="isLoading"
          filters
          small
          placeholder="Название продукта"
          @input="searchFilters.searchString = $event"
          @clear="
            searchFilters.searchString = $event,
            fetchProductsList()
          "
          @search="fetchProductsList()"
        />

        <div class="founding__results">
          <div class="products-list__header">
            <p class="header__column-title"><i class="ti-pin-alt"></i></p>
            <p class="header__column-title"><i class="ti-heart"></i></p>
            <p class="header__column-title">Название</p>
            <p class="header__column-title">Масса</p>
            <p class="header__column-title">Белки</p>
            <p class="header__column-title">Жиры</p>
            <p class="header__column-title">Углеводы</p>
            <p class="header__column-title">Ккал</p>
            <p class="header__column-title"><i class="ti-pencil-alt"></i></p>
          </div>

          <div class="products-list">
            <div v-if="pinnedProducts.length > 0" class="pinned-products">
              <p class="pinned-products__title">Закрепленные продукты</p>

              <ul class="food-table__product-list">
                <product
                  v-for="(item, index) in pinnedProducts"
                  :key="index"
                  :item="item"
                  @changePinnedParam="changePinnedParam($event)"
                  @changeFavoriteParam="changeFavoriteParam($event)"
                  @selectProduct="selectProduct($event)"
                />
              </ul>
            </div>

            <div v-if="notPinnedProducts.length > 0" class="not-pinned-products">
              <p v-if="pinnedProducts.length > 0" class="not-pinned-products__title">Не закрепленные продукты</p>

              <ul class="food-table__product-list">
                <product
                  v-for="(item, index) in notPinnedProducts"
                  :key="index"
                  :item="item"
                  @changePinnedParam="changePinnedParam($event)"
                  @changeFavoriteParam="changeFavoriteParam($event)"
                  @selectProduct="selectProduct($event)"
                />
              </ul>
            </div>

            <app-spinner
              v-if="isLoading"
              donut
              center
            />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modalFooter>
      <div class="footer__action-btns">
        <app-button
          secondaryBtn
          @click="closeModal()"
        >Закрыть</app-button>
      </div>
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/basic/AppModal'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppButton from '@/components/basic/AppButton'
import Product from '@/components/common/SelectProductModal/Product'
import AppSpinner from '@/components/basic/AppSpinner'

export default {
  props: {
    active: Boolean,
  },
  components: {
    AppModal,
    AppSearchBlock,
    AppButton,
    Product,
    AppSpinner,
  },
  data () {
    return {
      searchFilters: {
        searchString: null,
        userType: {
          id: 'ALL',
          title: 'Все'
        }, // ALL, MY
        userRelation: {
          id: 'ALL',
          title: 'Все'
        }, // ALL, PINNED, FAVORITE
        orderBy: {
          id: 'title',
          title: 'Названию'
        }, // title, protein, fats, carb, kkal
        categories: [],
        categoriesList: [],
      },
      pinnedProducts: [],
      notPinnedProducts: [],
      isLoading: false,
    }
  },
  watch: {
    active (newValue) {
      if (newValue) {
        this.isLoading = true

        this.fetchProductsList().then(() => {
          this.isLoading = false
        })
      } else {
        // Сбросить все фильтры и состояния до начального значения
        this.pinnedProducts = []
        this.notPinnedProducts = []
      }
    },
  },
  methods: {
    selectProduct ($event) {
      console.log($event)
    },
    openFilters () {
      console.log('openFilters')
    },
    closeModal () {
      this.$emit('closeModal')
    },
    async fetchProductsList (payload) {
      try {
        const payload = {
          searchString: this.searchFilters.searchString,
          userType: this.searchFilters.userType?.id || null,
          userRelation: this.searchFilters.userRelation?.id || null,

          orderBy: this.searchFilters.orderBy?.id || null,
          categories: [],
        }

        const categoriesIDs = []
        this.searchFilters.categories.forEach(element => {
          categoriesIDs.push(element.id)
        })

        payload.categories = categoriesIDs.join(', ')

        const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table`, { params: payload })

        this.pinnedProducts = []
        this.notPinnedProducts = []

        response.forEach(element => {
          if (element.pinned) {
            this.pinnedProducts.push(element)
          } else {
            this.notPinnedProducts.push(element)
          }
        })
      } catch (error) {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Ошибка при получении данных.',
          timeToShow: 5000,
        }
        this.$store.commit('notifications/addNewNotice', notice)
      }
    },
    async changePinnedParam (payload) {
      try {
        const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/change-pinned-param/${payload.id}`)

        this.isLoading = true

        this.fetchProductsList().then(() => {
          this.isLoading = false
        })

        const notice = {
          id: Date.now(),
          type: 'info',
          message: response.data.pinned ? 'Продукт добавлен в закрепленные.' : 'Продукт удален из закрепленных.',
          timeToShow: 5000,
        }
        this.$store.commit('notifications/addNewNotice', notice)
      } catch (error) {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при сохранении.',
          timeToShow: 5000,
        }
        this.$store.commit('notifications/addNewNotice', notice)
      }
    },
    async changeFavoriteParam (payload) {
      try {
        const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/change-favorite-param/${payload.id}`)

        this.isLoading = true

        this.fetchProductsList().then(() => {
          this.isLoading = false
        })

        const notice = {
          id: Date.now(),
          type: 'info',
          message: response.data.favorite ? 'Продукт добавлен в избранное.' : 'Продукт удален из избранного.',
          timeToShow: 5000,
        }
        this.$store.commit('notifications/addNewNotice', notice)
      } catch (error) {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при сохранении.',
          timeToShow: 5000,
        }
        this.$store.commit('notifications/addNewNotice', notice)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.select-product-content {
  display: flex;
  flex-direction: column;
  .founding__results {
    // border: 1px solid red;
    margin-top: 20px;
    padding: 10px;
    background: $white;
    border: 1px solid $inputBorder;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgb(0,0,0,.25);
    .products-list__header {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $primary;
      border: 1px solid transparent;
      border-radius: 6px;
      z-index: 10;
      .header__column-title {
        padding: 7px;
        width: 120px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column-title:nth-child(1) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      .header__column-title:nth-child(2) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      .header__column-title:nth-child(3) {
        flex: 1 1 auto;
        min-width: 200px;
      }
      // .header__column-title:nth-child(9) {
      //   width: 50px;
      //   min-width: 50px;
      //   max-width: 50px;
      // }
      .header__column-title:nth-child(9) {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        border: none;
      }
    }
    .products-list {
      position: relative;
      min-height: 55px;
      .pinned-products {
        margin-bottom: 10px;
        .pinned-products__title {
          padding: 0 0 10px 10px;
        }
      }
      .not-pinned-products {
        .not-pinned-products__title {
          padding: 0 0 10px 10px;
        }
      }
    }
    
  }
}

.footer__action-btns {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

</style>
