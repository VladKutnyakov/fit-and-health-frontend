<template>
  <div class="training-days">
    <app-tabs
      :tabList="tabList"
      @selectTab="selectTrainingDay($event)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppTabs from '@/components/basic/AppTabs'
import TabTrainingDay from '@/components/trainingProgram/ProgramOverview/TrainingDays/TabTrainingDay/index'

export default {
  components: {
    AppTabs
  },
  computed: {
    ...mapState({
      trainingProgramDays: state => state.trainingProgramEditor.trainingProgram.fields.trainingProgramDays,
      selectedTrainingDay: state => state.trainingProgramEditor.selectedTrainingDay,
    }),
    tabList () {
      const list = []

      this.trainingProgramDays.forEach((element, index) => {
        list.push({
          ...element,
          isActive: index === this.selectedTrainingDay ? true : false,
          component: TabTrainingDay,
        })
      })

      return list
    }
  },
  methods: {
    selectTrainingDay ($event) {
      this.$store.commit('trainingProgramEditor/setSelectedTrainingDay', $event)
    },
    addTrainingDay () {
      this.$store.commit('trainingProgramEditor/addTrainingProgramDay')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-days {
  // border: 1px solid red;
  flex: 1 1 auto;
}

</style>
