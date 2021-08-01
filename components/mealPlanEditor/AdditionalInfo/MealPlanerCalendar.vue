<template>
  <div class="meal-planer-calendar">

    <app-accordion :isOpened="false">
      <template v-slot:accordionHeader>
        <div class="meal-planer-calendar__target-date">
          <i class="ti-calendar"></i>
          <p class="target-date__selected-day">{{ currentDay }} {{ monthTitle[currentMonth] }} {{ currentYear }}</p>
          <i class="ti-angle-double-down"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="meal-planer-calendar__date-table">
          <div class="calendar-settings">
            <div class="calendar-settings__select-month-or-year">
              <app-select
                :defaultValue="selectedMonth"
                :selectOptionsList="monthTitle"
                @select="monthSelect($event)"
                class="calendar-settings__select"
              />
              <app-select
                :defaultValue="selectedYear"
                :selectOptionsList="yearsOptions"
                @select="yearSelect($event)"
                class="calendar-settings__select"
              />
            </div>

            <div class="calendar-settings__nav-btn">
              <i class="ti-angle-up nav-btn" @click="prevMonth()"></i>
              <i class="ti-angle-down nav-btn" @click="nextMonth()"></i>
            </div>
          </div>
          <div class="week-day">
            <p v-for="(item, index) in weekDaysTitle" :key="index" class="week-day__item">{{ item }}</p>
          </div>
          <div ref="calendarTable" class="calendar-table">
            <div
              v-for="(item, index) in days"
              :key="index"
              class="date-table__day-item"
              :class="[{ 'date-table__previosly-day-item': !item.isCurrentMonth }]"
              @click="getMealPlanerInfo(item)"
            >
              <p
                class="day-item__value"
                :class="[{ 'day-item__value--selected': item.active }]"
                :data-query-date="item.queryDate"
              >{{ item.day }}</p>
            </div>
          </div>
        </div>
      </template>
    </app-accordion>

  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppSelect from '@/components/basic/AppSelect'

export default {
  components: {
    AppAccordion,
    AppSelect
  },
  data () {
    return {
      days: [],
      weekDaysTitle: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      monthTitle: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      currentDay: new Date().getDate(),
      month: this.currentMonth,
      year: this.currentYear
    }
  },
  computed: {
    yearsOptions () {
      let years = []
      for (let i = 2015; i <= new Date().getFullYear(); i++) {
        years.push(i.toString())
      }
      return years.reverse()
    },
    selectedMonth () {
      return this.monthTitle[this.currentMonth]
    },
    selectedYear () {
      return this.currentYear.toString()
    },
    daysInThisMonth () {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
    },
  },
  watch: {
    month ($event) {
      // отслеживаем изменение переменной, что бы установить нужное значение для currentMonth и верного расчета календарных дней
      for (let i = 0; i <= this.monthTitle.length; i++) {
        if ($event === this.monthTitle[i]) {
          this.currentMonth = i
        }
      }
    },
    year () {
      this.currentYear = +this.year
    }
  },
  methods: {
    calendarCellsValues () {
      const previoslyMonthDays = []
      const previoslyMonthDaysAmount = new Date(this.currentYear, this.currentMonth, 0).getDay()
      for (let i = 0; i <= previoslyMonthDaysAmount; i++) {
        // если первый день месяца не равен начальному дню недели добавить в массив значение предыдущего месяца
        if (i < previoslyMonthDaysAmount) {
          const previoslyMonthDay = new Date(this.currentYear, this.currentMonth, 0).getDate() - previoslyMonthDaysAmount + 1

          const queryDate = this.currentYear  + '-' + this.currentMonth + '-' + (previoslyMonthDay + i)
          previoslyMonthDays.push({
            isCurrentMonth: false,
            day: previoslyMonthDay + i,
            month: this.currentMonth,
            queryDate: queryDate,
            active: false
          })
        }
      }

      // Получаем массив дней в текущем месяце
      const currentMonthDays = []
      for (let i = 0; i < this.daysInThisMonth; i++) {
        const queryDate = this.currentYear  + '-' + (this.currentMonth + 1) + '-' + (i + 1)
        currentMonthDays.push({
          isCurrentMonth: true,
          day: i + 1,
          month: this.currentMonth,
          queryDate: queryDate,
          active: (i + 1) === this.currentDay ? true : false
        })
      }

      const nextMonthDays = []
      const freeCells = 42 - previoslyMonthDays.length - currentMonthDays.length
      for (let i = 0; i < freeCells; i++) {
        const queryDate = this.currentYear  + '-' + (this.currentMonth + 2) + '-' + (i + 1)
        nextMonthDays.push({
          isCurrentMonth: false,
          day: i + 1,
          month: this.currentMonth,
          queryDate: queryDate,
          active: false
        })
      }

      const calendarCellsValues = previoslyMonthDays.concat(currentMonthDays, nextMonthDays)

      // console.log(calendarCellsValues)

      return calendarCellsValues
    },
    getMealPlanerInfo (item) {
      const queryDate = {
        date: item.queryDate
      }
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', queryDate)

      this.currentDay = parseInt(queryDate.date.split('-')[2])
      this.currentMonth = parseInt(queryDate.date.split('-')[1]) - 1

      this.days = this.calendarCellsValues()

      this.$router.push(`/meal-planer?date=${item.queryDate}`)
    },
    monthSelect ($event) {
      this.month = $event
      this.currentDay = 1
      this.days = this.calendarCellsValues()
      const queryDate = this.currentYear  + '-' + (this.currentMonth + 1) + '-' + this.currentDay
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', queryDate)
      this.$router.push(`/meal-planer?date=${queryDate}`)
    },
    yearSelect ($event) {
      this.year = $event
      this.currentDay = 1
      this.days = this.calendarCellsValues()
      const queryDate = this.currentYear  + '-' + (this.currentMonth + 1) + '-' + this.currentDay
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', queryDate)
      this.$router.push(`/meal-planer?date=${queryDate}`)
    },
    prevMonth () {
      if (this.currentMonth > 0) {
        --this.currentMonth
      } else {
        this.currentMonth = 11
        --this.currentYear
      }

      this.currentDay = 1

      this.days = this.calendarCellsValues()

      const queryDate = this.currentYear  + '-' + (this.currentMonth + 1) + '-' + this.currentDay
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', queryDate)
      this.$router.push(`/meal-planer?date=${queryDate}`)
    },
    nextMonth () {
      if (this.currentMonth < 11) {
        ++this.currentMonth
      } else {
        this.currentMonth = 0
        ++this.currentYear
      }

      this.currentDay = 1

      this.days = this.calendarCellsValues()

      const queryDate = this.currentYear  + '-' + (this.currentMonth + 1) + '-' + this.currentDay
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', queryDate)
      this.$router.push(`/meal-planer?date=${queryDate}`)
    }
  },
  created () {
    this.days = this.calendarCellsValues()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.meal-planer-calendar {
  position: relative;
  margin-bottom: 20px;
  .meal-planer-calendar__target-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .target-date__selected-day {
      font-weight: 500;
    }
  }
  .meal-planer-calendar__date-table {
    // border: 1px solid red;
    margin: 0 5px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .calendar-settings {
      // border: 1px solid red;
      display: flex;
      margin-bottom: 5px;
      .calendar-settings__select-month-or-year {
        display: flex;
        .calendar-settings__select:first-child {
          margin-right: 5px;
        }
      }

      .calendar-settings__nav-btn {
        display: flex;
        margin-left: auto;
        .nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px 12px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        .nav-btn:first-child {
          margin-right: 5px;
        }
      }
    }
    .week-day {
      display: flex;
      align-items: center;
      padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-bottom: none;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      .week-day__item {
        // border: 1px solid red;
        margin-right: auto;
        width: 50px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
      }
    }
    .calendar-table {
      display: flex;
      flex-wrap: wrap;
      background: $white;
      border: 1px solid $blockBorder;
      border-top: 1px dashed $blockBorder;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      .date-table__day-item {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: auto;
        padding: 10px;
        width: 14.28%;
        height: 50px;
        .day-item__value {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          border-radius: 6px;
          transition: $tr-02;
          cursor: pointer;
        }
        .day-item__value--selected {
          background: $green;
          color: $white;
          font-weight: 600;
        }
      }
      .date-table__day-item:hover {
        .day-item__value {
          color: $green;
        }
        .day-item__value--selected {
          color: $white;
        }
      }
      .date-table__previosly-day-item {
        opacity: .4;
      }
    }
  }
}

</style>
