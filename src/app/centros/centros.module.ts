import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CentrosPage } from './centros.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CentrosPage]
})
export class CentrosPageModule {}
