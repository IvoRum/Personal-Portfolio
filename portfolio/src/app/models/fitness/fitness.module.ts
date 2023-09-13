import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFitnessComponent } from './main-fitness/main-fitness.component';
import { FitnessRoutingModule } from './fitness-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainFitnessComponent],
  imports: [CommonModule, FitnessRoutingModule, ReactiveFormsModule],
})
export class FitnessModule {}
