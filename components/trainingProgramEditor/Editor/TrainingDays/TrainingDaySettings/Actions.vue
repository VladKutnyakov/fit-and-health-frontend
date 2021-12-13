<template>
  <div class="actions">
    <app-tooltip width="200px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn" @click="addTrainingProgramDay()">
          <i class="ti-plus"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Добавить тренировочный день</p>
      </template>
    </app-tooltip>

    <app-tooltip width="190px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn">
          <i class="ti-zoom-in"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Поиск упражнений</p>
      </template>
    </app-tooltip>

    <app-tooltip class="mb-auto" width="200px" right alert textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn action-btn--remove" @click="removeTrainingProgramDay()">
          <i class="ti-trash"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Удалить тренировочный день</p>
      </template>
    </app-tooltip>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AppTooltip from '@/components/basic/AppTooltip'

export default {
  components: {
    AppTooltip
  },
  methods: {
    ...mapMutations({
      addTrainingProgramDay: 'trainingProgramEditor/addTrainingProgramDay',
      removeTrainingProgramDay: 'trainingProgramEditor/removeTrainingProgramDay',
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
  .action-btn:hover {
    color: $green;
  }
  .action-btn--remove:hover {
    color: $red;
  }
  .action-btn--social {
    color: $black40;
  }

  .action-btn--social-like:hover {
    color: $green;
  }
  .action-btn--social-dislike:hover {
    color: $red;
  }
  .action-btn--social-share:hover {
    color: $black;
  }

  .action-btn--social-like-active {
    color: $green;
  }
  .action-btn--social-dislike-active {
    color: $red;
  }
  .action-btn--social-share-active {
    color: $black;
  }
  .action-btn--last {
    margin-bottom: 0;
  }
}

</style>
