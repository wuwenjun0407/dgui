import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ...SHARED_ZORRO_MODULES,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ...SHARED_ZORRO_MODULES,
  ],
})
export class SharedModule {}
