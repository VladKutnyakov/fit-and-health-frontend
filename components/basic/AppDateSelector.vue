<template>
  <app-accordion :isOpened="isOpened">
    <template v-slot:accordionHeader>
      <div class="meal-planer-calendar__target-date" @click="calendarIsOpen = !calendarIsOpen">
        <i class="ti-calendar"></i>
        <p class="target-date__selected-day">{{ currentDay }} {{ currentMonth.title }} {{ currentYear }}</p>
        <i v-if="!calendarIsOpen" class="ti-angle-double-down"></i>
        <i v-if="calendarIsOpen" class="ti-angle-double-up"></i>
      </div>
    </template>
    <template v-slot:accordionHiddenContent>
      <div class="meal-planer-calendar__date-table">
        <div class="calendar-settings">
          <div class="calendar-settings__select-month-or-year">
            <app-select
              :value="currentMonth"
              :selectOptionsList="monthsOptions"
              minWidth="140px"
              maxWidth="140px"
              @select="monthSelect($event)"
              class="calendar-settings__select"
            />
            <app-select
              :value="currentYear"
              :selectOptionsList="yearsOptions"
              minWidth="120px"
              maxWidth="120px"
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
            @click="selectDate(item.queryDate)"
            :title="item.queryDate"
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
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppSelect from '@/components/basic/AppSelect'

export default {
  props: {
    isOpened: Boolean
  },
  components: {
    AppAccordion,
    AppSelect
  },
  data () {
    return {
      calendarIsOpen: true,
      days: [],
      weekDaysTitle: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      currentYear: null,
      currentMonth: null,
      currentDay: null,
    }
  },
  computed: {
    yearsOptions () {
      let years = []
      for (let i = 2015; i <= new Date().getFullYear(); i++) {
        years.push(i)
      }
      return years.reverse()
    },
    monthsOptions () {
      return [
        { id: 0, title: 'Январь' },
        { id: 1, title: 'Февраль' },
        { id: 2, title: 'Март' },
        { id: 3, title: 'Апрель' },
        { id: 4, title: 'Май' },
        { id: 5, title: 'Июнь' },
        { id: 6, title: 'Июль' },
        { id: 7, title: 'Август' },
        { id: 8, title: 'Сентябрь' },
        { id: 9, title: 'Октябрь' },
        { id: 10, title: 'Ноябрь' },
        { id: 11, title: 'Декабрь' }
      ]
    },
  },
  methods: {
    calendarCellsValues () {
      const previoslyMonthDays = []
      const previoslyMonthDaysAmount = new Date(this.currentYear, this.currentMonth.id, 0).getDay()
      for (let i = 0; i <= previoslyMonthDaysAmount; i++) {
        // Получить массив дней предыдущего месяца, если первый день месяца не равен начальному дню недели
        if (i < previoslyMonthDaysAmount) {
          const previoslyMonthDay = new Date(this.currentYear, this.currentMonth.id, 0).getDate() - previoslyMonthDaysAmount + 1

          const year = this.currentYear
          const month = this.currentMonth.id + 1 >= 9 ? this.currentMonth.id : `0${this.currentMonth.id}`
          const day = previoslyMonthDay + i

          previoslyMonthDays.push({
            isCurrentMonth: false,
            day: previoslyMonthDay + i,
            // month: this.currentMonth,
            queryDate: `${this.currentMonth.id > 0 ? year : year - 1}-${this.currentMonth.id > 0 ? month : 12}-${day}`,
            active: false
          })
        }
      }
      // console.log(previoslyMonthDays)

      // Получить массив дней в текущем месяце
      const daysInThisMonth = new Date(this.currentYear, this.currentMonth.id + 1, 0).getDate()
      const currentMonthDays = []
      for (let i = 0; i < daysInThisMonth; i++) {
        const year = this.currentYear
        const month = this.currentMonth.id + 1 >= 9 ? this.currentMonth.id + 1 : `0${this.currentMonth.id + 1}`
        const day = i + 1 >= 9 ? i + 1 : `0${i + 1}`

        currentMonthDays.push({
          isCurrentMonth: true,
          day: i + 1,
          // month: this.currentMonth,
          queryDate: `${year}-${month}-${day}`,
          active: (i + 1) === this.currentDay ? true : false
        })
      }
      // console.log(currentMonthDays)

      // Получить массив дней в следущем месяце
      const nextMonthDays = []
      const freeCells = 42 - previoslyMonthDays.length - currentMonthDays.length
      for (let i = 0; i < freeCells; i++) {
        const year = this.currentYear
        const month = this.currentMonth.id + 1 >= 9 ? this.currentMonth.id + 2 : `0${this.currentMonth.id + 2}`
        const day = i + 1 >= 9 ? i + 1 : `0${i + 1}`

        nextMonthDays.push({
          isCurrentMonth: false,
          day: i + 1,
          // month: this.currentMonth,
          queryDate: `${month <= 12 ? year : year + 1}-${month <= 12 ? month : '01'}-${day}`,
          active: false
        })
      }
      // console.log(nextMonthDays)

      const calendarCellsValues = previoslyMonthDays.concat(currentMonthDays, nextMonthDays)
      // console.log(calendarCellsValues)

      return calendarCellsValues
    },
    monthSelect ($event) {
      this.currentMonth = $event
      this.currentDay = 1
      this.days = this.calendarCellsValues()

      // const queryDate = `${this.year}-${this.month.id + 1 >= 9 ? this.month.id + 1 : `0${this.month.id + 1}`}-01`
      // this.selectDate(queryDate)
    },
    yearSelect ($event) {
      this.currentYear = $event
      this.currentDay = 1
      this.days = this.calendarCellsValues()

      // this.selectDate()
    },
    prevMonth () {
      if (this.currentMonth.id > 0) {
        this.currentMonth = this.monthsOptions[this.currentMonth.id - 1]
      } else {
        this.currentMonth = this.monthsOptions[11]
        this.currentYear -= 1
      }

      this.currentDay = 1
      this.days = this.calendarCellsValues()

      // this.selectDate()
    },
    nextMonth () {
      if (this.currentMonth.id < 11) {
        this.currentMonth = this.monthsOptions[this.currentMonth.id + 1]
      } else {
        this.currentMonth = this.monthsOptions[0]
        this.currentYear += 1
      }

      this.currentDay = 1
      this.days = this.calendarCellsValues()

      // this.selectDate()
    },
    selectDate (item) {
      console.log(item)

      this.currentYear = parseInt(item.split('-')[0])
      this.currentMonth = this.monthsOptions[parseInt(item.split('-')[1] - 1) <= 11 ? parseInt(item.split('-')[1] - 1) : 0]
      this.currentDay = parseInt(item.split('-')[2])
      this.days = this.calendarCellsValues()

      // console.log(this.currentDay)
      this.$emit('select', item)
    },
  },
  created () {
    // Задать текущую дату для календаря (занчение по умолчанию при рендеринге компонента)
    this.currentYear = new Date().getFullYear()
    this.currentMonth = this.monthsOptions[new Date().getMonth()]
    this.currentDay = new Date().getDate()
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
