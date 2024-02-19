import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { MatarialModule } from '../material/matarial/matarial.module';
import { LandingRoutingModule } from './landing-routing.module';
import { ReusableModule } from '../reusable/reusable.module';
import { TicketflowComponent } from './ticketflow/ticketflow.component';

@NgModule({
  declarations: [MainComponent, CardComponent, TicketflowComponent],
  imports: [CommonModule, MatarialModule, LandingRoutingModule, ReusableModule],
})
export class LandingModule {}
