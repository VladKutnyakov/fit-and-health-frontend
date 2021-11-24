<template>
  <div class="training-program">
    <app-block-title>Тренировочная программа</app-block-title>

    <div class="training-program__content">
      <p class="title">{{ trainingProgram.title }}</p>

      <img class="preview" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg">

      <div class="actions">
        <div class="actions__select">
          <p class="select__title">Тренировочный день</p>
          <app-select
            :value="trainingProgramTargetDay"
            :selectOptionsList="trainingProgram.trainingProgramDays"
            @select="fetchTrainingDay($event)"
          />
        </div>
        
        <div class="actions__btns">
          <app-button>
            <i class="ti-pencil"></i>
          </app-button>
          <app-button class="ml-10 fill-area">Начать тренироваку</app-button>
        </div>
      </div>

     </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import AppSelect from '@/components/basic/AppSelect'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppSelect,
    AppButton
  },
  data () {
    return {
      trainingProgramTargetDay: null
    }
  },
  computed: {
    ...mapState({
      trainingProgram: state => state.trainingProcess.trainingProgram
    })
  },
  methods: {
    fetchTrainingDay ($event) {
      this.trainingProgramTargetDay = $event
      this.$store.dispatch('trainingProcess/fetchTrainingDay', {trainingDayId: $event.id})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.training-program {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .training-program__content {
    display: flex;
    flex-direction: column;
    // padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .title {
      margin: 0 10px;
      padding: 10px;
      text-align: center;
      font-weight: 500;
      border-bottom: 1px dashed $blockBorder;
    }
    .preview {
      margin: 10px;
      align-self: center;
      width: calc(100% - 20px);
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .actions {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background: $hiddenBlockBG;
      .actions__select {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background: $white;
        // border: 1px solid $blockBorder;
        border-radius: 6px;
        .select__title {
          margin-bottom: 5px;
          padding: 0 10px;
          font-weight: 500;
        }
      }
      .actions__btns {
        display: flex;
        margin-top: 10px;
      }
    }
  }
}
</style>
