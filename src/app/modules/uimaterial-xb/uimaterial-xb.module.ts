import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule, MatTableModule, MatSortModule
  ],
   exports: [
     MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule, MatTableModule, MatSortModule
  ]
})
export class UimaterialXbModule { }
