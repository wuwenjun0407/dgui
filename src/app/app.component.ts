import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  // bjdg-range-time > attribute
  date: Array<any> = [
    'Wed Jul 15 2020 14:21:00 GMT+0800 (中国标准时间)',
    'Fri Jul 17 2020 14:21:00 GMT+0800 (中国标准时间)',
  ];
  dateRange = [1594656000, 1595001599];
  formatRange = 'yyyy/MM/dd';

  // bjdg-bjdg-custom-line > attribute
  restrictedFieldData = [
    { key: 'name', value: '姓名' },
    { key: 'age', value: '年龄' },
    { key: 'sex', value: '性别' },
    { key: 'appId', value: 'appId' },
    { key: 'appName', value: 'appName' },
  ];
  keyWidth = '10%';
  valueWidth = '90%';
  iconSpacing = '50px';

  // bjdg-range-time > method
  currentDate(event) {
    this.date = event;
  }

  // bjdg-bjdg-custom-line > method
  getCurrentdData(event) {
    console.log(event,'1');
  }
}
