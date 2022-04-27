import { generateForm } from '@/utils/formManager'

export default () => ({

  productCategories: [],
  // productCategories: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
  products: [],
  sortedProducts: [],
  pinnedProducts: [],
  notPinnedProducts: [],
  selectedFilters: {
    sortingBy: 'Названию',
    productType: 'Все продукты',
    productCategory: [],
    // productCategory: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
    searchString: ''
  },

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

})
