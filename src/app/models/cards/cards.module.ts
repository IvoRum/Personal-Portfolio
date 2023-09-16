import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatarialModule } from '../material/matarial/matarial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, FlexLayoutModule, MatarialModule, RouterModule],
  exports: [ProjectCardComponent],
})
export class CardsModule {}
