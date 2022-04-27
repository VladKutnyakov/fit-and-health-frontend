<template>
  <div class="editor">
    <training-overview />

    <app-tabs
      :tabList="tabList"
      canBeAddTabs
      @selectTab="selectTrainingDay($event)"
      @addTab="addTrainingDay()"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TrainingOverview from '@/components/trainingProgramEditor/Editor/TrainingOverview/index'
import AppTabs from '@/components/basic/AppTabs'
import TabTrainingDay from '@/components/trainingProgramEditor/Editor/TabTrainingDay/index'

export default {
  components: {
    TrainingOverview,
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

.editor {
  // border: 1px solid red;
  flex: 1 1 auto;
  padding: 10px;
  background: $white;
  border-radius: 6px;
  box-shadow: $cardShadow;
  transition: $tr-02;
  overflow: hidden;
}

.dark-theme {
  .editor {
    background: $cardBackgroundDarkBG;
  }
}

</style>
