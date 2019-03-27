import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LegajoRoutingModule } from './legajo-routing.module';

import { SharedModule } from '../shared/shared.module';
import { LegajoComponent } from './legajo/legajo.component';
import { DemoMaterialModule } from '../material.module';
import { AddLegajoComponent, AddLegajoDialog } from './legajo/add-legajo/add-legajo.component';

@NgModule({
  declarations: [LegajoComponent, AddLegajoDialog, AddLegajoComponent],
  imports: [
    CommonModule,
    FormsModule,
    LegajoRoutingModule,
    DemoMaterialModule
  ],
  entryComponents: [
    AddLegajoDialog
  ]
})
export class LegajoModule { }
