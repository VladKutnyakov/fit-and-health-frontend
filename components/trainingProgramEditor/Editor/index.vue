<template>
  <div class="editor">
    <training-overview />
    <training-days />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import TrainingOverview from '@/components/trainingProgramEditor/Editor/TrainingOverview/index'
import TrainingDays from '@/components/trainingProgramEditor/Editor/TrainingDays/index'

export default {
  components: {
    AppBlockTitle,
    TrainingOverview,
    TrainingDays
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.editor {
  // border: 1px solid red;
  flex: 1 1 auto;
}

</style>