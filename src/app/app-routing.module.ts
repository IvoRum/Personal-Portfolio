import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCardComponent } from './models/cards/project-card/project-card.component';

const routes: Routes = [
  { path: '', component: ProjectCardComponent },
  {
    path: 'fitfusion',
    loadChildren: () =>
      import('./models/fitness/fitness.module').then((m) => m.FitnessModule),
  },
  {
    path: 'newMain',
    loadChildren: () =>
      import('./models/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'ticketflow',
    loadChildren: () =>
      import('./models/ticket-flow/ticket-flow.module').then(
        (m) => m.TicketFlowModule
      ),
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
