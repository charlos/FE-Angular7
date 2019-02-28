import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UimaterialXbModule } from '../modules/uimaterial-xb/uimaterial-xb.module';
import { TableDataComponent } from './table-data/table-data.component';

@NgModule({
  declarations: [TableDataComponent],
  imports: [
    CommonModule,
    UimaterialXbModule
  ],
  exports: [TableDataComponent]
})
export class SharedModule { }
