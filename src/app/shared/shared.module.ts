import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatSortModule,
  MatToolbarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatButtonToggleModule
} from '@angular/material';
import { TableDataComponent } from './table-data/table-data.component';
import { TableInfoComponent } from './table-data/table-info/table-info.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SelectorComponent } from './toolbar/selector/selector.component';
import { DatepikerComponent } from './toolbar/datepiker/datepiker.component';
import { AddTrasladoComponent, AddTrasladoDialog } from './table-data/table-info/add-traslado/add-traslado.component';

@NgModule({
  declarations: [
    TableDataComponent,
    TableInfoComponent,
    ToolbarComponent,
    SelectorComponent,
    DatepikerComponent,
    AddTrasladoComponent,
    AddTrasladoDialog
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  entryComponents: [AddTrasladoComponent, AddTrasladoDialog],
  exports: [TableDataComponent, ToolbarComponent]
})
export class SharedModule { }
