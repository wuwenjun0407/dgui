import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'bjdg-range-time',
  templateUrl: './bjdg-range-time.component.html',
  styleUrls: ['./bjdg-range-time.component.less'],
})
export class BjdgRangeTimeComponent implements OnInit {
  @Output() currentDate = new EventEmitter<Array<Date>>();
  @Input()
  set date(value) {
    this.dateTime = value;
  }
  @Input()
  set rangeDate(date) {
    if (
      !Array.isArray(date) ||
      date.some((i) => {
        return isNaN(i) || i.toString().length !== 10;
      })
    ) {
      this.rangeTime = [];
    } else {
      this.rangeTime = date;
    }
  }
  get rangeDate() {
    return this.rangeTime;
  }
  @Input()
  set dateFormat(format) {
    if (!this.formatTimeData.includes(format)) {
      this.formatTime = 'yyyy/MM/dd';
    } else {
      this.formatTime = format;
    }
  }
  formatTimeData: Array<string> = [
    'yyyy/MM/dd',
    'yyyy/MM/dd HH:mm:ss',
    'HH:mm',
    'HH:mm:ss',
  ];
  rangeTime: Array<number> = [];
  formatTime = 'yyyy/MM/dd';
  dateTime = [];
  constructor() {}

  ngOnInit() {}

  disabledDate(current: Date) {
    if (this.rangeTime.length !== 0) {
      const time = [this.rangeTime[0] * 1000, this.rangeTime[1] * 1000];
      if (new Date(time[0]) > current) {
        return differenceInCalendarDays(current, new Date(time[0])) < 0;
      } else if (new Date(time[1]) < current) {
        return differenceInCalendarDays(time[1], current) < 0;
      }
    }
    return false;
  }

  changeDate(event: Array<Date>) {
   console.log(12);
    this.currentDate.emit(event);
  }
}
