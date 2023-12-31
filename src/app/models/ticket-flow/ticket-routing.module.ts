import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketFlowMainComponent } from './ticket-flow-main/ticket-flow-main.component';

const routes: Routes = [
  {
    path: '',
    component: TicketFlowMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
