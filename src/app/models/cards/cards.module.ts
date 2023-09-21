import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatarialModule } from '../material/matarial/matarial.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MatarialModule],
  exports: [ProjectCardComponent],
})
export class CardsModule {}
