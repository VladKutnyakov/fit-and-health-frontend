<template>
  <div class="actions">
    <nuxt-link :to="`/training-diary/training-process?trainingProgram=${program.id}`" class="action-btn">
      <i class="ti-control-play"></i>
    </nuxt-link>

    <nuxt-link :to="`training-programs/${program.id}`" class="action-btn">
      <i class="ti-search"></i>
    </nuxt-link>

    <i class="ti-trash action-btn" @click="removeTrainingProgram()"></i>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  props: {
    program: Object
  },
  components: {
    AppButton
  },
  methods: {
    removeTrainingProgram () {
      console.log('remove Training Program')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid $dividerBorder;
  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 5px;
    width: 35px;
    height: 35px;
    background: $primary;
    color: $white;
    border-radius: 6px;
    cursor: pointer;
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
    background: $danger;
  }
}

.dark-theme {
  .actions {
    border-left: 1px solid $dividerBorderDarkBG;
    .action-btn {
      color: $textLight;
    }
  }
}

</style>
