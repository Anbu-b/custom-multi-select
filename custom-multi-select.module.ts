import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CustomMultiSelectComponent } from './custom-multi-select.component';



@NgModule({
  declarations: [CustomMultiSelectComponent],
  imports: [
  ],
  exports: [CustomMultiSelectComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CustomMultiSelectModule { }
