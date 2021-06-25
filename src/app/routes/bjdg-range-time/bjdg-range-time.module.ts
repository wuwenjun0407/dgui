import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { BjdgRangeTimeComponent } from './bjdg-range-time.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [SharedModule],
  declarations: [BjdgRangeTimeComponent],
  exports: [BjdgRangeTimeComponent],
})
export class BjdgRangeTimeModule {}
