<template>
  <div class="training-skill">
    <p class="training-skill__block-title">Сложность тренировочной программы:</p>

    <app-select
      :value="skill"
      :selectOptionsList="skillList"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppSelect from "@/components/basic/AppSelect"

export default {
  components: {
    AppSelect
  },
  computed: {
    ...mapState({
      skill: state => {
        return {
          id: state.trainingProgramEditor.trainingProgram.fields.skill.id,
          title: state.trainingProgramEditor.trainingProgram.fields.skill.complexityTitle,
        }
      },
      skillList: state => state.trainingProgramEditor.skillList,
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-skill {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .training-skill__block-title {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>