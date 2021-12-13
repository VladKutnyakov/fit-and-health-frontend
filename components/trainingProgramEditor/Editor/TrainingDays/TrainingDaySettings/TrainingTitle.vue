<template>
  <div class="training-title">
    <p class="training-title__text">Название тренировочного дня:</p>
    <app-input-text
      :value="trainingProgramDays[selectedTrainingDay].title"
      @input="setTrainingProgramFormFieldValue({field: 'trainingProgramDays', subfield: 'title', index: selectedTrainingDay, newValue: $event})"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'

export default {
  components: {
    AppInputText
  },
  computed: {
    ...mapState({
      selectedTrainingDay: state => state.trainingProgramEditor.selectedTrainingDay,
      trainingProgramDays: state => state.trainingProgramEditor.trainingProgram.fields.trainingProgramDays
    })
  },
  methods: {
    ...mapMutations({
      setTrainingProgramFormFieldValue: 'trainingProgramEditor/setTrainingProgramFormFieldValue'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-title {
  .training-title__text {
    padding: 10px;
    font-weight: 500;
  }
}

</style>
