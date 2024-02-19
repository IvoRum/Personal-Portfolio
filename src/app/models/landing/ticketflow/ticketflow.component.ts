import { Component } from '@angular/core';

@Component({
  selector: 'app-ticketflow',
  templateUrl: './ticketflow.component.html',
  styleUrls: ['./ticketflow.component.css'],
})
export class TicketflowComponent {
  images: string[] = [
    'assets\\img\\TicketFlowdAdmin.png',
    'assets\\img\\blog1.jpg',
    'getfit.jpg',
    // Add more image paths as needed
  ];

  currentIndex: number = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrev() {
    this.currentIndex =
      (this.currentIndex + this.images.length - 1) % this.images.length;
  }
}
