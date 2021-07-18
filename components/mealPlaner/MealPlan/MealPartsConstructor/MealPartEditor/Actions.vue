<template>
  <div class="actions">
    <app-tooltip width="210px" right alert textAlignCenter >
      <template v-slot:tooltipElement>
        <div
          class="action-btn"
          @click="addNewMealPart()"
        >
          <i class="ti-plus"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Добавить прием пищи</p>
      </template>
    </app-tooltip>

    <app-tooltip width="200px" right alert textAlignCenter >
      <template v-slot:tooltipElement>
        <div
          class="action-btn"
          @click="setSearchRecipesAndProductsModalActive()"
        >
          <i v-if="!searchRecipesAndProductsModalActive" class="ti-zoom-in"></i>
          <i v-if="searchRecipesAndProductsModalActive" class="ti-zoom-out"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Поиск продуктов и рецептов</p>
      </template>
    </app-tooltip>

    <app-tooltip width="200px" right alert textAlignCenter >
      <template v-slot:tooltipElement>
        <div
          class="action-btn action-btn--remove"
          @click="removeSelectedMealPart()"
        >
          <i class="ti-trash"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Удалить прием пищи</p>
      </template>
    </app-tooltip>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppTooltip from '@/components/basic/AppTooltip'

export default {
  components: {
    AppTooltip
  },
  computed: {
    ...mapState({
      searchRecipesAndProductsModalActive: state => state.mealPlaner.searchRecipesAndProductsModalActive
    })
  },
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
  // .action-btn:last-child {
  //   margin-top: auto;
  //   margin-bottom: 0;
  // }
  .action-btn:hover {
    color: $green;
  }
  .action-btn--remove:hover {
    color: $red;
  }
}

</style>
