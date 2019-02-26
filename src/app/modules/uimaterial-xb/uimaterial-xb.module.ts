import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatTabsModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatTabsModule, MatIconModule
  ],
   exports: [
    MatToolbarModule,
    MatIconModule,
    MatIconModule
  ]
})
export class UimaterialXbModule { }
