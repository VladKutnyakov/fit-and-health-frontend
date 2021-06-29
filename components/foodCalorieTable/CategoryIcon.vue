<template>
  <i class="icon" :class="categoryIcon"></i>
</template>

<script>
export default {
  props: {
    icon: String
  },
  computed: {
    categoryIcon () {
      switch (this.icon) {
        case 'Мясо':
          return 'food-category__meat'
        case 'Морепродукты':
          return 'food-category__seafood'
        case 'Яйца, яичные продукты':
          return 'food-category__eggs'
        case 'Молоко, молочные продукты':
          return 'food-category__milk-products'
        case 'Соя, соевые продукты':
          return 'food-category__soy'
        case 'Овощи, овощные продукты':
          return 'food-category__vegetable'
        case 'Зелень, травы, листья, салаты':
          return 'food-category__salad'
        case 'Фрукты, ягоды, сухофрукты':
          return 'food-category__fruits'
        case 'Грибы':
          return 'food-category__mushroom'
        case 'Жиры, масла':
          return 'food-category__oil'
        case 'Орехи':
          return 'food-category__nuts'
        case 'Крупы, злаки':
          return 'food-category__cereals'
        case 'Семена':
          return 'food-category__seeds'
        case 'Специи, пряности':
          return 'food-category__spices'
        case 'Мука, продукты из муки':
          return 'food-category__flour'
        case 'Напитки, соки':
          return 'food-category__drink'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 30px;
}
</style>
