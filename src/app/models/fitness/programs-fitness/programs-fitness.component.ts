import { Component } from '@angular/core';
import { Course } from '../dto/Course';

@Component({
  selector: 'app-programs-fitness',
  templateUrl: './programs-fitness.component.html',
  styleUrls: ['./programs-fitness.component.css'],
})
export class ProgramsFitnessComponent {
  corses: Course[] = [
    {
      name: '🧘 Standert Yoga',
      proficiency: 1,
      exercises: [
        {
          exercise: {
            name: 'Warm up day',
            description: 'A day to get the week a good start',
            ing: '',
            score: 1,
          },
          weekDay: 'Sunday',
        },
      ],
    },
  ];
}
