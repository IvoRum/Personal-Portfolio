import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    NgFor,
    MatGridListModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatIconModule,
    FlexLayoutModule,
    NgFor,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class MatarialModule {}
