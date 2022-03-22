<template>
  <div class="app-date-selector">
    <app-accordion :isOpened="isOpened">
      <template v-slot:accordionHeader>
        <div class="target-date" @click="calendarIsOpen = !calendarIsOpen">
          <i class="ti-calendar target-date__icon-calendar"></i>
          <p class="target-date__selected-day">{{ currentDay }} {{ currentMonth.title }} {{ currentYear }}</p>
          <i
            :class="[
              { 'ti-angle-right': !calendarIsOpen },
              { 'ti-angle-down': calendarIsOpen },
            ]"
          ></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="date-table">
          <div class="calendar-settings">
            <div class="calendar-settings__select-month-or-year">
              <app-select
                :value="currentMonth"
                :selectOptionsList="monthsOptions"
                :canBeClear="false"
                minWidth="140px"
                maxWidth="140px"
                @select="monthSelect($event)"
                class="calendar-settings__select"
              />
              <app-select
                :value="currentYear"
                :selectOptionsList="yearsOptions"
                :canBeClear="false"
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
  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppSelect from '@/components/basic/AppSelect'

export default {
  props: {
    initialDate: String,
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

      const newSelectedDate = `${this.currentYear}-${this.currentMonth.id + 1 >= 9 ? this.currentMonth.id + 1 : `0${this.currentMonth.id + 1}`}-01`
      this.selectDate(newSelectedDate)
    },
    yearSelect ($event) {
      this.currentYear = $event
      this.currentDay = 1
      this.days = this.calendarCellsValues()

      const newSelectedDate = `${this.currentYear}-${this.currentMonth.id + 1 >= 9 ? this.currentMonth.id + 1 : `0${this.currentMonth.id + 1}`}-01`
      this.selectDate(newSelectedDate)
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

      const newSelectedDate = `${this.currentYear}-${this.currentMonth.id + 1 >= 9 ? this.currentMonth.id + 1 : `0${this.currentMonth.id + 1}`}-01`
      this.selectDate(newSelectedDate)
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

      const newSelectedDate = `${this.currentYear}-${this.currentMonth.id + 1 >= 9 ? this.currentMonth.id + 1 : `0${this.currentMonth.id + 1}`}-01`
      this.selectDate(newSelectedDate)
    },
    selectDate (item) {
      this.currentYear = parseInt(item.split('-')[0])
      this.currentMonth = this.monthsOptions[parseInt(item.split('-')[1] - 1) <= 11 ? parseInt(item.split('-')[1] - 1) : 0]
      this.currentDay = parseInt(item.split('-')[2])
      this.days = this.calendarCellsValues()

      this.$emit('select', item)
    },
  },
  created () {
    // console.log(this.initialDate)
    const initialYear = this.initialDate ? parseInt(this.initialDate.split('-')[0]) : null
    const initialMonth = this.initialDate ? parseInt(this.initialDate.split('-')[1]) : null
    const initialDay = this.initialDate ? parseInt(this.initialDate.split('-')[2]) : null
    // console.log(initialYear, initialMonth, initialDay)

    // Задать текущую дату для календаря (занчение по умолчанию при рендеринге компонента)
    this.currentYear = initialYear || new Date().getFullYear()
    this.currentMonth = this.monthsOptions[initialMonth - 1] || this.monthsOptions[new Date().getMonth()]
    this.currentDay = initialDay || new Date().getDate()
    this.days = this.calendarCellsValues()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-date-selector {
  background: $white;
  box-shadow: $cardShadow;
  border-radius: 6px;
  transition: $tr-02;
  .target-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    .target-date__icon-calendar {
      font-size: 20px;
    }
    .target-date__selected-day {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .date-table {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    border-top: 1px solid $dividerBorder;
    .calendar-settings {
      // border: 1px solid red;
      display: flex;
      padding: 10px;
      // background: $black10;
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
          padding: 0 10px;
          background: $white;
          border: 1px solid $dividerBorder;
          border-radius: 6px;
          transition: $tr-02;
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
      margin: 0 10px;
      padding: 10px 0;
      background: $primary;
      color: $white;
      border-top: 1px solid $dividerBorder;
      border-bottom: 1px dashed $dividerBorder;
      border-radius: 6px;
      .week-day__item {
        // border: 1px solid red;
        margin: 0 auto;
        width: 50px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        // border-right: 1px solid $white;
      }
      .week-day__item:last-child {
        border-right: none;
      }
    }
    .calendar-table {
      display: flex;
      flex-wrap: wrap;
      margin: 5px 10px 10px 10px;
      border: 1px solid $dividerBorder;
      border-radius: 6px;
      .date-table__day-item {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding: 5px 7px;
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
          background: $primary;
          color: $white;
          font-weight: 600;
        }
      }
      .date-table__day-item:hover {
        .day-item__value {
          color: $primary;
          font-weight: 600;
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

body.dark {
  .app-date-selector {
    background: $cardBackgroundDarkBG;
    .date-table {
      border-top: 1px solid $dividerBorderDarkBG;
      .calendar-settings {
        .calendar-settings__nav-btn {
          .nav-btn {
            background: $black20;
            border: 1px solid $dividerBorderDarkBG;
          }
          .nav-btn:first-child {
            margin-right: 5px;
          }
        }
      }
      .week-day {
        border-top: 1px solid $dividerBorderDarkBG;
        border-bottom: 1px dashed $dividerBorderDarkBG;
      }
      .calendar-table {
        border: 1px solid $dividerBorderDarkBG;
      }
    }
  }
}

</style>
