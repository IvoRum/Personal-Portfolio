import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  title = 'portfolio';
  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 3, rows: 3, color: 'lightpink' },
    { text: 'Four', cols: 3, rows: 3, color: '#DDBDF1' },
  ];
  projectList = [
    {
      name: '>Hello, World!  \n I`m Ivo a software developer',
      description:
        'Crafting Digital Excellence: Where Imagination Meets Innovation to Create Engaging Websites.',
      descriptionClass: 'hello-decription',
      img: '',
      class: 'title hello-card',
      titleclass: 'title',
      buttons1: 'assets\\img\\github.png',
      buttons2: 'assets\\img\\linkedin.png',
    },
    {
      img: 'assets/img/CropIvo3.png',
      class: 'profilemain',
    },
    {
      name: 'TicketFlow',
      description:
        'Is an all-in-one solution for seamless ticketing, queue management and reservations.',
      img: 'https://cdn.dribbble.com/userupload/5516257/file/original-915761691430db03304277e819801011.png?resize=1024x768&vertical=center',
      link: 'ticketflow',
      class: 'profilemain',
    },
    {
      name: 'FitFusion',
      description:
        'Is a direct line to personalized health and wellness. Train, plane and meal prep.',
      img: 'assets\\img\\fitfusion.png',
      link: 'fitfusion',
      class: 'profilemain',
    },
  ];
}
