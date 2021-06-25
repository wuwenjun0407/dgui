import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { BjdgCustomLineComponent } from './bjdg-custom-line.component';

@NgModule({
  imports: [SharedModule],
  declarations: [BjdgCustomLineComponent],
  exports: [BjdgCustomLineComponent],
})
export class BjdgCustomLineModule {}
