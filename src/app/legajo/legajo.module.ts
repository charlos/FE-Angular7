import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegajoRoutingModule } from './legajo-routing.module';

import { SharedModule } from '../shared/shared.module';
import { LegajoComponent } from './legajo/legajo.component';
import { DemoMaterialModule } from '../material.module';

@NgModule({
  declarations: [LegajoComponent],
  imports: [
    CommonModule,
    LegajoRoutingModule,
    DemoMaterialModule
  ]
})
export class LegajoModule { }
