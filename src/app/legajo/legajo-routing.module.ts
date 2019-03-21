import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegajoComponent } from './legajo/legajo.component';

const routes: Routes = [
  {
    path: '',
    component: LegajoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegajoRoutingModule { }
