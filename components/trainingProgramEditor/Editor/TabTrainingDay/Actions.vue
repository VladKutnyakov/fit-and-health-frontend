<template>
  <div class="actions">
    <app-button
      @click="toggleModalVisibility({modal: 'selectExercisesModalActive', condition: true})"
    >Добавить упражнение</app-button>

    <app-button
      dangerBtn
      @click="removeTrainingProgramDay()"
    >Удалить тренировочный день</app-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  },
  methods: {
    ...mapMutations({
      removeTrainingProgramDay: 'trainingProgramEditor/removeTrainingProgramDay',
      toggleModalVisibility: 'trainingProgramEditor/toggleModalVisibility',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

</style>
