import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './models/cards/cards.module';
import { MatarialModule } from './models/material/matarial/matarial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardsModule,
    FlexLayoutModule,
    MatarialModule,
    NgFor,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
