import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegajoComponent } from './legajo/legajo.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LegajoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegajoRoutingModule { }
