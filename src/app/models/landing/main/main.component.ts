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
