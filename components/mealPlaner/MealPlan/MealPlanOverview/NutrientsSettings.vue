<template>
  <div class="nutrients-settings">

    <div class="chart">
      <app-chart-circle />
      <div class="chart__calculated-calories">
        <p class="calculated-calories__value">{{ getDayTargetKkal }}</p>
        <p class="calculated-calories__scale">ккал</p>
      </div>
    </div>

    <div class="nutrients-settings__nutrients">
      <div class="nutrients__target">
        <div class="target__element">
          <p class="element__text">Белки:</p>
          <div class="element__value">
            <p class="value__number">{{ targetProtein }}</p>
            <input
              ref="proteinInput"
              v-show="proteinIsEdit"
              class="value__input"
              type="text"
              :value="targetProtein"
              @keyup.enter="proteinEdit()"
            >
          </div>
          <p class="element__scale">гр.</p>
          <i v-if="!proteinIsEdit" class="ti-pencil element__action-btn" @click="proteinEdit()"></i>
          <i v-if="proteinIsEdit" class="ti-save element__action-btn" @click="proteinEdit()"></i>
        </div>
        <div class="target__element">
          <p class="element__text">Жиры:</p>
          <div class="element__value">
            <p class="value__number">{{ targetFats }}</p>
            <input
              ref="fatsInput"
              v-show="fatsIsEdit"
              class="value__input"
              type="text"
              :value="targetFats"
              @keyup.enter="fatsEdit()"
            >
          </div>
          <p class="element__scale">гр.</p>
          <i v-if="!fatsIsEdit" class="ti-pencil element__action-btn" @click="fatsEdit()"></i>
          <i v-if="fatsIsEdit" class="ti-save element__action-btn" @click="fatsEdit()"></i>
        </div>
        <div class="target__element">
          <p class="element__text">Углеводы:</p>
          <div class="element__value">
            <p class="value__number">{{ targetCarb }}</p>
            <input
              ref="carbInput"
              v-show="carbIsEdit"
              class="value__input"
              type="text"
              :value="targetCarb"
              @keyup.enter="carbEdit()"
            >
          </div>
          <p class="element__scale">гр.</p>
          <i v-if="!carbIsEdit" class="ti-pencil element__action-btn" @click="carbEdit()"></i>
          <i v-if="carbIsEdit" class="ti-save element__action-btn" @click="carbEdit()"></i>
        </div>
      </div>
    </div>

    <div class="nutrients-settings__weight">
      <div class="weight__target">
        <div class="target__element">
          <p class="element__text">Текущий вес:</p>
          <div class="element__value">
            <p class="value__number">{{ currentWeight }}</p>
          </div>
          <p class="element__scale">кг.</p>
          <app-tooltip>
            <template v-slot:tooltipElement>
              <i class="ti-info-alt element__action-btn"></i>
            </template>
            <template v-slot:tooltipText>
              <p>Изменить значение текущего веса можно в разделе "Замеры и статистика"</p>
            </template>
          </app-tooltip>
        </div>
        <div class="target__element">
          <p class="element__text">Желаемый вес:</p>
          <div class="element__value">
            <p class="value__number">{{ targetWeight }}</p>
            <input
              ref="weightInput"
              v-show="weightIsEdit"
              class="value__input"
              type="text"
              :value="targetWeight"
              @keyup.enter="weightEdit()"
            >
          </div>
          <p class="element__scale">кг.</p>
          <i v-if="!weightIsEdit" class="ti-pencil element__action-btn" @click="weightEdit()"></i>
          <i v-if="weightIsEdit" class="ti-save element__action-btn" @click="weightEdit()"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import AppChartCircle from '@/components/basic/AppChartCircle'
import AppTooltip from '@/components/basic/AppTooltip'

export default {
  components: {
    AppChartCircle,
    AppTooltip
  },
  data () {
    return {
      currentWeight: 72.3,
      proteinIsEdit: false,
      fatsIsEdit: false,
      carbIsEdit: false,
      weightIsEdit: false
    }
  },
  computed: {
    ...mapState({
      targetProtein: state => state.mealPlaner.mealPlanerInfo.targetProtein,
      targetFats: state => state.mealPlaner.mealPlanerInfo.targetFats,
      targetCarb: state => state.mealPlaner.mealPlanerInfo.targetCarb,
      targetWeight: state => state.mealPlaner.mealPlanerInfo.targetWeight,
    }),
    ...mapGetters({
      getDayTargetKkal: 'mealPlaner/getDayTargetKkal',
    })
  },
  methods: {
    proteinEdit () {
      if (!this.proteinIsEdit) {
        this.proteinIsEdit = true
        this.$nextTick(() => {
          this.$refs.proteinInput.focus()
          this.$refs.proteinInput.select()
        })
      } else {
        this.proteinIsEdit = false
        this.$store.commit('mealPlaner/setTargetNutrient', {field: 'targetProtein', value: this.$refs.proteinInput.value})
      }
    },
    fatsEdit () {
      if (!this.fatsIsEdit) {
        this.fatsIsEdit = true
        this.$nextTick(() => {
          this.$refs.fatsInput.focus()
          this.$refs.fatsInput.select()
        })
      } else {
        this.fatsIsEdit = false
        this.$store.commit('mealPlaner/setTargetNutrient', {field: 'targetFats', value: this.$refs.fatsInput.value})
      }
    },
    carbEdit () {
      if (!this.carbIsEdit) {
        this.carbIsEdit = true
        this.$nextTick(() => {
          this.$refs.carbInput.focus()
          this.$refs.carbInput.select()
        })
      } else {
        this.carbIsEdit = false
        this.$store.commit('mealPlaner/setTargetNutrient', {field: 'targetCarb', value: this.$refs.carbInput.value})
      }
    },
    weightEdit () {
      if (!this.weightIsEdit) {
        this.weightIsEdit = true
        this.$nextTick(() => {
          this.$refs.weightInput.focus()
          this.$refs.weightInput.select()
        })
      } else {
        this.weightIsEdit = false
        this.$store.commit('mealPlaner/setTargetWeight', this.$refs.weightInput.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.nutrients-settings {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid $blockBorder;
  .chart {
    position: relative;
    flex: 1 1 auto;
    .chart__calculated-calories {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      z-index: 2;
      .calculated-calories__value {
        margin-top: 15px;
        color: $green;
        font-size: 32px;
        font-weight: 600;
      }
      .calculated-calories__scale {
        margin-top: -5px;
        color: $green;
        font-size: 14px;
      }
    }
  }
  .nutrients-settings__nutrients {
    display: flex;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .nutrients__target {
      flex: 1 1 auto;
      padding: 0 10px;
      .target__element {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .element__text {
          font-weight: 500;
        }
        .element__value {
          position: relative;
          margin-left: auto;
          .value__number {
            margin-right: 5px;
            font-weight: 600;
          }
          .value__input {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0px 5px;
            width: 70px;
            background: $white;
            outline: none;
            border: none;
            border-bottom: 1px solid $blockBorder;
            text-align: right;
            color: $green;
            font-family: $fontMontserrat;
            font-weight: 600;
          }
          .value__input::selection {
            color: $white;
            background: $green;
          }
        }
        .element__scale {
          margin-top: 2px;
          font-size: 12px;
          font-weight: 600;
        }
        .element__action-btn {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .target__element:last-child {
        margin-bottom: 0;
      }
    }
  }
  .nutrients-settings__weight {
    display: flex;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .weight__target {
      flex: 1 1 auto;
      padding: 0 10px;
      .target__element {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .element__text {
          font-weight: 500;
        }
        .element__value {
          position: relative;
          margin-left: auto;
          .value__number {
            margin-right: 5px;
            font-weight: 600;
          }
          .value__input {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0px 5px;
            width: 70px;
            background: $white;
            outline: none;
            border: none;
            border-bottom: 1px solid $blockBorder;
            text-align: right;
            color: $green;
            font-family: $fontMontserrat;
            font-weight: 600;
          }
          .value__input::selection {
            color: $white;
            background: $green;
          }
        }
        .element__scale {
          margin-top: 2px;
          font-size: 12px;
          font-weight: 600;
        }
        .element__action-btn {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .target__element:last-child {
        margin-bottom: 0;
      }
    }
  }
  
}

</style>