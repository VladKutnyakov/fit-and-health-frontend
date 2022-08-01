import { generateForm } from '@/utils/formManager'

export default () => ({

  pageInfo: {
    products: null,
    pinned: null,
    favorites: null,
    userProducts: null,
  },

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

  productCategories: [],

  productForm: generateForm({
    title: null,
    protein: null,
    fats: null,
    carb: null,
    kkal: null,
    category: null,
    favorite: false,
    pinned: false
  }),

  modalCondition: 'create',
  productModalActive: false,

  waiteProductsListUpdate: false,
  waiteProductInfoLoading: false,

})
