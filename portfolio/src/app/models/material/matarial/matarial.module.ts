import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    NgFor,
    MatGridListModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatIconModule,
    FlexLayoutModule,
    NgFor,
    MatGridListModule,
  ],
})
export class MatarialModule {}
