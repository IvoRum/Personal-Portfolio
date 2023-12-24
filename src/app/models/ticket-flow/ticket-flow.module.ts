import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketFlowMainComponent } from './ticket-flow-main/ticket-flow-main.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { MatarialModule } from '../material/matarial/matarial.module';

@NgModule({
  declarations: [TicketFlowMainComponent],
  imports: [CommonModule, TicketRoutingModule, MatarialModule],
})
export class TicketFlowModule {}
