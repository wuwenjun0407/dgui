import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'bjdg-bjdg-custom-line',
  templateUrl: './bjdg-custom-line.component.html',
  styleUrls: ['./bjdg-custom-line.component.less'],
})
export class BjdgCustomLineComponent implements OnInit {
  @Output() queryUpdata = new EventEmitter<object>();
  @Input()
  set restrictedField(data) {
    this.initRestrictedFieldData = data;
    data.forEach((i) => {
      this.restrictedFieldData.push({
        key: i.key,
        value: i.value,
      });
    });
  }
  @Input() keyWidth: string | '0';
  @Input() valueWidth: string | '0';
  @Input() iconSpacing: string | '0';
  @Input() repeatSelectKey: boolean | true;
  public queryRows = [
    { selectModel: '', inputModel: '', label: '', value: '' },
  ];
  public restrictedFieldData = [];
  public initRestrictedFieldData = [];
  constructor() {}

  ngOnInit() {}
  public addRow(): void {
    this.queryRows.push({
      selectModel: '',
      inputModel: '',
      label: '',
      value: '',
    });
  }

  public deleteRow(params, index: number): void {
    this.queryRows = this.queryRows.filter((i, j) => j !== index);
  }

  public selectChange(value: string, row): void {
    this.echoOption(value, row);
  }

  public popoverShow(): void {
    this.restrictedFieldData = this.initRestrictedFieldData;
  }

  public echoOption(value: string, row): void {
    row.label = this.restrictedFieldData.filter(
      (i) => i.value === value
    )[0].key;
    row.value = value;
    row.selectModel = value;
  }

  public selectOpenChange(bol: boolean) {
    if (!bol || this.repeatSelectKey) {
      return;
    }
    this.popoverShow();
    this.queryRows.forEach((item) => {
      this.restrictedFieldData = this.restrictedFieldData.filter(
        (i) => i.value !== item.selectModel
      );
    });
  }

  public reset(): void {
    this.queryRows = [
      { selectModel: '', inputModel: '', label: '', value: '' },
    ];
    this.queryUpdata.emit([]);
  }
  public isEmpty() {
    return this.queryRows.some((i) => i.selectModel);
  }

  public query(): void {
    if (this.isEmpty()) {
      const params = [];
      this.queryRows.forEach((i) => {
        if (i.selectModel) {
          params.push({
            key: i.label,
            value: i.value,
            input: i.inputModel,
          });
        }
      });
      this.queryUpdata.emit(params);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.queryRows, event.previousIndex, event.currentIndex);
  }
}
