<template>
  <nuxt-link
    :to="`/recipes-book/${recipe.id}`"
    class="found-recipe"
  >

    <img class="found-recipe__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" alt="">
    <p class="found-recipe__title">{{ recipe.title }}</p>
    <p class="found-recipe__desc">{{ recipe.description }}</p>

    <div class="found-recipe__info">
      <div class="info__element">
        <i class="ti-timer element__icon"></i>
        <p class="element__count">{{ recipe.cookingTimes }} мин.</p>
      </div>
      <div class="info__element">
        <i class="ti-pie-chart element__icon"></i>
        <p class="element__count">{{ recipe.recipeProducts.length }} продуктов</p>
      </div>
    </div>

    <div class="found-recipe__nutrients">
      <div class="nutrient">
        <p class="nutrient__text">Белки</p>
        <p class="nutrient__value">{{ protein }}</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__text">Жиры</p>
        <p class="nutrient__value">{{ fats }}</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__text">Углеводы</p>
        <p class="nutrient__value">{{ carb }}</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__text">Ккал</p>
        <p class="nutrient__value">{{ kkal }}</p>
      </div>
    </div>

    <div class="found-recipe__cook-skill">
      <p class="cook-skill__text">Сложность приготовления</p>
      <app-rating :rating="recipe.cookingSkill" />
    </div>
  </nuxt-link>
</template>

<script>
import AppRating from '@/components/basic/AppRating'

export default {
  props: {
    recipe: Object
  },
  components: {
    AppRating
  },
  data () {
    return {
      recipeTitle: 'some-title'
    }
  },
  computed: {
    protein () {
      let amount = 0
      for (let i = 0; i < this.recipe.recipeProducts.length; i++) {
        amount += this.recipe.recipeProducts[i].product.protein / 100 * this.recipe.recipeProducts[i].weightInRecipe
      }
      return Math.round(amount * 100) / 100
    },
    fats () {
      let amount = 0
      for (let i = 0; i < this.recipe.recipeProducts.length; i++) {
        amount += this.recipe.recipeProducts[i].product.fats / 100 * this.recipe.recipeProducts[i].weightInRecipe
      }
      return Math.round(amount * 100) / 100
    },
    carb () {
      let amount = 0
      for (let i = 0; i < this.recipe.recipeProducts.length; i++) {
        amount += this.recipe.recipeProducts[i].product.carb / 100 * this.recipe.recipeProducts[i].weightInRecipe
      }
      return Math.round(amount * 100) / 100
    },
    kkal () {
      let amount = 0
      for (let i = 0; i < this.recipe.recipeProducts.length; i++) {
        amount += this.recipe.recipeProducts[i].product.kkal / 100 * this.recipe.recipeProducts[i].weightInRecipe
      }
      return Math.round(amount * 100) / 100
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.found-recipe {
  // border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  padding: 10px;
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  cursor: pointer;
  .found-recipe__img {
    border-radius: 6px;
  }
  .found-recipe__title {
    margin: 15px 20px 10px 20px;
    text-align: center;
    font-weight: 500;
  }
  .found-recipe__desc {
    padding: 0 10px;
    margin-bottom: 15px;
    font-size: 14px;
  }
  .found-recipe__info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin-top: auto;
    border-top: 1px solid $dividerBorder;
    .info__element {
      display: flex;
      flex-basis: 50%;
      justify-content: center;
      border-right: 1px solid $dividerBorder;
      .element__icon {
        margin-right: 10px;
      }
      .element__count {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .info__element:last-child {
      border: none;
    }
  }
  .found-recipe__nutrients {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-top: 1px solid $dividerBorder;
    .nutrient {
      text-align: center;
      .nutrient__text {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 500;
      }
      .nutrient__value {
        color: $primary;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .found-recipe__cook-skill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 0 10px;
    border-top: 1px solid $dividerBorder;
    .cook-skill__text {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
.found-recipe:hover {
  box-shadow: $boxShadow;
}

.dark-theme {
  .found-recipe {
    background: $cardBackgroundDarkBG;
    .found-recipe__info {
      border-top: 1px solid $dividerBorderDarkBG;
      .info__element {
        border-right: 1px solid $dividerBorderDarkBG;
      }
      .info__element:last-child {
        border: none;
      }
    }
    .found-recipe__nutrients {
      border-top: 1px solid $dividerBorderDarkBG;
    }
    .found-recipe__cook-skill {
      border-top: 1px solid $dividerBorderDarkBG;
    }
  }
}

</style>
