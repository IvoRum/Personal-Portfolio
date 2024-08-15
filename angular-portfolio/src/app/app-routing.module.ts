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
    redirectTo: 'demo',
    pathMatch: 'full',
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
