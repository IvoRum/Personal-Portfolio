import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './models/cards/project-card/project-card.component';
import { CardsModule } from './models/cards/cards.module';
import { MatarialModule } from './models/material/matarial/matarial.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardsModule,
    MatarialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
