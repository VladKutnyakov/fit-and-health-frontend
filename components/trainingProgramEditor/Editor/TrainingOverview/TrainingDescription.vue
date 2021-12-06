<template>
  <div class="training-description">
    <p class="training-description__text">Описание программы:</p>

    <app-textarea
      class="fill-area"
      :value="trainingProgram.fields.description"
      placeholder="Описание программы тренировок"
      @input="setTrainingProgramFormFieldValue({field: 'description', newValue: $event})"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppTextarea from "@/components/basic/AppTextarea"

export default {
  components: {
    AppTextarea
  },
  computed: {
    ...mapState({
      trainingProgram: state => state.trainingProgramEditor.trainingProgram
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

.training-description {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .training-description__text {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>