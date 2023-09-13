import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainFitnessComponent } from './models/fitness/main-fitness/main-fitness.component';
import { ProjectCardComponent } from './models/cards/project-card/project-card.component';

const routes: Routes = [
  { path: '', component: ProjectCardComponent },
  {
    path: 'fitfusion',
    loadChildren: () =>
      import('./models/fitness/fitness.module').then((m) => m.FitnessModule),
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
