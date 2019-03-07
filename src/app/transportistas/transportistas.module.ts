import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TransportistasPage } from './transportistas.page';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TransportistasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TransportistasPage]
})
export class TransportistasPageModule {}
