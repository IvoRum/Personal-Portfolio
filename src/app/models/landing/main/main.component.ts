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
      body: 'A multy versital ticket system',
      img: 'img1.png',
      cardColor: 'color1',
      textColor: 'tesxt color',
    },
    {
      title: 'Fit Fusion',
      body: '',
      img: 'assets\\img\\fitfusion.png',
      cardColor: 'color1',
      textColor: 'tesxt color',
    },
    {
      title: 'Title1',
      body: 'body1',
      img: 'img1.png',
      cardColor: 'color1',
      textColor: 'tesxt color',
    },
    {
      title: 'Title1',
      body: 'body1',
      img: 'img1.png',
      cardColor: 'color1',
      textColor: 'tesxt color',
    },
  ];
}
