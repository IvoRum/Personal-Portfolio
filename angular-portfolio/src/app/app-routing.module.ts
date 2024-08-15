import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCardComponent } from './models/cards/project-card/project-card.component';
import { FitfusionComponent } from './models/landing/fitfusion/fitfusion.component';
import { TicketflowComponent } from './models/landing/ticketflow/ticketflow.component';
import { ProgramsFitnessComponent } from './models/fitness/programs-fitness/programs-fitness.component';
import { TrinersFitnessComponent } from './models/fitness/triners-fitness/triners-fitness.component';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'demo',
    pathMatch: 'full',
=======
    redirectTo: 'fitfusion/demo',
>>>>>>> fc10d9e2c5201bce39ac6c65c3b543518f8d22bb
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./models/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'newMain',
    loadChildren: () =>
      import('./models/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./models/fitness/fitness.module').then((m) => m.FitnessModule),
  },
  {
    path: 'demo/programs',
    component: ProgramsFitnessComponent,
  },
  {
    path: 'demo/trainers',
    component: TrinersFitnessComponent,
  },
  {
    path: 'ticketflow',
    component: TicketflowComponent,
  },
  {
    path: 'fitfusion',
    component: FitfusionComponent,
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
