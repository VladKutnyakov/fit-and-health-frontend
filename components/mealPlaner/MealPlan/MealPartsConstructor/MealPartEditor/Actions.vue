<template>
  <div class="actions">
    <div
      class="action-btn"
      title="Добавить прием пищи"
      @click="addNewMealPart()"
    >
      <i class="ti-plus"></i>
    </div>

    <div
      class="action-btn"
      title="Поиск продуктов и рецептов"
      @click="setSearchRecipesAndProductsModalActive()"
    >
      <i class="ti-search"></i>
    </div>

    <div
      class="action-btn"
      title="Удалить"
      @click="removeSelectedMealPart()"
    >
      <i class="ti-trash"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setSearchRecipesAndProductsModalActive: 'mealPlaner/setSearchRecipesAndProductsModalActive',
      addNewMealPart: 'mealPlaner/addNewMealPart',
      removeSelectedMealPart: 'mealPlaner/removeSelectedMealPart'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: $hiddenBlockBG;
  .action-btn {
    margin-bottom: 10px;
    padding: 5px;
    font-size: 20px;
    transition: $tr-02;
    cursor: pointer;
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
  .action-btn:hover {
    color: $green;
  }
  .action-btn:last-child:hover {
    color: $red;
  }
}

</style>
