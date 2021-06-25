## bj-dgui
----
>、****公司前端组件库-测试阶段

#### 安装

**npm 安装**
```
npm i bj-dgui
```
**yarn 安装**
```
yarn add bj-dgui
```

####使用
>根模块注入
```
import { RangeTimeModule } from 'bj-dgui';
```
>组件**HTML**结构
```
<bjdg-range-time [date]="date" (currentDate)="currentDate($event)" [rangeDate]="dateRange" [dateFormat]="formatRange">
</bjdg-range-time>
```
>组件**TS**属性
```
  date: Array<any> = [
    'Wed Jul 15 2020 14:21:00 GMT+0800 (中国标准时间)',
    'Fri Jul 17 2020 14:21:00 GMT+0800 (中国标准时间)',
  ];
  dateRange = [1594656000, 1595001599];
  formatRange = 'yyyy/MM/dd';
```
>组件**TS**方法
```
  currentDate(event) {
    this.date = event;
  }
```

#### 属性介绍

|参数|类型|含义|可选参数|默认值|备注|
|----|----|----|----|----|----|
|date|Array< Date >|选中的时间段或者需要回显的时间段|无|无|数组中为时间格式|
|dateRange|Array|限定可选的时间范围|无|无|数组为开始时间和结束时间的10位时间戳|
|formatRange|String|日期格式|'yyyy/MM/dd','yyyy/MM/dd HH:mm:ss','HH:mm','HH:mm:ss'|'yyyy/MM/dd'|数组中为时间格式|


#### 方法介绍
Ï
|方法名|含义|参数|返回值|
|----|----|----|----|----|
|currentDate|当前选择时间|Array< Date >|无|




