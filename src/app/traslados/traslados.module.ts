import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TrasladosPage } from './traslados.page';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TrasladosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TrasladosPage]
})
export class TrasladosPageModule {}
