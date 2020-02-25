import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";


  /**
   * Generated class for the MycalComponent component.
   *
   * See https://angular.io/api/core/Component for more info on Angular
   * Components.
   */
  @Component({
    selector: 'mycal',
    templateUrl: 'mycal.html'
  })
  export class MycalComponent {
    @Output() onDaySelect = new EventEmitter();
    @Output() onMonthSelect = new EventEmitter();
    @Input() events = [];
    dateArray = []; // Array for all the days of the month
    weekArray = []; // Array for each row of the calendar
    lastSelect = 0; // Record the last clicked location
    weekHead = ['일', '월', '화', '수', '목', '금', '토'];
    // weekHead = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    currentYear = moment().year();
    currentMonth = moment().month();
    currentDate = moment().date();
    currentDay = moment().day();
    text: string;

    constructor() {
      console.log('Hello MycalComponent Component');
      this.text = 'Hello World';
      
    }

    ngOnChanges = function () {
      this.createMonth(this.displayYear, this.displayMonth);
    };

    ngAfterViewInit() {
      console.log('asdf');
      this.today();
    };
    // Jump to today
    today = function () {
      this.displayYear = this.currentYear;
      this.displayMonth = this.currentMonth;
      this.createMonth(this.currentYear, this.currentMonth);
      // Mark today as a selection
      var todayIndex = _.findIndex(this.dateArray, {
        year: this.currentYear,
        month: this.currentMonth,
        date: this.currentDate,
        isThisMonth: true
      });
      this.lastSelect = todayIndex;
      this.dateArray[todayIndex].isSelect = true;
      this.onDaySelect.emit(this.dateArray[todayIndex]);
    };

    isInEvents = function (year, month, date) {
      var i = 0, len = this.events.length;
      for (; i < len; i++) {
        if (this.events[i].year == year && this.events[i].month == month && this.events[i].date == date) {
          return true;
        }
      }
      return false;
    };
    createMonth = function (year, month) {
      this.dateArray = []; // Clear last month's data
      this.weekArray = []; // Clear week data
      var firstDay;
      // The day of the week on the first day of the current month of
      // selection determines how many days to take out last month. Sunday
      // does not show last month, Monday shows the previous month, Tuesday
      // shows the last two days
      var preMonthDays; // The number of days for the previous month
      var monthDays; // The number of days for the month
      var weekDays = [];
      firstDay = moment({ year: year, month: month, date: 1 }).day();
      // The number of days last month
      if (month === 0) {
        preMonthDays = moment({ year: year - 1, month: 11 }).daysInMonth();
      }
      else {
        preMonthDays = moment({ year: year, month: month - 1 }).daysInMonth();
      }
      // The number of days this month
      monthDays = moment({ year: year, month: month }).daysInMonth();
      // PREVIOUS MONTH
      // Add the last few days of the previous month to the array
      if (firstDay !== 7) {
        var lastMonthStart = preMonthDays - firstDay + 1; // From the last few months start
        for (var i = 0; i < firstDay; i++) {
          if (month === 0) {
            this.dateArray.push({
              year: year,
              month: 11,
              date: lastMonthStart + i,
              isThisMonth: false,
              isToday: false,
              isSelect: false,
              hasEvent: (this.isInEvents(year, 11, lastMonthStart + i)) ? true : false,
            });
          }
          else {
            this.dateArray.push({
              year: year,
              month: month - 1,
              date: lastMonthStart + i,
              isThisMonth: false,
              isToday: false,
              isSelect: false,
              hasEvent: (this.isInEvents(year, month - 1, lastMonthStart + i)) ? true : false,
            });
          }
        }
      }
      // Add the numeral for this month to the array
      for (var i = 0; i < monthDays; i++) {
        this.dateArray.push({
          year: year,
          month: month,
          date: i + 1,
          isThisMonth: true,
          isToday: false,
          isSelect: false,
          hasEvent: (this.isInEvents(year, month, i + 1)) ? true : false,
        });
      }
      if (this.currentYear === year && this.currentMonth === month) {
        var todayIndex = _.findIndex(this.dateArray, {
          year: this.currentYear,
          month: this.currentMonth,
          date: this.currentDate,
          isThisMonth: true
        });
        this.dateArray[todayIndex].isToday = true;
      }
      // Add the number of days next month to the array, with some months showing 6 weeks and some months showing 5 weeks
      if (this.dateArray.length % 7 !== 0) {
        var nextMonthAdd = 7 - this.dateArray.length % 7;
        for (var i = 0; i < nextMonthAdd; i++) {
          if (month === 11) {
            this.dateArray.push({
              year: year,
              month: 0,
              date: i + 1,
              isThisMonth: false,
              isToday: false,
              isSelect: false,
              hasEvent: (this.isInEvents(year, 0, i + 1)) ? true : false,
            });
          }
          else {
            this.dateArray.push({
              year: year,
              month: month + 1,
              date: i + 1,
              isThisMonth: false,
              isToday: false,
              isSelect: false,
              hasEvent: (this.isInEvents(year, month + 1, i + 1)) ? true : false,
            });
          }
        }
      }
      // All date data is now added to the dateArray array
      // Insert the date data into the new array every seven days
      for (var i = 0; i < this.dateArray.length / 7; i++) {
        for (var j = 0; j < 7; j++) {
          weekDays.push(this.dateArray[i * 7 + j]);
        }
        this.weekArray.push(weekDays);
        weekDays = [];
      }
    };
    back = function () {
      // Decrementing the year if necessary
      if (this.displayMonth === 0) {
        this.displayYear--;
        this.displayMonth = 11;
      }
      else {
        this.displayMonth--;
      }
      this.onMonthSelect.emit({
        'year': this.displayYear,
        'month': this.displayMonth
      });
      this.createMonth(this.displayYear, this.displayMonth);
    };
    forward = function () {
      // Incrementing the year if necessary
      if (this.displayMonth === 11) {
        this.displayYear++;
        this.displayMonth = 0;
      }
      else {
        this.displayMonth++;
      }
      this.onMonthSelect.emit({
        'year': this.displayYear,
        'month': this.displayMonth
      });
      this.createMonth(this.displayYear, this.displayMonth);
    };
    // Select a day, click event
    daySelect = function (day, i, j) {
      // First clear the last click status
      this.dateArray[this.lastSelect].isSelect = false;
      // Store this clicked status
      this.lastSelect = i * 7 + j;
      this.dateArray[i * 7 + j].isSelect = true;
      this.onDaySelect.emit(day);
    };

  }
