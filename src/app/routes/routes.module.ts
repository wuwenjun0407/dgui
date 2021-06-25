import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { BjdgRangeTimeModule, BjdgCustomLineModule } from './index';

const MODULES = [BjdgRangeTimeModule, BjdgCustomLineModule];

@NgModule({
  imports: [CommonModule, SharedModule, ...MODULES],
  declarations: [],
})
export class RoutesModule {}
