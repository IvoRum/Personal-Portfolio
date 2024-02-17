import { Component } from '@angular/core';
import { PorjectCard } from '../domain/ProjectCard';

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
}
