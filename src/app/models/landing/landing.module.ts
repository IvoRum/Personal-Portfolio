import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { MatarialModule } from '../material/matarial/matarial.module';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [MainComponent, CardComponent],
  imports: [CommonModule, MatarialModule, LandingRoutingModule],
})
export class LandingModule {}
