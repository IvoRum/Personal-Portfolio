import { Component } from '@angular/core';
import { project } from './data/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  projectList = [
    {
      name: 'TicketFlow',
      description:
        'Is a all-in-one solution for seamless ticketing, queue management, and reservations.',
      img: 'https://cdn.dribbble.com/userupload/5516257/file/original-915761691430db03304277e819801011.png?resize=1024x768&vertical=center',
    },
    {
      name: 'FitFusion',
      description: 'Is a direct line to personalized health and wellness.',
      img: 'https://cdn.dribbble.com/userupload/9070186/file/original-b976caf1433a73a00e9839621919a27e.png?resize=1024x768&vertical=center',
    },
  ];
}
