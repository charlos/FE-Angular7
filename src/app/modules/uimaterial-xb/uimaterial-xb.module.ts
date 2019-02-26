import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule
  ],
   exports: [
     MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule
  ]
})
export class UimaterialXbModule { }
