import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './models/cards/cards.module';
import { MatarialModule } from './models/material/matarial/matarial.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CardsModule,
    MatarialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
