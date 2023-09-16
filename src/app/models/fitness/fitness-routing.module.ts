import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFitnessComponent } from './main-fitness/main-fitness.component';

const routes: Routes = [
  {
    path: '',
    component: MainFitnessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessRoutingModule {}
