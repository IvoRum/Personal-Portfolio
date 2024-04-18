import { Component, Inject } from '@angular/core';
import { PorjectCard } from '../domain/ProjectCard';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
  constructor(public dialog: MatDialog, private router: Router) {}

  openFitFusionDialog() {
    this.router.navigate(['/fitfusion']);
    //const dialogRef = this.dialog.open(FitfusionComponent);
    //dialogRef.afterClosed();
  }

  openTicketFlowDialog() {
    this.router.navigate(['/ticketflow']);
    //const dialogRef = this.dialog.open(TicketflowComponent);
    //dialogRef.afterClosed();
  }
}

/*
  <app-card
    fxFlex="35%"
    *ngFor="let card of cards"
    [card]="card"
    [action]="openDialog"
  ></app-card>
   */
