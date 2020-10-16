import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-custom-multi-select',
  template: `
  <mat-select disableOptionCentering [placeholder]="placeholder"  [disabled]="disable"
                    [(ngModel)]="ModelValue">
                    <mat-option [value]="'0'"></mat-option>
                    <mat-option *ngFor="let Optn of Options" [value]="Optn[OptionValue]">
                      {{Optn[displayValue]}}</mat-option>
                  </mat-select>
  `,
  styles: [
  ]
})
export class CustomMultiSelectComponent implements OnInit {
  @Input() Options: any[] = [];
  @Input() OptionValue = "";
  @Input() displayValue = "";
  @Input() ModelValue = "";
  @Input() placeholder = "";
  @Input() disable = false;
  constructor() { }

  ngOnInit() {
  }

}
