import { Component, Inject } from '@angular/core';
import { PorjectCard } from '../domain/ProjectCard';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TicketflowComponent } from '../ticketflow/ticketflow.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  cards: PorjectCard[] = [
    {
      title: 'Ticket Flow',
      body: 'body1',
      img: 'assets\\img\\TicketFlow.png',
      cardColor: 'color1',
      textColor: 'tesxt color',
    },
    {
      title: 'Fit Fusion',
      body: 'body1',
      img: 'assets\\img\\FitFusionNew.png',
      cardColor: 'color1',
      textColor: 'tesxt color',
    },
  ];
  constructor(public dialog: MatDialog) {}

  openFitFusionDialog() {
    const dialogRef = this.dialog.open(FitFusionDialog);
    dialogRef.afterClosed();
  }

  openTicketFlowDialog() {
    const dialogRef = this.dialog.open(TicketflowComponent);
    dialogRef.afterClosed();
  }
}

@Component({
  selector: 'fitfusion-dialog',
  templateUrl: 'fitfusion.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class FitFusionDialog {}

@Component({
  selector: 'ticketflow-dialog',
  templateUrl: 'ticketflow.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class TicketFlowDialog {
  images: string[] = [
    'assets\\img\\TicketFlowdAdmin.png',
    'assets\\img\\TicketFlowdAdmin.png',
    'assets\\img\\TicketFlowdAdmin.png',
    // Add more image paths as needed
  ];
}

/*
  <app-card
    fxFlex="35%"
    *ngFor="let card of cards"
    [card]="card"
    [action]="openDialog"
  ></app-card>
   */
