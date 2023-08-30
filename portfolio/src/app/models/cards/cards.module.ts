import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatarialModule } from '../material/matarial/matarial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, FlexLayoutModule, MatarialModule],
  exports: [ProjectCardComponent],
})
export class CardsModule {}
