import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCardComponent } from './models/cards/project-card/project-card.component';
import { FitfusionComponent } from './models/landing/fitfusion/fitfusion.component';
import { TicketflowComponent } from './models/landing/ticketflow/ticketflow.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./models/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'newMain',
    loadChildren: () =>
      import('./models/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'ticketflow',
    component: TicketflowComponent,
  },
  {
    path: 'fitfusuion',
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
