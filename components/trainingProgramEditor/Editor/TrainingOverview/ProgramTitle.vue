<template>
  <div class="program-title">
    <p class="program-title__text">Название программы:</p>

    <app-input-text
      :value="trainingProgram.fields.title"
      placeholder="Название программы тренировок"
      @input="setTrainingProgramFormFieldValue({field: 'title', newValue: $event})"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInputText from "@/components/basic/AppInputText"

export default {
  components: {
    AppInputText
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

.program-title {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .program-title__text {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>