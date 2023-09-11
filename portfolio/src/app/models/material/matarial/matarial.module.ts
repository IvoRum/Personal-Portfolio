import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatGridListModule],
  exports: [MatCardModule, MatGridListModule],
=======
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [MatCardModule, MatIconModule],
>>>>>>> a1f11fc00837f4913d1676ab6849567c509a6eba
})
export class MatarialModule {}
